import type { CID } from 'ipfs-http-client'
import { MetadataStorage } from '@zeitgeistpm/web3.storage/dist'
import { MarketMetadata } from '../model/market/meta/types'

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

export type RpcConfig<MMT = MarketMetadata, MMId = CID> = BaseConfig & {
  /**
   * Rpc provider(s), uri or list of uris.
   */
  provider: string | string[]
  /**
   * Storage provider for metadata
   */
  storage: MetadataStorage<MMT, MMId>
}

export type IndexerConfig = BaseConfig & {
  /**
   * The uri for the indexer gql endpoint.
   */
  indexer: string
}

export const isFullConfig = (config: Config): config is FullConfig =>
  isRpcConfig(config) && isIndexerConfig(config)

export const isRpcConfig = (config: Config): config is RpcConfig => Boolean('provider' in config)

export const isIndexerConfig = (config: Config): config is IndexerConfig =>
  Boolean('indexer' in config && typeof config.indexer === 'string')
