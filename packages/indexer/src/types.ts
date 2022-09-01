import type { Augments } from './augments'
import type { getSdk } from './graphql/sdk'

export type Config = {
  uri: string
}

export type ZeitgeistIndexer = GQLSdk & Augments
export type GQLSdk = ReturnType<typeof getSdk>
