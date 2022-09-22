import { FullContext, IndexerContext, RpcContext } from './types'

export * from './types'

export const isFullContext = (config?: unknown): config is FullContext =>
  isRpcContext(config) && isIndexerContext(config)

export const isRpcContext = (config?: unknown): config is RpcContext =>
  Boolean(config && typeof config === 'object' && config !== null && 'api' in config)

export const isIndexerContext = (config?: unknown): config is IndexerContext =>
  Boolean(config && typeof config === 'object' && config !== null && 'indexer' in config)
