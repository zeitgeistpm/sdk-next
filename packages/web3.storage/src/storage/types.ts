import { TaskEither } from '@zeitgeistpm/utility/dist/taskeither'
import { IOption } from '@zeitgeistpm/utility/dist/option'
import type { CID } from 'ipfs-http-client'
import { Codec } from '@zeitgeistpm/utility/dist/codec'

export * from './providers/ipfs/types'

/**
 * A generic metadata type for on chain objects that
 * has metadata stored in some external storage like IPFS.
 */
export type Storage<A, ID = CID, P = any> = {
  /**
   * Get item from storage
   *
   * @generic ID - id type
   * @generic T - type of data
   */
  get: TaskEither<StorageError, IOption<A>, [ID]>
  /**
   * Put item to storage
   *
   * @generic ID - id type
   * @generic T - type of data
   */
  put: TaskEither<StorageError, ID, [data: A]>

  /**
   * Get hash of item from storage.
   */
  hash: TaskEither<StorageError, ID, [data: A]>
  /**
   * Use another codec for encoding/decoding data.
   */
  withCodec: <A>(codec: Codec<string | Uint8Array, A>) => Storage<A, ID>
  /**
   * Provider for the storage like IPFS client.
   */
  provider: P
}

const StorageErrorSym = Symbol('StorageError')

export class StorageError extends Error {
  readonly sym = StorageErrorSym
  readonly raw?: Error

  constructor(message: string, raw?: Error) {
    super(message)
    this.name = 'StorageError'
    this.raw = raw
  }

  static is(error: any): error is StorageError {
    return (
      error instanceof StorageError || ('sym' in error && error.sym === StorageErrorSym)
    )
  }
}
