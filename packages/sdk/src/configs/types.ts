import { ApiConfig, Config, FullConfig, IndexerConfig } from '../types'

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

export enum SupportedParachain {
  KUSAMA = 'kusama',
  ROCOCO = 'rococo',
  BSR = 'bsr',
  LOCAL = 'local',
}
