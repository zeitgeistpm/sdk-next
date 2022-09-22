import type { CID } from 'ipfs-http-client'
import type { ApiPromise, WsProvider } from '@polkadot/api'
import type { ZeitgeistIndexer } from '@zeitgeistpm/indexer'
import type { MetadataStorage } from '@zeitgeistpm/web3.storage'
import type { MarketMetadata } from '../model/market/meta/types'

export type Context = FullContext | (RpcContext | IndexerContext)

export type FullContext = RpcContext & IndexerContext

export type RpcContext = {
  api: ApiPromise
  provider: WsProvider
  storage: MetadataStorage<MarketMetadata, CID>
}

export type IndexerContext = {
  indexer: ZeitgeistIndexer
}
