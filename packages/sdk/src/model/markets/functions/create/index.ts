import type { CID } from 'ipfs-http-client'
import type { ApiPromise } from '@polkadot/api'
import type { EventRecord } from '@polkadot/types/interfaces'
import type { AddressOrPair, SubmittableExtrinsic } from '@polkadot/api/types'
import type { ISubmittableResult } from '@polkadot/types/types'
import type { ZeitgeistPrimitivesMarket, ZeitgeistPrimitivesPool } from '@polkadot/types/lookup'
import { either, EitherInterface, left, right, tryCatch } from '@zeitgeistpm/utility/dist/either'
import { signAndSend } from '@zeitgeistpm/rpc'
import { throws } from '@zeitgeistpm/utility/dist/error'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { CreateMarketData, CreateMarketParams, CreateMarketResult, isWithPool } from './types'
import { FullContext, RpcContext } from '../../../../context'
import { MarketMetadata } from '../../../../meta/market'
import { MetadataStorage } from 'meta'

/**
 * Create a market on chain.
 *
 * @generic C extends RpcContext | FullContext
 * @generic P extends CreateMarketParams
 * @param context RpcContext | FullContext
 * @param params P
 * @returns void
 */
export const create = async <
  C extends RpcContext<M> | FullContext<M>,
  M extends MetadataStorage,
  P extends CreateMarketParams<M>,
>(
  context: C,
  params: P,
): Promise<CreateMarketResult<M, P>> => {
  let tx: SubmittableExtrinsic<'promise', ISubmittableResult>

  const cid = (await context.storage.markets.put(params.metadata as any)).unright().unwrap()

  if (isWithPool(params)) {
    tx = context.api.tx.predictionMarkets.createCpmmMarketAndDeployAssets(
      params.oracle,
      params.period,
      { Sha3_384: cid.multihash.bytes },
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
      { Sha3_384: cid.multihash.bytes },
      params.creationType,
      params.marketType,
      params.disputeMechanism,
      params.scoringRule === 'Cpmm' ? 'CPMM' : params.scoringRule ?? 'CPMM',
    )
  }

  const response = await signAndSend(context.api, tx, params.signer)

  const result = response.unrightOr(error => {
    if (cid) {
      deleteMetadata(context, cid)
    }
    throw error
  })

  return {
    raw: result,
    extract: extract(context, result, params),
  }
}

/**
 * Lazily extract metadata from the market creation block.
 *
 * @generic P extends CreateMarketParams
 * @param context RpcContext
 * @param result ISubmittableResult
 * @param params P
 * @returns () => EitherInterface<Error, CreateMarketData<P>>
 */
const extract =
  <C extends RpcContext<M>, M extends MetadataStorage, P extends CreateMarketParams<M>>(
    context: RpcContext<M>,
    result: ISubmittableResult,
    params: P,
  ) =>
  () =>
    either(
      tryCatch<Error, CreateMarketData<M, P>>(() => {
        const createdMarket = extractMarketCreationEventForAddress(
          context.api,
          result.events,
          params.signer.address,
        ).unrightOr(throws)

        const createdPool = isWithPool(params)
          ? extractPoolCreationEventForMarket(context.api, result.events, createdMarket[0]).unrightOr(
              throws,
            )
          : undefined

        return {
          market: createdMarket,
          pool: createdPool,
        } as CreateMarketData<M, P>
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
  async <M extends MetadataStorage>(context: RpcContext<M> | FullContext<M>, cid: CID) => {
    if (!context.storage) return
    await context.storage.markets.del(cid)
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
