import type { ApiPromise } from '@polkadot/api'
import type {
  AddressOrPair,
  SignerOptions,
  SubmittableExtrinsic,
} from '@polkadot/api/types'
import type { ISubmittableResult } from '@polkadot/types/types'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import type { ForeignAssetId } from '@zeitgeistpm/sdk'
import { isExtSigner, KeyringPairOrExtSigner } from '../keyring'
import { TransactionError, TransactionHooks, UnknownDispatchError } from './types'

export type SignAndSendParams = {
  api: ApiPromise
  tx: SubmittableExtrinsic<'promise', ISubmittableResult>
  signer: KeyringPairOrExtSigner
  feePayingAsset?: ForeignAssetId
  waitForFinalization?: boolean
} & TransactionHooks

export const signAndSend: Te.TaskEither<
  TransactionError,
  ISubmittableResult,
  [SignAndSendParams]
> = Te.from<ISubmittableResult, TransactionError, [SignAndSendParams]>(
  async ({ api, tx, signer, hooks, feePayingAsset, waitForFinalization }) => {
    return new Promise(async (resolve, reject) => {
      let unsub: () => void

      const callback = async (result: ISubmittableResult) => {
        if (result.status.isRetracted) {
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
          //reject(result.internalError)
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

      let signerParam: AddressOrPair
      let signerOptions: Partial<SignerOptions> = {}

      if (isExtSigner(signer)) {
        signerParam = signer.address
        signerOptions.signer = signer.signer
      } else {
        signerParam = signer
      }

      if (feePayingAsset) {
        signerOptions.assetId = feePayingAsset.ForeignAsset
      }

      try {
        unsub = await tx.signAndSend(signerParam, signerOptions, callback)
      } catch (error) {
        reject(error as Error)
      }
    })
  },
)
