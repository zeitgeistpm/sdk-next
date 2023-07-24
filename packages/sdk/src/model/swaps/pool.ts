import type { Option, StorageKey, u128, Vec } from '@polkadot/types'

import type {
  ZeitgeistPrimitivesAsset,
  ZeitgeistPrimitivesPool,
} from '@polkadot/types/lookup'
import type { ISubmittableResult } from '@polkadot/types/types'
import { isCodec, isNumber } from '@polkadot/util'
import { PoolsQuery } from '@zeitgeistpm/indexer'
import {
  KeyringPairOrExtSigner,
  signAndSend,
  TransactionError,
  TransactionHooks,
} from '@zeitgeistpm/rpc'
import { Unpacked } from '@zeitgeistpm/utility/dist/array'
import { unwrap } from '@zeitgeistpm/utility/dist/either'
import * as O from '@zeitgeistpm/utility/dist/option'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import Decimal from 'decimal.js'
import { isEqual } from 'lodash-es'
import { Context, IndexerContext, isRpcContext, RpcContext } from '../../context'
import { MetadataStorage } from '../../meta'
import {
  AssetId,
  getIndexOf,
  IOBaseAssetId,
  IOCategoricalAssetId,
  IOScalarAssetId,
  IOZtgAssetId,
  parseAssetId,
} from '../../primitives'
import { Data, isRpcData } from '../../primitives/data'

/**
 * Union Pool type of indexed and rpc types.
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to fetch the marketlist for.
 */
export type Pool<
  C extends Context<MS>,
  MS extends MetadataStorage = MetadataStorage,
> = Data<
  C,
  C extends RpcContext<MS> ? RpcPool : never,
  C extends IndexerContext ? IndexedPool<C, MS> : never,
  MS
>

/**
 * Concrete Pool type for indexed Pool.
 */
export type IndexedPool<
  C extends Context<MS>,
  MS extends MetadataStorage = MetadataStorage,
> = Unpacked<PoolsQuery['pools']> &
  PoolMethods &
  (C extends RpcContext<MS> ? PoolRpcOnlyMethods : {})

/**
 * Concrete Pool type for rpc Pool.
 */
export type RpcPool = (ZeitgeistPrimitivesPool & PoolMethods & PoolRpcOnlyMethods) & {
  /**
   * The pool id/index on chain.
   */
  poolId: number
}

/**
 * Create new RpcPool with associated context, id and on chain primitive.
 *
 * @param ctx RpcContext
 * @param poolId number | u128
 * @param primitive ZeitgeistPrimitivesPool
 * @returns RpcPool
 */
export const rpcPool = (
  ctx: RpcContext,
  poolId: number | u128,
  primitive: ZeitgeistPrimitivesPool,
): RpcPool => {
  let pool = primitive as RpcPool
  pool.poolId = isNumber(poolId) ? poolId : poolId.toNumber()
  return attachPoolMethods(ctx, attachPoolRcpOnlyMethods(ctx, pool))
}

export type PoolMethods = {
  getSwapFee: () => Decimal
  getAssetIds: () => AssetId[]
  getAssetWeight: (assetId: AssetId) => O.IOption<Decimal>
  getAssetBalance: Te.TaskEither<Error, Decimal, [assetId: AssetId]>
}

export const attachPoolMethods = <
  C extends Context<MS>,
  MS extends MetadataStorage = MetadataStorage,
>(
  ctx: C,
  primitive: ZeitgeistPrimitivesPool | Unpacked<PoolsQuery['pools']>,
) => {
  let pool = primitive as Pool<C, MS>

  pool.getSwapFee = () => getSwapFee(pool)
  pool.getAssetIds = () => getAssetIds(pool)
  pool.getAssetWeight = assetId => getAssetWeight(pool, assetId)
  pool.getAssetBalance = Te.from(assetId => getAssetBalance(ctx, pool, assetId))

  return pool
}

