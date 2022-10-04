/**
 * Known preset types
 */

import { MetadataStorage } from '../../meta'
import { Config } from '../types'

export type KnownPreset<C extends Config<MS>, MS extends MetadataStorage> = C & {
  preset: KnownPresets
}

export const isKnownPreset = <C extends Config<MS>, MS extends MetadataStorage>(
  config: Config<MS>,
): config is KnownPreset<C, MS> => Boolean('preset' in config)

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
