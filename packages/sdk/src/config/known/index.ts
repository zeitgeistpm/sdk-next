import { IPFS } from '@zeitgeistpm/web3.storage'
import { createStorage, MarketMetadata, MetadataStorage } from '../../meta'
import type { FullConfig, IndexerConfig, RpcConfig } from '../types'
import { ZeitgeistIpfs } from './storage'
import { SupportedParachain } from './types'

export * from './storage'
export * from './types'

/**
 * Connect to the mainnet rpc and indexer
 * @returns KnownPreset<FullConfig>
 */
export const mainnet = <MS extends MetadataStorage>(): FullConfig<MS> => {
  return {
    provider: [rpcs.dwellir.uri, rpcs.zeitgeist.uri, rpcs.onfinality.uri],
    indexer: indexers.zeitgeist.uri,
    storage: ZeitgeistIpfs<MS>(),
  }
}

/**
 * Connect to the mainnet rpc only
 * @returns KnownPreset<RpcConfig>
 */
export const mainnetRpc = <MS extends MetadataStorage>(): RpcConfig<MS> => {
  return {
    provider: [rpcs.dwellir.uri, rpcs.zeitgeist.uri, rpcs.onfinality.uri],
    storage: ZeitgeistIpfs<MS>(),
  }
}

/**
 * Connect to the mainnet indexer only.
 * @returns KnownPreset<IndexerConfig>
 */
export const mainnetIndexer = (): IndexerConfig => {
  return {
    indexer: indexers.zeitgeist.uri,
  }
}

/**
 * Connect to the batterystation testnet rpc and indexer.
 * @returns KnownPreset<FullConfig>
 */
export const batterystation = <
  MS extends MetadataStorage<MarketMetadata>,
>(): FullConfig<MS> => {
  return {
    provider: [rpcs.bsr.uri],
    indexer: indexers.bsr.uri,
    storage: ZeitgeistIpfs<MS>(),
  }
}

/**
 * Connect to the batterystation rpc only
 * @returns KnownPreset<RpcConfig>
 */
export const batterystationRpc = <MS extends MetadataStorage>(): RpcConfig<MS> => {
  return {
    provider: [rpcs.bsr.uri],
    storage: ZeitgeistIpfs<MS>(),
  }
}

/**
 * Connect to the batterystation indexer only
 * @returns KnownPreset<IndexerConfig>
 */
export const batterystationIndexer = (): IndexerConfig => {
  return {
    indexer: indexers.bsr.uri,
  }
}

/**
 * Create a standard local rpc node config with local node and local ipfs standards.
 * @returns RpcConfig<MS>
 */
export const localhostRpc = <MS extends MetadataStorage>(): RpcConfig<MS> => ({
  provider: 'ws://127.0.0.1:9944',
  storage: createStorage(
    IPFS.storage({
      node: {
        url: 'http://127.0.0.1:5001',
      },
    }),
  ) as MS,
})

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
