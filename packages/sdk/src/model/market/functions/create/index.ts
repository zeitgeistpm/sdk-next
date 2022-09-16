import { CID } from 'ipfs-core/dist/src/block-storage'
import { SubmittableExtrinsic } from '@polkadot/api/types'
import { ISubmittableResult } from '@polkadot/types/types'
import {
  MarketPeriod,
  MarketType,
  MarketDisputeMechanism,
} from '@zeitgeistpm/types/dist/interfaces'
import { signAndSend } from '@zeitgeistpm/rpc'
import { left, right } from '@zeitgeistpm/utility/dist/either'
import { throws } from '@zeitgeistpm/utility/dist/error'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { Either } from '@zeitgeistpm/utility/dist/either'
import { FullContext, RpcContext } from '../../../../context'
import { CreateMarketParams, isWithPool } from './types'
import { MarketMetadata } from '../../meta/types'
import { CMarketCreationEvent, RpcMarket } from '../types'

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
  MT extends MarketType['type'],
  MP extends MarketPeriod['type'],
  MD extends MarketDisputeMechanism['type'],
>(
  context: RpcContext | FullContext,
  params: CreateMarketParams<MT, MP, MD>,
) => {
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
      params.scoringRule,
    )
  }

  const response = await signAndSend(context.api, tx, params.signer)

  const { events } = response.unrightOr(error => {
    if (cid) {
      rollbackMetadata(context, cid)
    }
    throw error
  })

  for (const { event } of events) {
    if (context.api.events.predictionMarkets.MarketCreated.is(event)) {
      const [id, _, market] = event.data as CMarketCreationEvent

      if (market.creator.eq(params.signer.address)) {
        return right([Number(id.toHuman()), market])
      }
    }
  }

  return events
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
 * Put market metadata in storage if present, otherwise store empty `0x` as hash
 * @private
 */
const rollbackMetadata = Te.from(
  async (context: RpcContext | FullContext, cid: CID) => {
    if (!context.storage) return
    await context.storage.markets.del(cid)
  },
)