export type PoolRpcOnlyMethods = {
  /**
   * Get the account id for the pool.
   */
  getAccountId: Te.TaskEither<Error, string, []>
  /**
   * Get the total issuance of pool shares for the pool.
   */
  getTotalIssuance: Te.TaskEither<Error, Decimal, []>

  swapExactAmountIn: Te.TaskEither<
    TransactionError,
    ISubmittableResult,
    [params: Omit<SwapExactAmountInParams, 'poolId'> & TransactionHooks]
  >
  swapExactAmountOut: Te.TaskEither<
    TransactionError,
    ISubmittableResult,
    [params: Omit<SwapExactAmountOutParams, 'poolId'> & TransactionHooks]
  >
  join: Te.TaskEither<
    TransactionError,
    ISubmittableResult,
    [params: Omit<PoolJoinParams, 'poolId'> & TransactionHooks]
  >
  joinSubsidy: Te.TaskEither<
    TransactionError,
    ISubmittableResult,
    [params: Omit<PoolJoinParams, 'poolId' | 'maxAssetsIn'> & TransactionHooks]
  >
  joinWithExactAssetAmount: Te.TaskEither<
    TransactionError,
    ISubmittableResult,
    [params: Omit<PoolJoinWithExactAmountParams, 'poolId'> & TransactionHooks]
  >
  joinWithExactPoolAmount: Te.TaskEither<
    TransactionError,
    ISubmittableResult,
    [params: Omit<PoolJoinWithExactPoolAmount, 'poolId'> & TransactionHooks]
  >
  exit: Te.TaskEither<
    TransactionError,
    ISubmittableResult,
    [params: Omit<PoolExitParams, 'poolId'> & TransactionHooks]
  >
  exitSubsidy: Te.TaskEither<
    TransactionError,
    ISubmittableResult,
    [params: Omit<PoolExitSubsidyParams, 'poolId'> & TransactionHooks]
  >
  exitWithExactAssetAmount: Te.TaskEither<
    TransactionError,
    ISubmittableResult,
    [params: Omit<PoolExitWithExactAssetAmountParams, 'poolId'> & TransactionHooks]
  >
  exitWithExactPoolAmount: Te.TaskEither<
    TransactionError,
    ISubmittableResult,
    [params: Omit<PoolExitWithExactPoolAmountParams, 'poolId'> & TransactionHooks]
  >
}

/**
 * Create new RpcPool with associated context, id and on chain primitive.
 *
 * @param ctx RpcContext
 * @param poolId number | u128
 * @param primitive ZeitgeistPrimitivesPool
 * @returns RpcPool
 */
