import { MetadataStorage } from 'meta/types'

export * from './known'

/**
 * Union type of possible configurations.
 */
export type Config<M extends MetadataStorage> = FullConfig<M> | RpcConfig<M> | IndexerConfig

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

export type FullConfig<M extends MetadataStorage> = RpcConfig<M> & IndexerConfig

export type RpcConfig<M extends MetadataStorage> = BaseConfig & {
  /**
   * Rpc provider(s), uri or list of uris.
   */
  provider: string | string[]
  /**
   * Storage provider for metadata
   */
  storage: M
}

export type IndexerConfig = BaseConfig & {
  /**
   * The uri for the indexer gql endpoint.
   */
  indexer: string
}

export const isFullConfig = <M extends MetadataStorage>(config: Config<M>): config is FullConfig<M> =>
  isRpcConfig(config) && isIndexerConfig(config)

export const isRpcConfig = <M extends MetadataStorage>(config?: Config<M>): config is RpcConfig<M> =>
  Boolean(config && 'provider' in config)

export const isIndexerConfig = <M extends MetadataStorage>(
  config?: Config<M>,
): config is IndexerConfig =>
  Boolean(config && 'indexer' in config && typeof config.indexer === 'string')
