import type RpcError from '@polkadot/rpc-provider/coder/error'
import type { ISubmittableResult, RegistryError } from '@polkadot/types/types'

export type ExtractableResult<R> = {
  /**
   * Raw response from the node.
   */
  raw: ISubmittableResult
  /**
   * Lazy function to saturate response with extracted event data.
   *
   * @returns R
   */
  saturate: () => R
}

export type TransactionHooks = {
  hooks?: {
    inBlock?: (result: ISubmittableResult) => void
    isFinalized?: (result: ISubmittableResult) => void
    retracted?: () => void
  }
}

export type TransactionError =
  | RpcError
  | RegistryError
  | RetractedError
  | UnknownDispatchError
  | Error

export class RetractedError extends Error {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, RetractedError.prototype)
  }
}

export class UnknownDispatchError extends Error {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, UnknownDispatchError.prototype)
  }
}

export const transactionErrorToString = (error: TransactionError) => {
  return 'docs' in error
    ? error.docs.join('. ')
    : 'message' in error
    ? error.message
    : 'Unable to decode error.'
}
