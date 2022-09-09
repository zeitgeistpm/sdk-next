import { SubmittableExtrinsic } from '@polkadot/api/types'
import {
  IEventData,
  ISubmittableResult,
  ITuple,
  RegistryError,
} from '@polkadot/types/types'
import {
  MarketPeriod,
  MarketType,
  MarketDisputeMechanism,
  Market,
  MarketIdOf,
} from '@zeitgeistpm/types/dist/interfaces'
import { isExtSigner, KeyringPairOrExtSigner } from '@zeitgeistpm/sdk/src/keyring'
import { throws } from '@zeitgeistpm/utility/src/error'
import * as Te from '@zeitgeistpm/utility/src/taskeither'
import { FullContext, RpcContext } from '../../../../context'
import { CreateMarketParams, isWithPool } from './types'
import { MarketMetadata } from '../../meta/types'
import { either, left, right } from '@zeitgeistpm/utility/dist/either'
import { RpcMarket } from '../types'
import { AccountId32 } from '@polkadot/types/interfaces'

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

  const response = await signAndSend(context, tx, params.signer)
  const [id, market] = response.unrightOr(throws)

  return [id, market] as RpcMarket
}

const signAndSend: Te.TaskEither<
  RegistryError | Error,
  [number, Market],
  [
    RpcContext | FullContext,
    SubmittableExtrinsic<'promise', ISubmittableResult>,
    KeyringPairOrExtSigner,
  ]
> = async (context, transaction, signer) =>
  new Promise(async (resolve, reject) => {
    let block: number

    const callback = async ({
      dispatchError,
      internalError,
      status,
      events,
    }: ISubmittableResult) => {
      if (dispatchError) {
        if (dispatchError.isModule) {
          reject(
            either(
              left(context.api.registry.findMetaError(dispatchError.asModule)),
            ),
          )
        } else {
          reject(either(left(new Error(dispatchError.toString()))))
        }
        unsub()
      }

      if (internalError) {
        reject(either(left(internalError)))
        unsub()
      }

      if (status.isInBlock) {
        const signedBlock = await context.api.rpc.chain.getBlock(status.asInBlock)
        block = signedBlock.block.header.number.toNumber()
        console.log(block)
      }

      if (status.isFinalized) {
        events.forEach(({ event }) => {
          if (context.api.events.predictionMarkets.MarketCreated.is(event)) {
            const [id, _, market] = event.data as ITuple<
              [MarketIdOf, AccountId32, Market]
            > &
              IEventData

            if (market.creator.eq(signer.address)) {
              resolve(either(right([Number(id.toHuman()), market])))
              unsub()
            }
          }
        })
      }
    }

    const unsub = isExtSigner(signer)
      ? await transaction.signAndSend(
          signer.address,
          { signer: signer.signer },
          callback,
        )
      : await transaction.signAndSend(signer, callback)
  })

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
