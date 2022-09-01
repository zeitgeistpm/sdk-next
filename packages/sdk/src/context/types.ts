import type { ApiPromise, WsProvider } from '@polkadot/api'
import type { ZeitgeistIndexer } from '@zeitgeistpm/indexer'

export type Context = FullContext | (ApiContext | IndexerContext)

export type FullContext = ApiContext & IndexerContext

export type ApiContext = {
  api: ApiPromise
  provider: WsProvider
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
  LOCAL = 'local',
}
