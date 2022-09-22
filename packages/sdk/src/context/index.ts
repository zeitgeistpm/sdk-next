import { FullContext, IndexerContext, RpcContext } from './types'

export * from './types'

/**
 * Typeguard for full context
 *
 * @param config unknown
 * @returns config is FullContext
 */
export const isFullContext = (config?: unknown): config is FullContext =>
  isRpcContext(config) && isIndexerContext(config)

/**
 * Typeguard for rpc context
 *
 * @param config unknown
 * @returns config is RpcContext
 */
export const isRpcContext = (config?: unknown): config is RpcContext =>
  Boolean(config && typeof config === 'object' && config !== null && 'api' in config)

/**
 * Typeguard for indexer context
 *
 * @param config unknown
 * @returns config is IndexerContext
 */
export const isIndexerContext = (config?: unknown): config is IndexerContext =>
  Boolean(config && typeof config === 'object' && config !== null && 'indexer' in config)
