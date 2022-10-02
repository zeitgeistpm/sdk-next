import type { CID } from 'ipfs-http-client'
import { MetadataStorage } from '@zeitgeistpm/web3.storage/dist'
import { Metadata } from '../meta/market'

export * from './known'

/**
 * Union type of possible configurations.
 */
export type Config<M = Metadata> = FullConfig | (RpcConfig<M> | IndexerConfig)

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

export type FullConfig<M = Metadata> = RpcConfig<M> & IndexerConfig

export type RpcConfig<M = Metadata> = BaseConfig & {
  /**
   * Rpc provider(s), uri or list of uris.
   */
  provider: string | string[]
  /**
   * Storage provider for metadata
   */
  storage: MetadataStorage<M, CID>
}

export type IndexerConfig = BaseConfig & {
  /**
   * The uri for the indexer gql endpoint.
   */
  indexer: string
}

export const isFullConfig = <M = Metadata>(config: Config<M>): config is FullConfig<M> =>
  isRpcConfig(config) && isIndexerConfig(config)

export const isRpcConfig = <M = Metadata>(config?: Config<M>): config is RpcConfig<M> =>
  Boolean(config && 'provider' in config)

export const isIndexerConfig = <M = Metadata>(config?: Config<M>): config is IndexerConfig =>
  Boolean(config && 'indexer' in config && typeof config.indexer === 'string')
