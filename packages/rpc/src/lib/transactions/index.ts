import type { ApiPromise } from '@polkadot/api'
import type { SubmittableExtrinsic } from '@polkadot/api/types'
import type { ISubmittableResult } from '@polkadot/types/types'
import { either, left, right } from '@zeitgeistpm/utility/dist/either'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { isExtSigner, KeyringPairOrExtSigner } from '../keyring'
import { RetractedError, TransactionError, UnknownDispatchError } from './types'

export const signAndSend: Te.TaskEither<
  TransactionError,
  ISubmittableResult,
  [
    api: ApiPromise,
    tx: SubmittableExtrinsic<'promise', ISubmittableResult>,
    signer: KeyringPairOrExtSigner,
  ]
> = async (api, transaction, signer) =>
  new Promise(async resolve => {
    let block: number
    let unsub: () => void

    const callback = async (result: ISubmittableResult) => {
      if (result.status.isRetracted) {
        resolve(either(left(new RetractedError('Transaction retracted') as TransactionError)))
        unsub()
      }

      if (result.dispatchError) {
        if (result.dispatchError.isModule) {
          resolve(
            either(
              left(api.registry.findMetaError(result.dispatchError.asModule) as TransactionError),
            ),
          )
        } else {
          resolve(
            either(
              left(new UnknownDispatchError(result.dispatchError.toString()) as TransactionError),
            ),
          )
        }
        unsub()
      }

      if (result.internalError) {
        resolve(either(left(result.internalError as TransactionError)))
        unsub()
      }

      if (result.status.isInBlock) {
        const signedBlock = await api.rpc.chain.getBlock(result.status.asInBlock)
        block = signedBlock.block.header.number.toNumber()
      }

      if (result.status.isFinalized) {
        resolve(either(right(result)))
      }
    }

    try {
      unsub = isExtSigner(signer)
        ? await transaction.signAndSend(signer.address, { signer: signer.signer }, callback)
        : await transaction.signAndSend(signer, callback)
    } catch (error) {
      resolve(either(left(error as TransactionError)))
    }
  })
