import { EitherInterface } from '@zeitgeistpm/utility/dist/either'
import { Task } from '@zeitgeistpm/utility/dist/task'
import { CID } from 'ipfs-http-client'

export * from './providers/ipfs/types'

/**
 * A generic metadata type for on chain objects that
 * has metadata stored in some external storage like IPFS.
 */
export type Storage<A extends object = any, ID = CID> = {
  /**
   * Get item from storage
   *
   * @generic ID - id type
   * @generic T - type of data
   */
  get: Task<EitherInterface<Error, A>, [ID]>
  /**
   * Put item to storage
   *
   * @generic ID - id type
   * @generic T - type of data
   */
  put: Task<EitherInterface<Error, ID>, [data: A]>
  /**
   * delete item from storage
   *
   * @generic ID - id type
   */
  del: Task<EitherInterface<Error, void>, [ID]>
}
