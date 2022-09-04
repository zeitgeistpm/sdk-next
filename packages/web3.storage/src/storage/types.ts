import { EitherInterface } from '@zeitgeistpm/utility/dist/either'

export * from './providers/ipfs/types'

/**
 * A generic metadata type for on chain objects that
 * has metadata stored in some external storage like IPFS.
 */
export type MetadataStorage<T, ID = string> = {
  /**
   * Get item from storage
   *
   * @generic ID - id type
   * @generic T - type of data
   */
  get: (id: ID) => Promise<EitherInterface<Error, T>>
  /**
   * Put item to storage
   *
   * @generic ID - id type
   * @generic T - type of data
   */
  put: (
    data: T,
    opts?: { ephemeral?: boolean },
  ) => Promise<EitherInterface<Error, ID>>
  /**
   * delete item from storage
   *
   * @generic ID - id type
   */
  del: (id: ID) => Promise<EitherInterface<Error, null>>
}
