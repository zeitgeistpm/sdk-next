import { u128, Vec } from '@polkadot/types'
import { ZeitgeistPrimitivesAsset, ZeitgeistPrimitivesPool } from '@polkadot/types/lookup'
import { ISubmittableResult } from '@polkadot/types/types'
import { isNumber } from '@polkadot/util'
import { PoolsQuery } from '@zeitgeistpm/indexer'
import { KeyringPairOrExtSigner, signAndSend } from '@zeitgeistpm/rpc'
import { Unpacked } from '@zeitgeistpm/utility/dist/array'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { Context, IndexerContext, RpcContext } from '../../context'
import { MetadataStorage } from '../../meta'
import { AssetId } from '../../primitives'
import { Data } from '../../primitives/data'

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
  C extends IndexerContext ? IndexedPool<C, MS> : never
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
    Error,
    ISubmittableResult,
    [params: Omit<SwapExactAmountInParams, 'poolId'>]
  >
  swapExactAmountOut: Te.TaskEither<
    Error,
    ISubmittableResult,
    [params: Omit<SwapExactAmountOutParams, 'poolId'>]
  >
  join: Te.TaskEither<Error, ISubmittableResult, [params: Omit<PoolJoinParams, 'poolId'>]>
  joinSubsidy: Te.TaskEither<
    Error,
    ISubmittableResult,
    [params: Omit<PoolJoinParams, 'poolId' | 'maxAssetsIn'>]
  >
  joinWithExactAssetAmount: Te.TaskEither<
    Error,
    ISubmittableResult,
    [params: Omit<PoolJoinWithExactAmountParams, 'poolId'>]
  >
  joinWithExactPoolAmount: Te.TaskEither<
    Error,
    ISubmittableResult,
    [params: Omit<PoolJoinWithExactPoolAmount, 'poolId'>]
  >
  exit: Te.TaskEither<Error, ISubmittableResult, [params: Omit<PoolExitParams, 'poolId'>]>
  exitSubsidy: Te.TaskEither<
    Error,
    ISubmittableResult,
    [params: Omit<PoolExitSubsidyParams, 'poolId'>]
  >
  exitWithExactAssetAmount: Te.TaskEither<
    Error,
    ISubmittableResult,
    [params: Omit<PoolExitWithExactAssetAmountParams, 'poolId'>]
  >
  exitWithExactPoolAmount: Te.TaskEither<
    Error,
    ISubmittableResult,
    [params: Omit<PoolExitWithExactPoolAmountParams, 'poolId'>]
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
    signAndSend(
      ctx.api,
      ctx.api.tx.swaps.swapExactAmountIn(
        poolId,
        params.assetIn,
        params.assetAmountIn,
        params.assetOut,
        params.minAssetAmountOut ?? null,
        params.maxPrice ?? null,
      ),
      params.signer,
    ),
  )

  pool.swapExactAmountOut = Te.from(async params =>
    signAndSend(
      ctx.api,
      ctx.api.tx.swaps.swapExactAmountOut(
        poolId,
        params.assetIn,
        params.maxAssetAmountIn ?? null,
        params.assetOut,
        params.assetAmountOut,
        params.maxPrice ?? null,
      ),
      params.signer,
    ),
  )

  pool.join = Te.from(async params =>
    signAndSend(
      ctx.api,
      ctx.api.tx.swaps.poolJoin(poolId, params.poolAmount, params.maxAssetsIn),
      params.signer,
    ),
  )

  pool.joinSubsidy = Te.from(async params =>
    signAndSend(
      ctx.api,
      ctx.api.tx.swaps.poolJoinSubsidy(poolId, params.poolAmount),
      params.signer,
    ),
  )

  pool.joinWithExactAssetAmount = Te.from(async params =>
    signAndSend(
      ctx.api,
      ctx.api.tx.swaps.poolJoinWithExactAssetAmount(
        poolId,
        params.assetIn,
        params.assetAmount,
        params.minPoolAmount,
      ),
      params.signer,
    ),
  )

  pool.joinWithExactPoolAmount = Te.from(async params =>
    signAndSend(
      ctx.api,
      ctx.api.tx.swaps.poolJoinWithExactPoolAmount(
        poolId,
        params.asset,
        params.poolAmount,
        params.maxAssetAmount,
      ),
      params.signer,
    ),
  )

  pool.exit = Te.from(async params =>
    signAndSend(
      ctx.api,
      ctx.api.tx.swaps.poolExit(poolId, params.poolAmount, params.minAssetsOut),
      params.signer,
    ),
  )

  pool.exitSubsidy = Te.from(async params =>
    signAndSend(
      ctx.api,
      ctx.api.tx.swaps.poolExitSubsidy(poolId, params.amount),
      params.signer,
    ),
  )

  pool.exitWithExactAssetAmount = Te.from(async params =>
    signAndSend(
      ctx.api,
      ctx.api.tx.swaps.poolExitWithExactAssetAmount(
        poolId,
        params.asset,
        params.assetAmount,
        params.maxPoolAmount,
      ),
      params.signer,
    ),
  )

  pool.exitWithExactPoolAmount = Te.from(async params =>
    signAndSend(
      ctx.api,
      ctx.api.tx.swaps.poolExitWithExactPoolAmount(
        poolId,
        params.asset,
        params.poolAmount,
        params.minAssetAmount,
      ),
      params.signer,
    ),
  )

  return pool
}
