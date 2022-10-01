import type { CID } from 'ipfs-http-client'
import type { ApiPromise, WsProvider } from '@polkadot/api'
import type { ZeitgeistIndexer } from '@zeitgeistpm/indexer'
import type { MetadataStorage } from '@zeitgeistpm/web3.storage'
import type { MarketMetadata } from '../meta/market'

/**
 * Union type that can be either rpc, indexer or full context.
 */
export type Context<M = MarketMetadata> = FullContext | RpcContext<M> | IndexerContext

/**
 * Zeitgeist SDK context with both rpc and indexer features enabled.
 */
export type FullContext<M = MarketMetadata> = RpcContext<M> & IndexerContext

/**
 * Zeitgeist SDK context with rpc and storage features enabled.
 */
export type RpcContext<M = MarketMetadata> = {
  api: ApiPromise
  provider: WsProvider
  storage: MetadataStorage<M, CID>
}

/**
 * Zeitgeist SDK context with indexer features enabled.
 */
export type IndexerContext = {
  indexer: ZeitgeistIndexer
}

/**
 * Typeguard for full context
 *
 * @param ctx unknown
 * @returns config is FullContext
 */
export const isFullContext = <M = MarketMetadata>(ctx?: unknown): ctx is FullContext<M> =>
  isRpcContext(ctx) && isIndexerContext(ctx)

/**
 * Typeguard for rpc context
 *
 * @param ctx unknown
 * @returns config is RpcContext
 */
export const isRpcContext = <M = MarketMetadata>(ctx?: unknown): ctx is RpcContext<M> =>
  Boolean(ctx && typeof ctx === 'object' && ctx !== null && 'api' in ctx)

/**
 * Typeguard for indexer context
 *
 * @param ctx unknown
 * @returns config is IndexerContext
 */
export const isIndexerContext = (ctx?: unknown): ctx is IndexerContext =>
  Boolean(ctx && typeof ctx === 'object' && ctx !== null && 'indexer' in ctx)
