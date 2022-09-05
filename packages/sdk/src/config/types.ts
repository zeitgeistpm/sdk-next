export * from './known'

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

export const isFullConfig = (config: Config): config is FullConfig =>
  isRpcConfig(config) && isIndexerConfig(config)

export const isRpcConfig = (config: Config): config is RpcConfig =>
  Boolean('provider' in config)

export const isIndexerConfig = (config: Config): config is IndexerConfig =>
  Boolean('indexer' in config && typeof config.indexer === 'string')
