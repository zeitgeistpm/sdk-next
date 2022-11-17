import type RpcError from '@polkadot/rpc-provider/coder/error'
import { SignedBlock } from '@polkadot/types/interfaces'
import type { RegistryError } from '@polkadot/types/types'

export type TransactionHooks = {
  hooks?: {
    inBlock?: (block: SignedBlock) => void
    retracted?: () => void
  }
}

export type TransactionError =
  | RpcError
  | RegistryError
  | RetractedError
  | UnknownDispatchError

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
