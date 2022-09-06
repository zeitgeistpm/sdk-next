import { SubmittableExtrinsic } from '@polkadot/api/types'
import { ISubmittableResult } from '@polkadot/types/types'
import {
  MarketPeriod,
  MarketType,
  MarketDisputeMechanism,
} from '@zeitgeistpm/types/dist/interfaces'
import { isExtSigner } from '@zeitgeistpm/sdk/src/keyring'
import { throws } from '@zeitgeistpm/utility/src/error'
import * as Te from '@zeitgeistpm/utility/src/taskeither'
import { FullContext, RpcContext } from '../../../../context'
import { CreateMarketParams, isWithPool } from './types'
import { MarketMetadata } from '../../meta/types'

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
  const multihash = metadata.unrightOr(throws)

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

  const callback = (result: ISubmittableResult) => {}

  if (isExtSigner(params.signer)) {
    tx.signAndSend(
      params.signer.address,
      { signer: params.signer.signer },
      callback,
    )
  } else {
    tx.signAndSend(params.signer, callback)
  }

  return {}
}

/**
 * Put market metadata in storage if present, otherwise store empty `0x` as hash
 * @private
 */
const putMetadata = Te.from(
  async (context: RpcContext | FullContext, metadata: MarketMetadata) => {
    if (!context.storage) return { Sha3_384: '0x' as `0x` }
    const response = await context.storage.markets.put(metadata)
    const cid = response.unrightOr(throws)
    return { Sha3_384: cid.multihash }
  },
)
