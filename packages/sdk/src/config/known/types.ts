/**
 * Known preset types
 */

import { MarketMetadata } from 'model/markets/meta/types'
import { Config } from '../types'

export type KnownPreset<C extends Config<M>, M = MarketMetadata> = C & {
  preset: KnownPresets
}

export const isKnownPreset = <C extends Config<M>, M = MarketMetadata>(
  config: Config<M>,
): config is KnownPreset<C, M> => Boolean('preset' in config)

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
