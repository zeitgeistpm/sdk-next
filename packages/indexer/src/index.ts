import { GraphQLClient } from 'graphql-request'
import { augments } from './augments'
import { getSdk } from './graphql/sdk'
import { Config, ZeitgeistIndexer } from './types'

export * from './graphql/sdk'
export * from './types'

/**
 * Create a zeitgeist indexer client.
 *
 * @param config Config
 * @returns ZeitgeistIndexer
 */
export const create = (config: Config): ZeitgeistIndexer => {
  const client = new GraphQLClient(config.uri)
  const gql = getSdk(client)
  return {
    ...gql,
    ...augments(gql),
  }
}