export const attachPoolRcpOnlyMethods = (
  ctx: RpcContext,
  primitive: ZeitgeistPrimitivesPool | Unpacked<PoolsQuery['pools']>,
): RpcPool => {
  let pool = primitive as RpcPool

  pool.getAccountId = Te.from(async () =>
    (await ctx.api.rpc.swaps.poolAccountId(pool.poolId)).toString(),
  )

  pool.getTotalIssuance = Te.from(async () => {
    const totalPoolShares = await ctx.api.query.tokens.totalIssuance({
      PoolShare: pool.poolId,
    })
    return new Decimal(totalPoolShares.toString())
  })

  pool.swapExactAmountIn = Te.from(async params =>
    signAndSend({
      api: ctx.api,
      tx: ctx.api.tx.swaps.swapExactAmountIn(
        pool.poolId,
        params.assetIn,
        params.assetAmountIn,
        params.assetOut,
        params.minAssetAmountOut ?? null,
        params.maxPrice ?? null,
      ),
      signer: params.signer,
      hooks: params.hooks,
    }),
  )

  pool.swapExactAmountOut = Te.from(async params =>
    signAndSend({
      api: ctx.api,
      tx: ctx.api.tx.swaps.swapExactAmountOut(
        pool.poolId,
        params.assetIn,
        params.maxAssetAmountIn ?? null,
        params.assetOut,
        params.assetAmountOut,
        params.maxPrice ?? null,
      ),
      signer: params.signer,
      hooks: params.hooks,
    }),
  )

  pool.join = Te.from(async params =>
    signAndSend({
      api: ctx.api,
      tx: ctx.api.tx.swaps.poolJoin(pool.poolId, params.poolAmount, params.maxAssetsIn),
      signer: params.signer,
      hooks: params.hooks,
    }),
  )

  pool.joinSubsidy = Te.from(async params =>
    signAndSend({
      api: ctx.api,
      tx: ctx.api.tx.swaps.poolJoinSubsidy(pool.poolId, params.poolAmount),
      signer: params.signer,
      hooks: params.hooks,
    }),
  )

  pool.joinWithExactAssetAmount = Te.from(async params =>
    signAndSend({
      api: ctx.api,
      tx: ctx.api.tx.swaps.poolJoinWithExactAssetAmount(
        pool.poolId,
        params.assetIn,
        params.assetAmount,
        params.minPoolAmount,
      ),
      signer: params.signer,
      hooks: params.hooks,
    }),
  )

  pool.joinWithExactPoolAmount = Te.from(async params =>
    signAndSend({
      api: ctx.api,
      tx: ctx.api.tx.swaps.poolJoinWithExactPoolAmount(
        pool.poolId,
        params.asset,
        params.poolAmount,
        params.maxAssetAmount,
      ),
      signer: params.signer,
      hooks: params.hooks,
    }),
  )

  pool.exit = Te.from(async params =>
    signAndSend({
      api: ctx.api,
      tx: ctx.api.tx.swaps.poolExit(pool.poolId, params.poolAmount, params.minAssetsOut),
      signer: params.signer,
      hooks: params.hooks,
    }),
  )

  pool.exitSubsidy = Te.from(async params =>
    signAndSend({
      api: ctx.api,
      tx: ctx.api.tx.swaps.poolExitSubsidy(pool.poolId, params.amount),
      signer: params.signer,
      hooks: params.hooks,
    }),
  )

  pool.exitWithExactAssetAmount = Te.from(async params =>
    signAndSend({
      api: ctx.api,
      tx: ctx.api.tx.swaps.poolExitWithExactAssetAmount(
        pool.poolId,
        params.asset,
        params.assetAmount,
        params.maxPoolAmount,
      ),
      signer: params.signer,
      hooks: params.hooks,
    }),
  )

  pool.exitWithExactPoolAmount = Te.from(async params =>
    signAndSend({
      api: ctx.api,
      tx: ctx.api.tx.swaps.poolExitWithExactPoolAmount(
        pool.poolId,
        params.asset,
        params.poolAmount,
        params.minAssetAmount,
      ),
      signer: params.signer,
      hooks: params.hooks,
    }),
  )

  return pool
}

/**
 * Params needed to create a pool.
 */
export type PoolDeploymentParams = {
  marketId: number | u128
  swapFee: string | number | u128
  amount: string | number | u128
  weights: Array<string | number | u128>
  signer: KeyringPairOrExtSigner
}

/**
 * Params needed to exhange(buy or sell) a full set of assets for a pool.
 */
export type ExchangeFullSetParams = {
  marketId: number | string | u128
  amount: number | string | u128
  signer: KeyringPairOrExtSigner
}

export type SwapExactAmountInParams = {
  poolId: string | u128 | number | Uint8Array
  assetIn: ZeitgeistPrimitivesAsset | AssetId | Uint8Array
  assetAmountIn: string | u128 | number | Uint8Array
  assetOut: ZeitgeistPrimitivesAsset | AssetId | Uint8Array
  minAssetAmountOut?: string | u128 | number | Uint8Array
  maxPrice?: string | u128 | number | Uint8Array
  signer: KeyringPairOrExtSigner
}

export type SwapExactAmountOutParams = {
  poolId: string | u128 | number | Uint8Array
  assetIn: ZeitgeistPrimitivesAsset | AssetId | Uint8Array
  maxAssetAmountIn?: string | u128 | number | Uint8Array | null
  assetOut: ZeitgeistPrimitivesAsset | AssetId | Uint8Array
  assetAmountOut: string | u128 | number | Uint8Array
  maxPrice?: string | u128 | number | Uint8Array | null
  signer: KeyringPairOrExtSigner
}

