import { SupportedParachain } from './known'

export * from './known'
export * from './types'

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
