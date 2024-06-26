import { GraphQLClient } from 'graphql-request'
import type { Augments } from './augments'
import type { getSdk } from './graphql/sdk'

/**
 * Config for the zeitgeist indexer.
 */
export type Config = {
  uri: string
}

/**
 * The zeitgeist indexer client.
 *
 */
export type ZeitgeistIndexer = GQLSdk &
  Augments & {
    client: GraphQLClient
  }

/**
 * Type of the generated gql sdk generated by codege.
 */
export type GQLSdk = ReturnType<typeof getSdk>
