import type { AddressOrPair, SubmittableExtrinsic } from '@polkadot/api/types'
import type { EventRecord } from '@polkadot/types/interfaces'
import type { ISubmittableResult } from '@polkadot/types/types'
import { isString, isU8a, u8aToHex } from '@polkadot/util'
import { signAndSend } from '@zeitgeistpm/rpc'
import * as E from '@zeitgeistpm/utility/dist/either'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { FullContext, RpcContext } from '../../../../context'
import { MetadataStorage, StorageTypeOf } from '../../../../meta'
import { RpcPool, rpcPool } from '../../../../model/swaps/pool'
import { RpcMarket, rpcMarket } from '../../market'
import {
  CreateMarketData,
  CreateMarketParams,
  CreateMarketResult,
  CreateMarketTransaction,
  isWithPool,
} from './types'

/**
 * Create a market on chain.
 *
 * @generic C extends RpcContext<MS> | FullContext<MS>
 * @generic MS extends MetadataStorage
 * @param context C
 * @param params CreateMarketParams<C, MS>
 * @returns void
 */
export const create = async <
  C extends RpcContext<MS>,
  MS extends MetadataStorage,
  P extends CreateMarketParams<C, MS> = CreateMarketParams<C, MS>,
>(
  context: C,
  params: P,
): Promise<CreateMarketResult<C, MS>> => {
  const { tx, rollbackMetadata } = await transaction(context, params)
  const response = signAndSend({
    api: context.api,
    tx,
    signer: params.signer,
    hooks: params.hooks,
  })

  const submittableResult = await response.unrightOr(error => {
    rollbackMetadata()
    throw error
  })

  const saturate = extraction(context, submittableResult, params)

  return {
    raw: submittableResult,
    saturate,
  }
}

/**
 * Create lazy transaction for creating a market.
 *
 * @generic C extends RpcContext<MS> | FullContext<MS>
 * @generic MS extends MetadataStorage
 * @param context C
 * @param params CreateMarketParams<C, MS>
 * @returns CreateMarketTransaction
 */
export const transaction = async <C extends RpcContext<MS>, MS extends MetadataStorage>(
  context: C,
  params: CreateMarketParams<C, MS>,
): Promise<CreateMarketTransaction> => {
  let tx: SubmittableExtrinsic<'promise', ISubmittableResult>

  const marketImageCid = isString(params.metadata.img)
    ? params.metadata.img
    : params.metadata.img
    ? await context.storage.files.put(params.metadata.img).unwrap()
    : undefined

  const marketStorage = context.storage.of('markets')

  const key = await marketStorage.put({
    ...params.metadata,
    img: marketImageCid?.toString(),
  } as StorageTypeOf<MS['markets']>)

  const rollbackMetadata = Te.from(async () => {
    let operations = [context.storage?.of('markets').del(key)]

    if (marketImageCid && !isString(marketImageCid)) {
      marketImageCid
      operations.push(context.storage?.files.del(marketImageCid))
    }

    return Promise.all(operations)
  })

  const Sha3_384 = isString(key)
    ? key
    : isU8a(key.cid)
    ? u8aToHex(key.cid)
    : key.cid.multihash.bytes

  if (isWithPool(params)) {
    tx = context.api.tx.predictionMarkets.createCpmmMarketAndDeployAssets(
      params.baseAsset,
      params.oracle,
      params.period,
      params.deadlines,
      { Sha3_384 },
      params.marketType,
      params.disputeMechanism,
      params.pool.swapFee,
      params.pool.amount,
      params.pool.weights,
    )
  } else {
    tx = context.api.tx.predictionMarkets.createMarket(
      params.baseAsset,
      params.oracle,
      params.period,
      params.deadlines,
      { Sha3_384 },
      params.creationType,
      params.marketType,
      params.disputeMechanism,
      params.scoringRule === 'Cpmm' ? 'CPMM' : params.scoringRule ?? 'CPMM',
    )
  }

  return {
    tx,
    rollbackMetadata,
  }
}

/**
 * Lazily extract metadata from the market creation block.
 *
 * @generic MS extends MetadataStorage
 * @generic P extends CreateMarketParams<MS
 * @param context RpcContext<MS>
 * @param result ISubmittableResult
 * @param params P
 * @returns () => EitherInterface<Error, CreateMarketData<P>>
 */
const extraction =
  <C extends RpcContext<MS> | FullContext<MS>, MS extends MetadataStorage>(
    context: C,
    result: ISubmittableResult,
    params: CreateMarketParams<C, MS>,
  ) =>
  () =>
    E.tryCatch<Error, CreateMarketData<C, MS, CreateMarketParams<C, MS>>>(() => {
      const market = extractMarketCreationEventForAddress<C, MS>(
        context,
        result.events,
        params.signer.address,
      ).unwrap()

      const pool = isWithPool(params)
        ? extractPoolCreationEventForMarket(
            context,
            result.events,
            market.marketId,
          ).unwrap()
        : undefined

      return {
        market,
        pool,
      } as CreateMarketData<C, MS, CreateMarketParams<C, MS>>
    })

/**
 * Get the market creation event from the finalized block events.
 *
 * @private
 *
 * @param api ApiPromise
 * @param events EventRecord[]
 * @param address AddressOrPair
 */
export const extractMarketCreationEventForAddress = <
  C extends RpcContext<MS> | FullContext<MS>,
  MS extends MetadataStorage,
>(
  ctx: C,
  events: EventRecord[],
  address: AddressOrPair,
): E.IEither<Error, RpcMarket<C, MS>> =>
  E.tryCatch(() => {
    for (const { event } of events) {
      if (ctx.api.events.predictionMarkets.MarketCreated.is(event)) {
        const [id, , primitive] = event.data
        if (primitive.creator.eq(address)) {
          return rpcMarket<C, MS>(ctx, id, primitive) as RpcMarket<C, MS>
        }
      }
    }
    throw new Error('No market creation event found on finalized block. Should not happen.')
  })

/**
 * Get the pool creation event from the finalized block events.
 *
 * @private
 *
 * @param api ApiPromise
 * @param events EventRecord[]
 * @param marketId number
 */
export const extractPoolCreationEventForMarket = <
  C extends RpcContext<MS> | FullContext<MS>,
  MS extends MetadataStorage,
>(
  ctx: C,
  events: EventRecord[],
  marketId: number,
): E.IEither<Error, RpcPool> =>
  E.tryCatch(() => {
    for (const { event } of events) {
      if (ctx.api.events.swaps.PoolCreate.is(event)) {
        const [{ poolId }, pool] = event.data
        if (pool.marketId.eq(marketId)) {
          return rpcPool(ctx, poolId.toNumber(), pool)
        }
      }
    }
    throw new Error(
      'No pool creation event found on finalized block. Should not happen when creating with pool.',
    )
  })
