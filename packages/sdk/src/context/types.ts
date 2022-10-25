import type { ApiPromise, WsProvider } from '@polkadot/api'
import type { ZeitgeistIndexer } from '@zeitgeistpm/indexer'
import { MetadataStorage } from '../meta/types'

/**
 * Union type that can be either rpc, indexer or full context.
 */
export type Context<MS extends MetadataStorage = MetadataStorage> =
  | IndexerContext
  | RpcContext<MS>
  | FullContext<MS>

/**
 * Zeitgeist SDK context with both rpc and indexer features enabled.
 */
export type FullContext<MS extends MetadataStorage = MetadataStorage> = RpcContext<MS> &
  IndexerContext

/**
 * Zeitgeist SDK context with rpc and storage features enabled.
 */
export type RpcContext<MS extends MetadataStorage = MetadataStorage> = {
  readonly api: ApiPromise
  readonly provider: WsProvider
  readonly storage: MS
}

/**
 * Zeitgeist SDK context with indexer features enabled.
 */
export type IndexerContext = {
  readonly indexer: ZeitgeistIndexer
}

/**
 * Typeguard for full context
 *
 * @param ctx unknown
 * @returns config is FullContext
 */
export const isFullContext = <MS extends MetadataStorage>(
  ctx?: unknown,
): ctx is FullContext<MS> => isRpcContext(ctx) && isIndexerContext(ctx)

/**
 * Typeguard for rpc context
 *
 * @param ctx unknown
 * @returns config is RpcContext
 */
export const isRpcContext = <MS extends MetadataStorage>(
  ctx?: unknown,
): ctx is RpcContext<MS> =>
  Boolean(ctx && typeof ctx === 'object' && ctx !== null && 'api' in ctx)

/**
 * Typeguard for indexer context
 *
 * @param ctx unknown
 * @returns config is IndexerContext
 */
export const isIndexerContext = <MS extends MetadataStorage>(
  ctx?: unknown,
): ctx is IndexerContext =>
  Boolean(ctx && typeof ctx === 'object' && ctx !== null && 'indexer' in ctx)

/**
 * Teardown a context. Only applicable to rpc context for disconnection ws.
 *
 * @param ctx Context<MS>
 */
export const teardown = <MS extends MetadataStorage>(ctx: Context<MS>) => {
  if (isRpcContext(ctx)) {
    ctx.provider.disconnect()
  }
}
