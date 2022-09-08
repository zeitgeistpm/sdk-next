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

  const callback = ({ dispatchError }: ISubmittableResult) => {
    if (dispatchError) {
      let errorInfo

      // decode the error
      if (dispatchError.isModule) {
        // for module errors, we have the section indexed, lookup
        // (For specific known errors, we can also do a check against the
        // api.errors.<module>.<ErrorName>.is(dispatchError.asModule) guard)
        const decoded: any = context.api.registry.findMetaError(
          dispatchError.asModule,
        )

        console.log(decoded)

        errorInfo = `${decoded.section}.${
          decoded.name
        } ${decoded.documentation.join('')}`
      } else {
        // Other, CannotLookup, BadOrigin, no extra info
        errorInfo = dispatchError.toString()
      }

      console.log('dispatchError', errorInfo)
    }
  }

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
    return { Sha3_384: cid.multihash.bytes }
  },
)
