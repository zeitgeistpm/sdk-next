import type { ApiPromise } from '@polkadot/api'
import type { ZeitgeistIndexer } from '@zeitgeistpm/indexer'

export type Context = FullContext | (ApiContext | IndexerContext)

export type FullContext = {
  api: ApiPromise
  indexer: ZeitgeistIndexer
}

export type ApiContext = {
  api: ApiPromise
}

export type IndexerContext = {
  indexer: ZeitgeistIndexer
}

export const isFullContext = (config: Context): config is FullContext =>
  isApiContext(config) && isIndexerContext(config)

export const isApiContext = (config: Context): config is ApiContext =>
  Boolean('api' in config && typeof config.api === 'object')

export const isIndexerContext = (config: Context): config is IndexerContext =>
  Boolean('indexer' in config && typeof config.indexer === 'object')

export enum SupportedParachain {
  KUSAMA = 'kusama',
  ROCOCO = 'rococo',
  BSR = 'bsr',
  CUSTOM = 'custom',
}

// TODO: replace with stronger types
export const endpoints = [
  {
    value: 'wss://rpc-0.zeitgeist.pm/',
    label: 'ZeitgeistPM',
    parachain: SupportedParachain.KUSAMA,
  },
  {
    value: 'wss://zeitgeist-rpc.dwellir.com/',
    label: 'Dwellir',
    parachain: SupportedParachain.KUSAMA,
  },
  {
    value: 'wss://zeitgeist.api.onfinality.io/public-ws',
    label: 'OnFinality',
    parachain: SupportedParachain.KUSAMA,
  },
  {
    value: 'wss://bsr.zeitgeist.pm',
    label: 'Battery Station',
    parachain: SupportedParachain.BSR,
  },
  {
    value: 'ws://127.0.0.1:9944',
    label: 'Custom',
    parachain: SupportedParachain.CUSTOM,
  },
]

export const gqlEndpoints = [
  {
    value: 'https://processor.bsr.zeitgeist.pm/graphql',
    label: 'Battery Park (Testnet)',
    parachain: SupportedParachain.BSR,
  },
  {
    value: 'https://processor.rpc-0.zeitgeist.pm/graphql',
    label: 'Kusama (Live)',
    parachain: SupportedParachain.KUSAMA,
  },
  {
    value: 'http://localhost:4350/graphql',
    label: 'Custom',
    parachain: SupportedParachain.CUSTOM,
  },
]
