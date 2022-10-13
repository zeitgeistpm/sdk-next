import type { ApiPromise } from '@polkadot/api'
import type { SubmittableExtrinsic } from '@polkadot/api/types'
import type { ISubmittableResult } from '@polkadot/types/types'
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
> = Te.from(async (api, transaction, signer) => {
  return new Promise(async (resolve, reject) => {
    let block: number
    let unsub: () => void

    const callback = async (result: ISubmittableResult) => {
      if (result.status.isRetracted) {
        reject(new RetractedError('Transaction retracted'))
        unsub()
      }

      if (result.dispatchError) {
        if (result.dispatchError.isModule) {
          reject(api.registry.findMetaError(result.dispatchError.asModule))
        } else {
          reject(new UnknownDispatchError(result.dispatchError.toString()))
        }
        unsub()
      }

      if (result.internalError) {
        reject(result.internalError)
        unsub()
      }

      if (result.status.isInBlock) {
        const signedBlock = await api.rpc.chain.getBlock(result.status.asInBlock)
        block = signedBlock.block.header.number.toNumber()
      }

      if (result.status.isFinalized) {
        resolve(result)
      }
    }

    try {
      unsub = isExtSigner(signer)
        ? await transaction.signAndSend(signer.address, { signer: signer.signer }, callback)
        : await transaction.signAndSend(signer, callback)
    } catch (error) {
      reject(error)
    }
  })
})
