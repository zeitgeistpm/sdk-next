import type { CID } from 'ipfs-http-client'
import type { ApiPromise, WsProvider } from '@polkadot/api'
import type { ZeitgeistIndexer } from '@zeitgeistpm/indexer'
import type { MetadataStorage } from '@zeitgeistpm/web3.storage'
import type { MarketMetadata } from '../model/market/meta/types'

/**
 * Union type that can be either rpc, indexer or full context.
 */
export type Context = FullContext | (RpcContext | IndexerContext)

/**
 * Zeitgeist SDK context with both rpc and indexer features enabled.
 */
export type FullContext = RpcContext & IndexerContext

/**
 * Zeitgeist SDK context with rpc and storage features enabled.
 */
export type RpcContext = {
  api: ApiPromise
  provider: WsProvider
  storage: MetadataStorage<MarketMetadata, CID>
}

/**
 * Zeitgeist SDK context with indexer features enabled.
 */
export type IndexerContext = {
  indexer: ZeitgeistIndexer
}
