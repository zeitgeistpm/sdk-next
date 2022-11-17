import type { ApiPromise } from '@polkadot/api'
import type { SubmittableExtrinsic } from '@polkadot/api/types'
import { SignedBlock } from '@polkadot/types/interfaces'
import type { ISubmittableResult } from '@polkadot/types/types'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { isExtSigner, KeyringPairOrExtSigner } from '../keyring'
import {
  RetractedError,
  TransactionError,
  TransactionHooks,
  UnknownDispatchError,
} from './types'

export const signAndSend: Te.TaskEither<
  TransactionError,
  ISubmittableResult,
  [
    {
      api: ApiPromise
      tx: SubmittableExtrinsic<'promise', ISubmittableResult>
      signer: KeyringPairOrExtSigner
    } & TransactionHooks,
  ]
> = Te.from(async ({ api, tx, signer, hooks }) => {
  return new Promise(async (resolve, reject) => {
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
        hooks?.inBlock?.(signedBlock)
      }

      if (result.status.isFinalized) {
        resolve(result)
      }
    }

    try {
      unsub = isExtSigner(signer)
        ? await tx.signAndSend(signer.address, { signer: signer.signer }, callback)
        : await tx.signAndSend(signer, callback)
    } catch (error) {
      reject(error)
    }
  })
})
