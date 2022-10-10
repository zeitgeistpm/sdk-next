import { MetadataStorage } from '../meta/types'

export * from './known'

/**
 * Union type of possible configurations.
 */
export type Config<MS extends MetadataStorage> = FullConfig<MS> | RpcConfig<MS> | IndexerConfig

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

export type FullConfig<MS extends MetadataStorage> = RpcConfig<MS> & IndexerConfig

export type RpcConfig<MS extends MetadataStorage> = BaseConfig & {
  /**
   * Rpc provider(s), uri or list of uris.
   */
  provider: string | string[]
  /**
   * Storage provider for metadata
   */
  storage: MS
}

export type IndexerConfig = BaseConfig & {
  /**
   * The uri for the indexer gql endpoint.
   */
  indexer: string
}

/**
 * Force a config to indexer config.
 *
 * @param config FullConfig<MS>
 * @returns IndexerConfig
 */
export const asIndexerConfig = <MS extends MetadataStorage>(
  config: FullConfig<MS>,
): IndexerConfig => ({
  indexer: config.indexer,
  connectionRetries: config.connectionRetries,
  debug: config.debug,
})

/**
 * Force a config to rpc config.
 *
 * @param config FullConfig<MS>
 * @returns RpcConfig<MS>
 */
export const asRpcConfig = <MS extends MetadataStorage>(config: FullConfig<MS>): RpcConfig<MS> => ({
  provider: config.provider,
  storage: config.storage,
  connectionRetries: config.connectionRetries,
  debug: config.debug,
})

/**
 * Typeguard for full configs.
 *
 * @param config Config<MS>
 * @returns is FullConfig<MS>
 */
export const isFullConfig = <MS extends MetadataStorage>(
  config: Config<MS>,
): config is FullConfig<MS> => isRpcConfig(config) && isIndexerConfig(config)

/**
 * Typeguard for rpc configs.
 *
 * @param config Config<MS>
 * @returns is RpcConfig<MS>
 */
export const isRpcConfig = <MS extends MetadataStorage>(
  config?: Config<MS>,
): config is RpcConfig<MS> => Boolean(config && 'provider' in config)

/**
 * Typeguard for indexer configs.
 *
 * @param config Config<MS>
 * @returns is IndexerConfig<MS>
 */
export const isIndexerConfig = <MS extends MetadataStorage>(
  config?: Config<MS>,
): config is IndexerConfig =>
  Boolean(config && 'indexer' in config && typeof config.indexer === 'string')
