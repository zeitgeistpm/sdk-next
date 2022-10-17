import type { PoolOrderByInput, PoolWhereInput } from '@zeitgeistpm/indexer/dist'
import { MetadataStorage } from '../../../../meta'
import { Context, IndexerContext, RpcContext } from '../../../../context'

/**
 * Pools list Query type
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to query in.
 */
export type PoolsListQuery<
  C extends Context<MS>,
  MS extends MetadataStorage,
> = C extends IndexerContext ? PoolsIndexerQuery : PoolsRpcQuery

/**
 * Concrete pool Query for rpc context
 */
type PoolsRpcQuery = {
  offset?: number
  limit?: number
}

/**
 * Concrete pool Query for indexed context
 */
export type PoolsIndexerQuery = {
  where?: PoolWhereInput
  order?: PoolOrderByInput
  offset?: number
  limit?: number
}
