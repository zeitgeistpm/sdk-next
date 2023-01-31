import type { Option, StorageKey, u128, Vec } from '@polkadot/types'
import type {
  ZeitgeistPrimitivesAsset,
  ZeitgeistPrimitivesPool,
} from '@polkadot/types/lookup'
import type { ISubmittableResult } from '@polkadot/types/types'
import { isNumber } from '@polkadot/util'
import { PoolsQuery } from '@zeitgeistpm/indexer'
import {
  KeyringPairOrExtSigner,
  signAndSend,
  TransactionError,
  TransactionHooks,
} from '@zeitgeistpm/rpc'
import { Unpacked } from '@zeitgeistpm/utility/dist/array'
import * as O from '@zeitgeistpm/utility/dist/option'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import Decimal from 'decimal.js'
import { isEqual } from 'lodash-es'
import { Context, IndexerContext, RpcContext } from '../../context'
import { MetadataStorage } from '../../meta'
import {
  AssetId,
  parseAssetId,
  getIndexOf,
  IOCategoricalAssetId,
  IOScalarAssetId,
  IOZtgAssetId,
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
> = Unpacked<PoolsQuery['pools']> & (C extends RpcContext<MS> ? PoolMethods : {})

/**
 * Concrete Pool type for rpc Pool.
 */
export type RpcPool = (ZeitgeistPrimitivesPool & PoolMethods) & {
  /**
   * The pool id/index on chain.
   */
  poolId: number
}

export type PoolMethods = {
  /**
   * Get the account id for the pool.
   */
  accountId: Te.TaskEither<Error, string, []>
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
  marketId: number | u128
  amount: number
  signer: KeyringPairOrExtSigner
}

export type SwapExactAmountInParams = {
  poolId: u128 | number | Uint8Array
  assetIn: ZeitgeistPrimitivesAsset | AssetId | Uint8Array
  assetAmountIn: u128 | number | Uint8Array
  assetOut: ZeitgeistPrimitivesAsset | AssetId | Uint8Array
  minAssetAmountOut?: u128 | number | Uint8Array
  maxPrice?: u128 | number | Uint8Array
  signer: KeyringPairOrExtSigner
}

export type SwapExactAmountOutParams = {
  poolId: u128 | number | Uint8Array
  assetIn: ZeitgeistPrimitivesAsset | AssetId | Uint8Array
  maxAssetAmountIn?: u128 | number | Uint8Array | null
  assetOut: ZeitgeistPrimitivesAsset | AssetId | Uint8Array
  assetAmountOut: u128 | number | Uint8Array
  maxPrice?: u128 | number | Uint8Array | null
  signer: KeyringPairOrExtSigner
}

export type PoolJoinParams = {
  poolId: u128 | number | Uint8Array
  poolAmount: u128 | number | Uint8Array
  maxAssetsIn: Vec<u128> | Array<u128 | number | Uint8Array>
  signer: KeyringPairOrExtSigner
}

export type PoolJoinWithExactAmountParams = {
  poolId: u128 | number | Uint8Array
  assetIn: ZeitgeistPrimitivesAsset | AssetId | Uint8Array
  assetAmount: u128 | number | Uint8Array
  minPoolAmount: u128 | number | Uint8Array
  signer: KeyringPairOrExtSigner
}

export type PoolJoinWithExactPoolAmount = {
  poolId: u128 | number | Uint8Array
  asset: ZeitgeistPrimitivesAsset | AssetId | Uint8Array
  poolAmount: u128 | number | Uint8Array
  maxAssetAmount: u128 | number | Uint8Array
  signer: KeyringPairOrExtSigner
}

export type PoolExitParams = {
  poolId: u128 | number | Uint8Array
  poolAmount: u128 | number | Uint8Array
  minAssetsOut: Vec<u128> | Array<u128 | number | Uint8Array>
  signer: KeyringPairOrExtSigner
}

export type PoolExitSubsidyParams = {
  poolId: u128 | number | Uint8Array
  amount: u128 | number | Uint8Array
  signer: KeyringPairOrExtSigner
}

export type PoolExitWithExactAssetAmountParams = {
  poolId: u128 | number | Uint8Array
  asset: ZeitgeistPrimitivesAsset | AssetId | Uint8Array
  assetAmount: u128 | number | Uint8Array
  maxPoolAmount: u128 | number | Uint8Array
  signer: KeyringPairOrExtSigner
}

export type PoolExitWithExactPoolAmountParams = {
  poolId: u128 | number | Uint8Array
  asset: ZeitgeistPrimitivesAsset | AssetId | Uint8Array
  poolAmount: u128 | number | Uint8Array
  minAssetAmount: u128 | number | Uint8Array
  signer: KeyringPairOrExtSigner
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

  pool.accountId = Te.from(async () =>
    (await ctx.api.rpc.swaps.poolAccountId(poolId)).toString(),
  )

  pool.swapExactAmountIn = Te.from(async params =>
    signAndSend({
      api: ctx.api,
      tx: ctx.api.tx.swaps.swapExactAmountIn(
        poolId,
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
        poolId,
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
      tx: ctx.api.tx.swaps.poolJoin(poolId, params.poolAmount, params.maxAssetsIn),
      signer: params.signer,
      hooks: params.hooks,
    }),
  )

  pool.joinSubsidy = Te.from(async params =>
    signAndSend({
      api: ctx.api,
      tx: ctx.api.tx.swaps.poolJoinSubsidy(poolId, params.poolAmount),
      signer: params.signer,
      hooks: params.hooks,
    }),
  )

  pool.joinWithExactAssetAmount = Te.from(async params =>
    signAndSend({
      api: ctx.api,
      tx: ctx.api.tx.swaps.poolJoinWithExactAssetAmount(
        poolId,
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
        poolId,
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
      tx: ctx.api.tx.swaps.poolExit(poolId, params.poolAmount, params.minAssetsOut),
      signer: params.signer,
      hooks: params.hooks,
    }),
  )

  pool.exitSubsidy = Te.from(async params =>
    signAndSend({
      api: ctx.api,
      tx: ctx.api.tx.swaps.poolExitSubsidy(poolId, params.amount),
      signer: params.signer,
      hooks: params.hooks,
    }),
  )

  pool.exitWithExactAssetAmount = Te.from(async params =>
    signAndSend({
      api: ctx.api,
      tx: ctx.api.tx.swaps.poolExitWithExactAssetAmount(
        poolId,
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
        poolId,
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
 * Get the weight of an asset in a pool by its AssetId.
 *
 * @param pool Pool<C, MS>,
 * @param assetId AssetId
 * @returns O.IOption<Decimal>
 */
export const getAssetWeight = <C extends Context<MS>, MS extends MetadataStorage>(
  pool: Pool<C, MS>,
  assetId: AssetId,
): O.IOption<Decimal> => {
  let weight: string | undefined

  if (isRpcData(pool)) {
    const weights = pool.weights.unwrapOr(null)

    if (!weights) {
      return O.option(O.none())
    }

    const entries = [...weights.entries()]

    if (IOZtgAssetId.is(assetId)) {
      weight = entries.find(([asset]) => asset.isZtg)?.[1]?.toString()
    } else if (IOCategoricalAssetId.is(assetId)) {
      weight = entries
        .find(
          ([asset]) =>
            asset.isCategoricalOutcome &&
            asset.asCategoricalOutcome[1].toNumber() === getIndexOf(assetId),
        )
        ?.toString()
    } else if (IOScalarAssetId.is(assetId)) {
      weight = entries
        .find(
          ([asset]) =>
            asset.isScalarOutcome &&
            ((asset.asScalarOutcome[1].isLong && assetId.ScalarOutcome[1] === 'Long') ||
              (asset.asScalarOutcome[1].isShort && assetId.ScalarOutcome[1] === 'Short')),
        )
        ?.toString()
    }
  } else {
    weight = pool.weights.find(
      weight => weight?.assetId && isEqual(parseAssetId(weight?.assetId).unwrap(), assetId),
    )?.len
  }

  return weight ? O.option(O.some(new Decimal(weight))) : O.option(O.none())
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
