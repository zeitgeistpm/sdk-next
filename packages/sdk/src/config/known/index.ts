import { FullConfig, IndexerConfig, RpcConfig } from '../types'
import { zeitgeistIpfs } from './storage'
import { KnownPreset, KnownPresets } from './types'
import { SupportedParachain } from './types'

export * from './types'

/**
 * Connect to the mainnet rpc and indexer
 * @returns KnownPreset<FullConfig>
 */
export const mainnet = (): KnownPreset<FullConfig> => {
  return {
    preset: KnownPresets.mainnet,
    provider: [rpcs.dwellir.uri, rpcs.zeitgeist.uri, rpcs.onfinality.uri],
    indexer: indexers.zeitgeist.uri,
    storage: zeitgeistIpfs,
  }
}

/**
 * Connect to the mainnet rpc only
 * @returns KnownPreset<RpcConfig>
 */
export const mainnetRpc = (): KnownPreset<RpcConfig> => {
  return {
    preset: KnownPresets.mainnetRpc,
    provider: [rpcs.dwellir.uri, rpcs.zeitgeist.uri, rpcs.onfinality.uri],
    storage: zeitgeistIpfs,
  }
}

/**
 * Connect to the mainnet indexer only.
 * @returns KnownPreset<IndexerConfig>
 */
export const mainnetIndexer = (): KnownPreset<IndexerConfig> => {
  return {
    preset: KnownPresets.mainnetIndexer,
    indexer: indexers.zeitgeist.uri,
  }
}

/**
 * Connect to the batterystation testnet rpc and indexer.
 * @returns KnownPreset<FullConfig>
 */
export const batterystation = (): KnownPreset<FullConfig> => {
  return {
    preset: KnownPresets.bsr,
    provider: [rpcs.bsr.uri],
    indexer: indexers.bsr.uri,
    storage: zeitgeistIpfs,
  }
}

/**
 * Connect to the batterystation rpc only
 * @returns KnownPreset<RpcConfig>
 */
export const batterystationRpc = (): KnownPreset<RpcConfig> => {
  return {
    preset: KnownPresets.bsrRpc,
    provider: [rpcs.bsr.uri],
    storage: zeitgeistIpfs,
  }
}

/**
 * Connect to the batterystation indexer only
 * @returns KnownPreset<IndexerConfig>
 */
export const batterystationIndexer = (): KnownPreset<IndexerConfig> => {
  return {
    preset: KnownPresets.bsrIndexer,
    indexer: indexers.bsr.uri,
  }
}

/**
 * Known rpc endpoints.
 */
export const rpcs = {
  zeitgeist: {
    uri: 'wss://rpc-0.zeitgeist.pm/',
    parachain: SupportedParachain.KUSAMA,
  },
  dwellir: {
    uri: 'wss://zeitgeist-rpc.dwellir.com/',
    parachain: SupportedParachain.KUSAMA,
  },
  onfinality: {
    uri: 'wss://zeitgeist.api.onfinality.io/public-ws',
    parachain: SupportedParachain.KUSAMA,
  },
  bsr: {
    uri: 'wss://bsr.zeitgeist.pm',
    parachain: SupportedParachain.BSR,
  },
  dev: {
    uri: 'ws://127.0.0.1:9944',
    parachain: SupportedParachain.LOCAL,
  },
}

/**
 * Known indexer endpoints.
 */
export const indexers = {
  zeitgeist: {
    uri: 'https://processor.rpc-0.zeitgeist.pm/graphql',
    parachain: SupportedParachain.KUSAMA,
  },
  bsr: {
    uri: 'https://processor.bsr.zeitgeist.pm/graphql',
    parachain: SupportedParachain.BSR,
  },
  local: {
    uri: 'http://localhost:4350/graphql',
    parachain: SupportedParachain.LOCAL,
  },
}
