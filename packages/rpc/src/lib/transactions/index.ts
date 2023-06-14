import type { ApiPromise } from '@polkadot/api'
import type { SubmittableExtrinsic } from '@polkadot/api/types'
import type { ISubmittableResult } from '@polkadot/types/types'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { isExtSigner, KeyringPairOrExtSigner } from '../keyring'
import { TransactionError, TransactionHooks, UnknownDispatchError } from './types'

export const signAndSend: Te.TaskEither<
  TransactionError,
  ISubmittableResult,
  [
    {
      api: ApiPromise
      tx: SubmittableExtrinsic<'promise', ISubmittableResult>
      signer: KeyringPairOrExtSigner
      waitForFinalization?: boolean
    } & TransactionHooks,
  ]
> = Te.from(async ({ api, tx, signer, hooks, waitForFinalization }) => {
  return new Promise(async (resolve, reject) => {
    let unsub: () => void

    const callback = async (result: ISubmittableResult) => {
      if (result.status.isRetracted) {
        // TODO: find out if finalized callback will still be called. or if seperate error handling is needed.
        // https://substrate.stackexchange.com/questions/5961/does-callback-get-called-when-extrinsic-is-in-block-finalized-when-the-transacti
        hooks?.retracted?.()
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
        hooks?.inBlock?.(result)
        if (!waitForFinalization) {
          resolve(result)
        }
      }

      if (waitForFinalization && result.status.isFinalized) {
        hooks?.isFinalized?.(result)
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