export type PoolJoinParams = {
  poolId: string | u128 | number | Uint8Array
  poolAmount: string | u128 | number | Uint8Array
  maxAssetsIn: Vec<u128> | Array<string | u128 | number | Uint8Array>
  signer: KeyringPairOrExtSigner
}

export type PoolJoinWithExactAmountParams = {
  poolId: string | u128 | number | Uint8Array
  assetIn: ZeitgeistPrimitivesAsset | AssetId | Uint8Array
  assetAmount: string | u128 | number | Uint8Array
  minPoolAmount: string | u128 | number | Uint8Array
  signer: KeyringPairOrExtSigner
}

export type PoolJoinWithExactPoolAmount = {
  poolId: string | u128 | number | Uint8Array
  asset: ZeitgeistPrimitivesAsset | AssetId | Uint8Array
  poolAmount: string | u128 | number | Uint8Array
  maxAssetAmount: string | u128 | number | Uint8Array
  signer: KeyringPairOrExtSigner
}

export type PoolExitParams = {
  poolId: string | u128 | number | Uint8Array
  poolAmount: string | u128 | number | Uint8Array
  minAssetsOut: Vec<u128> | Array<string | u128 | number | Uint8Array>
  signer: KeyringPairOrExtSigner
}

export type PoolExitSubsidyParams = {
  poolId: string | u128 | number | Uint8Array
  amount: string | u128 | number | Uint8Array
  signer: KeyringPairOrExtSigner
}

export type PoolExitWithExactAssetAmountParams = {
  poolId: string | u128 | number | Uint8Array
  asset: ZeitgeistPrimitivesAsset | AssetId | Uint8Array
  assetAmount: string | u128 | number | Uint8Array
  maxPoolAmount: string | u128 | number | Uint8Array
  signer: KeyringPairOrExtSigner
}

export type PoolExitWithExactPoolAmountParams = {
  poolId: string | u128 | number | Uint8Array
  asset: ZeitgeistPrimitivesAsset | AssetId | Uint8Array
  poolAmount: string | u128 | number | Uint8Array
  minAssetAmount: string | u128 | number | Uint8Array
  signer: KeyringPairOrExtSigner
}

/**
 * Get the swap fee of a pool.
 *
 * @param pool Pool<C, MS>,
 * @returns Decimal
 */
export const getSwapFee = <C extends Context<MS>, MS extends MetadataStorage>(
  pool: Pool<C, MS>,
): Decimal => {
  if (isRpcData(pool)) {
    return new Decimal(pool.swapFee.unwrapOrDefault().toNumber())
  } else {
    return new Decimal(pool.swapFee || '0')
  }
}

/**
 * Get the assets in a pool.
 *
 * @param pool Pool<C, MS>,
 * @returns AssetId[]
 */
export const getAssetIds = <C extends Context<MS>, MS extends MetadataStorage>(
  pool: Pool<C, MS>,
): AssetId[] => {
  let assets: AssetId[] = []
  if (isRpcData(pool)) {
    assets = pool.assets.map(parseAssetId).map(unwrap)
  } else {
    assets = pool.weights.map(weight => parseAssetId(weight!.assetId).unwrap())
  }

  return assets
}

/**
 *
 * Get the base asset of a pool.
 *
 * @param pool Pool<C, MS>,
 * @returns AssetId
 */
export const getBaseAsset = <C extends Context<MS>, MS extends MetadataStorage>(
  pool: Pool<C, MS>,
): AssetId => {
  return getAssetIds(pool).find(assetId => IOBaseAssetId.is(assetId)) as AssetId
}

/**
 * Get the weight of an asset in a pool by its AssetId.
 *
 * @param pool Pool<C, MS>,
 * @param assetId AssetId
 * @returns O.IOption<Decimal>
 */
