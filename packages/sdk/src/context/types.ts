import type { ApiPromise, WsProvider } from '@polkadot/api'
import type { CID } from 'ipfs-core/dist/src/block-storage'
import type { ZeitgeistIndexer } from '@zeitgeistpm/indexer'
import type { MetadataStorage } from '@zeitgeistpm/web3.storage'
import type { MarketMetadata } from '../model/market/meta/types'

export type Context = FullContext | (RpcContext | IndexerContext)

export type FullContext<MMT = MarketMetadata, MMId = CID> = RpcContext<
  MMT,
  MMId
> &
  IndexerContext

export type RpcContext<MMT = MarketMetadata, MMId = CID> = {
  api: ApiPromise
  provider: WsProvider
  storage?: {
    markets: MetadataStorage<MMT, MMId>
  }
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
