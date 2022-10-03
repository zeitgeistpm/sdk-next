/**
 * Known preset types
 */

import { MarketMetadata } from 'meta/market'
import { Config } from '../types'

export type KnownPreset<C extends Config<M>, M = MarketMetadata> = C & {
  preset: KnownPresets
}

export const isKnownPreset = <C extends Config>(config: Config): config is KnownPreset<C> =>
  Boolean('preset' in config)

export enum KnownPresets {
  mainnet = 'Mainnet',
  mainnetRpc = 'Mainnet:rpc',
  mainnetIndexer = 'Mainnet:indexer',
  bsr = 'Batterystation',
  bsrRpc = 'Batterystation:rpc',
  bsrIndexer = 'Batterystation:indexer',
}

export enum SupportedParachain {
  KUSAMA = 'kusama',
  ROCOCO = 'rococo',
  BSR = 'bsr',
  LOCAL = 'local',
}
