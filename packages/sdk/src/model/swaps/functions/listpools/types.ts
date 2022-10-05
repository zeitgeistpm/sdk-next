import type { PoolOrderByInput, PoolWhereInput } from '@zeitgeistpm/indexer/dist'
import { Context, IndexerContext, RpcContext } from '../../../../context'
import { Pool, RpcPool } from '../../pool'

/**
 * List of Pools.
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to fetch the marketlist for.
 */
export type PoolList<C extends Context> = Pool<C>[]

/**
 * Pools list Query type
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to query in.
 */
export type PoolsListQuery<C extends Context> = C extends IndexerContext
  ? PoolsIndexerQuery
  : PoolsRpcQuery

/**
 * Concrete PoolList for indexed context
 */
export type IndexedPoolList<C extends IndexerContext> = PoolList<C>[]

/**
 * Concrete PoolList for rpc context
 */
export type RpcPoolList<C extends RpcContext> = RpcPool[]

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
