import type { ApiPromise, WsProvider } from '@polkadot/api'
import type { ZeitgeistIndexer } from '@zeitgeistpm/indexer'

export type Context = FullContext | (RpcContext | IndexerContext)

export type FullContext = RpcContext & IndexerContext

export type RpcContext = {
  api: ApiPromise
  provider: WsProvider
}

export type IndexerContext = {
  indexer: ZeitgeistIndexer
}

export const isFullContext = (config: Context): config is FullContext =>
  isRpcContext(config) && isIndexerContext(config)

export const isRpcContext = (config: Context): config is RpcContext =>
  Boolean('api' in config && typeof config.api === 'object')

export const isIndexerContext = (config: Context): config is IndexerContext =>
  Boolean('indexer' in config && typeof config.indexer === 'object')
