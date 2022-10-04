import type { ApiPromise, WsProvider } from '@polkadot/api'
import type { ZeitgeistIndexer } from '@zeitgeistpm/indexer'
import { MetadataStorage, SaturatedMetadataStorage } from 'meta/types'

/**
 * Union type that can be either rpc, indexer or full context.
 */
export type Context<MS extends MetadataStorage<any, any>> =
  | FullContext<MS>
  | RpcContext<MS>
  | IndexerContext

/**
 * Zeitgeist SDK context with both rpc and indexer features enabled.
 */
export type FullContext<MS extends MetadataStorage<any, any>> = RpcContext<MS> & IndexerContext

/**
 * Zeitgeist SDK context with rpc and storage features enabled.
 */
export type RpcContext<MS extends MetadataStorage<any, any>> = {
  api: ApiPromise
  provider: WsProvider
  storage: MS
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
export const isFullContext = <MS extends MetadataStorage>(ctx?: unknown): ctx is FullContext<MS> =>
  isRpcContext(ctx) && isIndexerContext(ctx)

/**
 * Typeguard for rpc context
 *
 * @param ctx unknown
 * @returns config is RpcContext
 */
export const isRpcContext = <MS extends MetadataStorage>(ctx?: unknown): ctx is RpcContext<MS> =>
  Boolean(ctx && typeof ctx === 'object' && ctx !== null && 'api' in ctx)

/**
 * Typeguard for indexer context
 *
 * @param ctx unknown
 * @returns config is IndexerContext
 */
export const isIndexerContext = (ctx?: unknown): ctx is IndexerContext =>
  Boolean(ctx && typeof ctx === 'object' && ctx !== null && 'indexer' in ctx)
