import { ApiConfig, FullConfig, IndexerConfig } from '../types'
import { SupportedParachain } from './types'

export * from './types'

export const mainnet = (): FullConfig => {
  return {
    ...mainnetApi(),
    ...mainnetIndexer(),
  }
}

export const mainnetApi = (): ApiConfig => {
  return {
    provider: [rpcs.dwellir.uri, rpcs.zeitgeist.uri, rpcs.onfinality.uri],
  }
}

export const mainnetIndexer = (): IndexerConfig => {
  return {
    indexer: indexers.zeitgeist.uri,
  }
}

export const batterystation = (): FullConfig => {
  return {
    ...batterystationApi(),
    ...batterystationIndexer(),
  }
}

export const batterystationApi = (): ApiConfig => {
  return {
    provider: [rpcs.bsr.uri],
  }
}

export const batterystationIndexer = (): IndexerConfig => {
  return {
    indexer: indexers.bsr.uri,
  }
}

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
