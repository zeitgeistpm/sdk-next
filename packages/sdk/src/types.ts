import { ApiContext, FullContext, IndexerContext } from './context'

export * from './context/types'
export * from './configs/types'

export type Sdk<C extends Config> = C extends FullConfig
  ? FullContext
  : C extends ApiConfig
  ? ApiContext
  : C extends IndexerConfig
  ? IndexerContext
  : never

export type Config = FullConfig | (ApiConfig | IndexerConfig)

export type FullConfig = ApiConfig & IndexerConfig

export type ApiConfig = {
  provider: string | string[]
}

export type IndexerConfig = {
  indexer: string
}

export const isFullConfig = (config: Config): config is FullConfig =>
  isApiConfig(config) && isIndexerConfig(config)

export const isApiConfig = (config: Config): config is ApiConfig =>
  Boolean('provider' in config)

export const isIndexerConfig = (config: Config): config is IndexerConfig =>
  Boolean('indexer' in config && typeof config.indexer === 'string')
