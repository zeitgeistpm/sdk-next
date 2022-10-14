import { TaskEither } from '@zeitgeistpm/utility/dist/taskeither'
import { IOption } from '@zeitgeistpm/utility/dist/option'
import { CID } from 'ipfs-http-client'

export * from './providers/ipfs/types'

/**
 * A generic metadata type for on chain objects that
 * has metadata stored in some external storage like IPFS.
 */
export type Storage<A extends object, ID = CID> = {
  /**
   * Get item from storage
   *
   * @generic ID - id type
   * @generic T - type of data
   */
  get: TaskEither<Error, IOption<A>, [ID]>
  /**
   * Put item to storage
   *
   * @generic ID - id type
   * @generic T - type of data
   */
  put: TaskEither<Error, ID, [data: A]>
  /**
   * delete item from storage
   *
   * @generic ID - id type
   */
  del: TaskEither<Error, void, [ID]>
}
