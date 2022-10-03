import type { CID } from 'ipfs-http-client'
import type { ApiPromise, WsProvider } from '@polkadot/api'
import type { ZeitgeistIndexer } from '@zeitgeistpm/indexer'
import type { Storage } from '@zeitgeistpm/web3.storage'
import type { MarketMetadata } from '../meta/market'
import { MetadataStorage } from 'meta/types'

/**
 * Union type that can be either rpc, indexer or full context.
 */
export type Context<M extends MetadataStorage> = FullContext<M> | RpcContext<M> | IndexerContext<M>

/**
 * Zeitgeist SDK context with both rpc and indexer features enabled.
 */
export type FullContext<M extends MetadataStorage> = RpcContext<M> & IndexerContext<M>

/**
 * Zeitgeist SDK context with rpc and storage features enabled.
 */
export type RpcContext<M extends MetadataStorage> = {
  api: ApiPromise
  provider: WsProvider
  storage: M
}

/**
 * Zeitgeist SDK context with indexer features enabled.
 */
export type IndexerContext<M extends MetadataStorage> = {
  indexer: ZeitgeistIndexer
}

/**
 * Typeguard for full context
 *
 * @param ctx unknown
 * @returns config is FullContext
 */
export const isFullContext = <M extends MetadataStorage>(ctx?: unknown): ctx is FullContext<M> =>
  isRpcContext(ctx) && isIndexerContext(ctx)

/**
 * Typeguard for rpc context
 *
 * @param ctx unknown
 * @returns config is RpcContext
 */
export const isRpcContext = <M extends MetadataStorage>(ctx?: unknown): ctx is RpcContext<M> =>
  Boolean(ctx && typeof ctx === 'object' && ctx !== null && 'api' in ctx)

/**
 * Typeguard for indexer context
 *
 * @param ctx unknown
 * @returns config is IndexerContext
 */
export const isIndexerContext = <M extends MetadataStorage>(
  ctx?: unknown,
): ctx is IndexerContext<M> =>
  Boolean(ctx && typeof ctx === 'object' && ctx !== null && 'indexer' in ctx)
