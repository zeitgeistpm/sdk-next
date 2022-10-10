import type { ApiPromise } from '@polkadot/api'
import type { AddressOrPair, SubmittableExtrinsic } from '@polkadot/api/types'
import type { EventRecord } from '@polkadot/types/interfaces'
import type { ZeitgeistPrimitivesMarket, ZeitgeistPrimitivesPool } from '@polkadot/types/lookup'
import type { ISubmittableResult } from '@polkadot/types/types'
import { signAndSend } from '@zeitgeistpm/rpc'
import { either, EitherInterface, left, right, tryCatch } from '@zeitgeistpm/utility/dist/either'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { FullContext, RpcContext } from '../../../../context'
import { MetadataStorage, TaggedID } from '../../../../meta'
import { rpcMarket } from '../../../../model/markets'
import { RpcPool, rpcPool } from '../../../../model/swaps/pool'
import { CreateMarketData, CreateMarketParams, CreateMarketResult, isWithPool } from './types'

/**
 * Create a market on chain.
 *
 * @generic C extends RpcContext | FullContext
 * @generic P extends CreateMarketParams
 * @param context RpcContext | FullContext
 * @param params P
 * @returns void
 */
export const create = async <C extends RpcContext<MS> | FullContext<MS>, MS extends MetadataStorage>(
  context: C,
  params: CreateMarketParams<C, MS>,
): Promise<CreateMarketResult<C, MS>> => {
  let tx: SubmittableExtrinsic<'promise', ISubmittableResult>

  const storage = context.storage.of('markets')
  const cid = (await storage.put(params.metadata)).unright().unwrap()

  if (isWithPool(params)) {
    tx = context.api.tx.predictionMarkets.createCpmmMarketAndDeployAssets(
      params.oracle,
      params.period,
      params.deadlines,
      { Sha3_384: cid.cid.multihash.bytes },
      params.marketType,
      params.disputeMechanism,
      params.pool.swapFee,
      params.pool.amount,
      params.pool.weights,
    )
  } else {
    tx = context.api.tx.predictionMarkets.createMarket(
      params.oracle,
      params.period,
      params.deadlines,
      { Sha3_384: cid.cid.multihash.bytes },
      params.creationType,
      params.marketType,
      params.disputeMechanism,
      params.scoringRule === 'Cpmm' ? 'CPMM' : params.scoringRule ?? 'CPMM',
    )
  }

  const response = await signAndSend(context.api, tx, params.signer)

  const submittableResult = response.unrightOr(error => {
    if (cid) {
      deleteMetadata(context, cid)
    }
    throw error
  })

  return {
    raw: submittableResult,
    saturate: extraction(context, submittableResult, params),
    saturateAndUnwrap: () => extraction(context, submittableResult, params)().unwrap(),
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
    either(
      tryCatch<Error, CreateMarketData<C, MS, CreateMarketParams<C, MS>>>(() => {
        const [marketId, market] = extractMarketCreationEventForAddress(
          context.api,
          result.events,
          params.signer.address,
        ).unwrap()

        let pool: RpcPool | undefined

        const createdPool = isWithPool(params)
          ? extractPoolCreationEventForMarket(context.api, result.events, marketId).unwrap()
          : undefined

        if (createdPool) {
          const [poolId, poolPrimitive] = createdPool
          pool = rpcPool(poolId, poolPrimitive)
        }

        return {
          market: rpcMarket<C, MS>(context, marketId, market),
          pool,
        } as CreateMarketData<C, MS, CreateMarketParams<C, MS>>
      }),
    )

/**
 * Delete the metadata from storage. Used when market create transaction fails.
 *
 * @private
 *
 * @param context RpcContext | FullContext
 * @param cid CID
 */
const deleteMetadata = Te.from(
  async (context: RpcContext | FullContext, cid: TaggedID<'markets'>) => {
    if (!context.storage) return
    await context.storage.of('markets').del(cid)
  },
)

/**
 * Get the market creation event from the finalized block events.
 *
 * @private
 *
 * @param api ApiPromise
 * @param events EventRecord[]
 * @param address AddressOrPair
 */
const extractMarketCreationEventForAddress = (
  api: ApiPromise,
  events: EventRecord[],
  address: AddressOrPair,
): EitherInterface<Error, [number, ZeitgeistPrimitivesMarket]> => {
  for (const { event } of events) {
    if (api.events.predictionMarkets.MarketCreated.is(event)) {
      const [id, , market] = event.data
      if (market.creator.eq(address)) {
        return either(right([Number(id.toHuman()), market]))
      }
    }
  }
  return either(
    left(new Error('No market creation event found on finalized block. Should not happen.')),
  )
}

/**
 * Get the pool creation event from the finalized block events.
 *
 * @private
 *
 * @param api ApiPromise
 * @param events EventRecord[]
 * @param marketId number
 */
const extractPoolCreationEventForMarket = (
  api: ApiPromise,
  events: EventRecord[],
  marketId: number,
): EitherInterface<Error, [number, ZeitgeistPrimitivesPool]> => {
  for (const { event } of events) {
    if (api.events.swaps.PoolCreate.is(event)) {
      const [{ poolId }, pool] = event.data
      if (pool.marketId.eq(marketId)) {
        return either(right([Number(poolId.toHuman()), pool]))
      }
    }
  }
  return either(
    left(
      new Error(
        'No pool creation event found on finalized block. Should not happen when creating with pool.',
      ),
    ),
  )
}