export const getAssetWeight = <C extends Context<MS>, MS extends MetadataStorage>(
  pool: Pool<C, MS>,
  _assetId: AssetId | ZeitgeistPrimitivesAsset,
): O.IOption<Decimal> => {
  let weight: string | undefined

  const assetId = isCodec(_assetId) ? parseAssetId(_assetId).unwrap() : _assetId

  if (isRpcData(pool)) {
    const weights = pool.weights.unwrapOr(null)

    if (!weights) {
      return O.option(O.none())
    }

    const entries = [...weights.entries()]

    if (IOBaseAssetId.is(assetId)) {
      weight = entries
        .find(([asset]) => asset.isZtg || asset.isForeignAsset)?.[1]
        ?.toString()
    } else if (IOCategoricalAssetId.is(assetId)) {
      weight = entries
        .find(
          ([asset]) =>
            asset.isCategoricalOutcome &&
            asset.asCategoricalOutcome[1].toNumber() === getIndexOf(assetId),
        )?.[1]
        .toString()
    } else if (IOScalarAssetId.is(assetId)) {
      weight = entries
        .find(
          ([asset]) =>
            asset.isScalarOutcome &&
            ((asset.asScalarOutcome[1].isLong && assetId.ScalarOutcome[1] === 'Long') ||
              (asset.asScalarOutcome[1].isShort && assetId.ScalarOutcome[1] === 'Short')),
        )?.[1]
        .toString()
    }
  } else {
    weight = pool.weights.find(
      weight => weight?.assetId && isEqual(parseAssetId(weight?.assetId).unwrap(), assetId),
    )?.weight
  }

  return weight ? O.option(O.some(new Decimal(weight))) : O.option(O.none())
}

/**
 * Fetch the balance of an asset in a pool, prioritizing rpc data if the sdk is in full context mode.
 * Can be used for both pools outcome assets and the pool's native/base asset.
 *
 * @param ctx Context<MS>
 * @param pool Pool<C, MS>
 * @param assetId AssetId
 * @returns Decimal
 */
export const getAssetBalance = async <C extends Context<MS>, MS extends MetadataStorage>(
  ctx: C,
  pool: Pool<C, MS>,
  _assetId: AssetId,
): Promise<Decimal> => {
  const assetId = isCodec(_assetId) ? parseAssetId(_assetId).unwrap() : _assetId

  if (isRpcContext(ctx)) {
    const poolAccountId = (await ctx.api.rpc.swaps.poolAccountId(pool.poolId)).toString()

    if (IOZtgAssetId.is(assetId)) {
      const poolZtgBalance = await ctx.api.query.system
        .account(poolAccountId)
        .then(account => account.data.free.toString())

      return new Decimal(poolZtgBalance)
    }

    const poolAssetBalance = await ctx.api.query.tokens
      .accounts(poolAccountId, assetId)
      .then(data => data.free.toString())

    return new Decimal(poolAssetBalance)
  } else {
    const indexedAsset = await ctx.indexer.assets({
      where: {
        pool: {
          poolId_eq: pool.poolId,
        },
        assetId_eq: JSON.stringify(assetId),
      },
    })

    return new Decimal(indexedAsset.assets[0].amountInPool)
  }
}

export const getTotalIssuance = async <C extends Context<MS>, MS extends MetadataStorage>(
  ctx: C,
  pool: Pool<C, MS>,
) => {
  if (isRpcContext(ctx)) {
    const totalPoolShares = await ctx.api.query.tokens.totalIssuance({
      PoolShare: pool.poolId,
    })
    return new Decimal(totalPoolShares.toString())
  } else {
    const { accountBalances } = await ctx.indexer.accountBalances({
      where: {
        assetId_eq: JSON.stringify({ poolShare: pool.poolId }),
      },
    })
    return new Decimal(accountBalances[0].balance)
  }
}

/**
 * Map storage entries to rpc pools
 *
 * @param ctx RpcContext<MS>
 * @param entries [StorageKey<[u128]>, Option<ZeitgeistPrimitivesPool>][]
 * @returns RpcPool[]
 */
export const fromEntries = <C extends RpcContext<MS>, MS extends MetadataStorage>(
  ctx: C,
  entries: [StorageKey<[u128]>, Option<ZeitgeistPrimitivesPool>][],
): Pool<C, MS>[] => {
  return entries.map(
    ([
      {
        args: [poolId],
      },
      pool,
    ]) => rpcPool(ctx, poolId.toNumber(), pool.unwrap()) as Pool<C, MS>,
  )
}
