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

export type BaseConfig = {
  debug?: boolean
}

export type FullConfig = ApiConfig & IndexerConfig

export type ApiConfig = BaseConfig & {
  provider: string | string[]
}

export type IndexerConfig = BaseConfig & {
  indexer: string
}

export enum KnownPresets {
  mainnet = 'Mainnet',
  mainnetRpc = 'Mainnet:rpc',
  mainnetIndexer = 'Mainnet:indexer',
  bsr = 'Batterystation',
  bsrRpc = 'Batterystation:rpc',
  bsrIndexer = 'Batterystation:indexer',
}

export type KnownPreset<C extends Config> = C & {
  preset: KnownPresets
}

export const isFullConfig = (config: Config): config is FullConfig =>
  isApiConfig(config) && isIndexerConfig(config)

export const isApiConfig = (config: Config): config is ApiConfig =>
  Boolean('provider' in config)

export const isIndexerConfig = (config: Config): config is IndexerConfig =>
  Boolean('indexer' in config && typeof config.indexer === 'string')

export const isKnownPreset = <C extends Config>(
  config: Config,
): config is KnownPreset<C> => Boolean('preset' in config)
