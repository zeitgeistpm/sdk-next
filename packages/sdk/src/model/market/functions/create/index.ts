import { CID } from 'ipfs-core/dist/src/block-storage'
import { SubmittableExtrinsic } from '@polkadot/api/types'
import { ISubmittableResult } from '@polkadot/types/types'
import {
  ZeitgeistPrimitivesMarket,
  ZeitgeistPrimitivesPool,
} from '@polkadot/types/lookup'
import { signAndSend } from '@zeitgeistpm/rpc'
import { throws } from '@zeitgeistpm/utility/dist/error'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { FullContext, RpcContext } from '../../../../context'
import { CreateMarketParams, CreateMarketResult, isWithPool } from './types'
import { MarketMetadata } from '../../meta/types'
import { either, left, right } from '@zeitgeistpm/utility/dist/either'

/**
 * Create a market on chain.
 *
 * @generic MT extends MarketType['type']
 * @generic MP extends MarketPeriod['type']
 * @generic MD extends MarketDisputeMechanism['type']
 * @param context RpcContext | FullContext
 * @param params CreateMarketParams<MT, MP, MD>
 * @returns void
 */
export const create = async <
  C extends RpcContext | FullContext,
  P extends CreateMarketParams,
>(
  context: C,
  params: P,
): Promise<CreateMarketResult<P>> => {
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
    data: () => {
      let createdMarket: [number, ZeitgeistPrimitivesMarket] | undefined
      let createdPool: [number, ZeitgeistPrimitivesPool] | undefined

      for (const { event } of result.events) {
        if (context.api.events.predictionMarkets.MarketCreated.is(event)) {
          const [id, , market] = event.data
          if (market.creator.eq(params.signer.address)) {
            createdMarket = [Number(id.toHuman()), market]
          }
        } else if (
          isWithPool(params) &&
          context.api.events.swaps.PoolCreate.is(event)
        ) {
          const [{ poolId, who }, pool] = event.data
          if (who.eq(params.signer.address)) {
            createdPool = [Number(poolId.toHuman()), pool]
          }
        }
      }

      if (!createdMarket) {
        return either(
          left(
            new Error(
              'No market creation event found on finalized block. Should not happen.',
            ),
          ),
        )
      }

      if (isWithPool(params) && createdPool) {
        return either(
          right({
            market: createdMarket,
            pool: createdPool,
          }),
        )
      } else {
        return either(
          right({
            market: createdMarket,
          }),
        )
      }
    },
  } as CreateMarketResult<P>
}

/**
 * Put market metadata in storage if present, otherwise store empty `0x` as hash
 * @private
 */
const putMetadata = Te.from(
  async (
    context: RpcContext | FullContext,
    metadata: MarketMetadata,
  ): Promise<[CID | null, { Sha3_384: '0x' } | { Sha3_384: Uint8Array }]> => {
    if (!context.storage) return [null, { Sha3_384: '0x' as `0x` }]
    const response = await context.storage.markets.put(metadata)
    const cid = response.unrightOr(throws)
    return [cid, { Sha3_384: cid.multihash.bytes }]
  },
)

/**
 * Delete the metadata from storage. Used when market create transaction fails.
 * @private
 */
const deleteMetadata = Te.from(
  async (context: RpcContext | FullContext, cid: CID) => {
    if (!context.storage) return
    await context.storage.markets.del(cid)
  },
)
