import { GraphQLClient } from 'graphql-request'
import { augments } from './augments'
import { getSdk } from './graphql/sdk'
import type { Config, ZeitgeistIndexer } from './types'

export * from './graphql/sdk'
export * from './types'

/**
 * Create a zeitgeist indexer client.
 *
 * @param config Config
 * @returns ZeitgeistIndexer
 */
export const create = (config: Config): ZeitgeistIndexer => {
  const client = new GraphQLClient(config.uri, { fetch: globalThis.fetch })
  const gql = getSdk(client)
  return {
    client,
    ...gql,
    ...augments(gql),
  }
}
