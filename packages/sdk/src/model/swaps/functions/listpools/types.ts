import type { PoolOrderByInput, PoolWhereInput } from '@zeitgeistpm/indexer/dist'
import { MetadataStorage } from '../../../../meta'
import { Context, IndexerContext, RpcContext } from '../../../../context'
import { Pool, RpcPool } from '../../pool'

/**
 * List of Pools.
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to fetch the marketlist for.
 */
export type PoolList<C extends Context<MS>, MS extends MetadataStorage> = Pool<C, MS>[]

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
 * Concrete PoolList for indexed context
 */
export type IndexedPoolList<C extends IndexerContext, MS extends MetadataStorage> = PoolList<C, MS>[]

/**
 * Concrete PoolList for rpc context
 */
export type RpcPoolList<C extends RpcContext<MS>, MS extends MetadataStorage> = RpcPool[]

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
