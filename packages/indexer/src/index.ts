import { GraphQLClient } from 'graphql-request'
import { augments } from './augments'
import { getSdk } from './graphql/sdk'
import { Config, ZeitgeistIndexer } from './types'

export * from './types'

export const create = (config: Config): ZeitgeistIndexer => {
  const client = new GraphQLClient(config.endpoint)
  const gql = getSdk(client)
  return {
    ...gql,
    ...augments(gql),
  }
}
