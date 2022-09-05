import { GQLSdk } from '..'
import { ping } from './ping'

/**
 * Augmentations of the indexer.
 */
export type Augments = {
  /**
   * Ping the indexer with a lightweight query and return the response time in ms.
   */
  ping: () => Promise<number>
}

/**
 * Create the augmented api.
 *
 * @param gql GQLSdk
 * @returns Augments
 */
export const augments = (gql: GQLSdk): Augments => {
  return {
    ping: () => ping(gql),
  }
}
