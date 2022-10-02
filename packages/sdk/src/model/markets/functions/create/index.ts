import type { ApiPromise } from '@polkadot/api'
import type { AddressOrPair, SubmittableExtrinsic } from '@polkadot/api/types'
import type { EventRecord } from '@polkadot/types/interfaces'
import type { ZeitgeistPrimitivesMarket, ZeitgeistPrimitivesPool } from '@polkadot/types/lookup'
import type { ISubmittableResult } from '@polkadot/types/types'
import { signAndSend } from '@zeitgeistpm/rpc'
import { either, EitherInterface, left, right, tryCatch } from '@zeitgeistpm/utility/dist/either'
import { throws } from '@zeitgeistpm/utility/dist/error'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import type { CID } from 'ipfs-http-client'
import { Metadata } from 'meta/types'
import { RpcContext } from '../../../../context'
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
export const create = async <C extends RpcContext<M>, P extends CreateMarketParams<M>, M = Metadata>(
  context: C,
  params: P,
): Promise<CreateMarketResult<P, M>> => {
  let tx: SubmittableExtrinsic<'promise', ISubmittableResult>

  const metadata = await putMetadata(context, params.metadata)
  const [cid, multihash] = metadata.unrightOr(throws)

  if (isWithPool(params)) {
    tx = context.api.tx.predictionMarkets.createCpmmMarketAndDeployAssets(
      params.oracle,
      params.period,
      multihash,
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
      multihash,
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
  <P extends CreateMarketParams<M>, M = Metadata>(
    context: RpcContext<M>,
    result: ISubmittableResult,
    params: P,
  ) =>
  () =>
    either(
      tryCatch<Error, CreateMarketData<P, M>>(() => {
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
        } as CreateMarketData<P, M>
      }),
    )

/**
 * Put market metadata in storage if present, otherwise store empty `0x` as hash
 * @private
 *
 * @param context RpcContext
 * @param metadata MarketMetadata,
 */
const putMetadata = Te.from(
  async <M = Metadata>(
    context: RpcContext<M>,
    metadata: M,
  ): Promise<[CID | null, { Sha3_384: '0x' } | { Sha3_384: Uint8Array }]> => {
    if (!context.storage) return [null, { Sha3_384: '0x' as `0x` }]
    const response = await context.storage.put(metadata)
    const cid = response.unrightOr(throws)
    return [cid, { Sha3_384: cid.multihash.bytes }]
  },
)

/**
 * Delete the metadata from storage. Used when market create transaction fails.
 *
 * @private
 *
 * @param context RpcContext
 * @param cid CID
 */
const deleteMetadata = Te.from(async <M = Metadata>(context: RpcContext<M>, cid: CID) => {
  if (!context.storage) return
  await context.storage.del(cid)
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
