import { Context } from './context'
import type { Model } from './model/types'

export * from './context/types'
export * from './configs/types'

export type Sdk<C extends Context> = C & {
  /**
   * Enriched zeitgeist models with features for qyerying data on chain and indexer,
   * and for creating transaction flows with for example richer validation to ensure that
   * the markets you have the official standard of metadata so that they show up in the official frontend.
   */
  model: Model<C>
}

/**
 * Union type of possible configurations.
 */
export type Config = FullConfig | (RpcConfig | IndexerConfig)

export type BaseConfig = {
  /**
   * Enable verbose debugging of connection.
   */
  debug?: boolean
  /**
   * How many retries if connecting errors.
   */
  connectionRetries?: number
}

export type FullConfig = RpcConfig & IndexerConfig

export type RpcConfig = BaseConfig & {
  /**
   * Rpc provider(s), uri or list of uris.
   */
  provider: string | string[]
}

export type IndexerConfig = BaseConfig & {
  /**
   * The uri for the indexer gql endpoint.
   */
  indexer: string
}
