import type { PoolOrderByInput, PoolWhereInput } from '@zeitgeistpm/indexer/dist'
import { MetadataStorage } from 'meta'
import { Context, IndexerContext, RpcContext } from '../../../../context'
import { IndexedPool, Pool, RpcPool } from '../../pool'

/**
 * List of Pools.
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to fetch the marketlist for.
 */
export type PoolList<C extends Context<M>, M extends MetadataStorage> = C extends IndexerContext
  ? IndexedPoolList<M>
  : RpcPoolList<M>

/**
 * Pools list Query type
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to query in.
 */
export type PoolsListQuery<C extends Context<M>, M extends MetadataStorage> = C extends IndexerContext
  ? PoolsIndexerQuery
  : PoolsRpcQuery

/**
 * Concrete PoolList for indexed context
 */
export type IndexedPoolList<M extends MetadataStorage> = Pool<IndexerContext, M>[]

/**
 * Concrete PoolList for rpc context
 */
export type RpcPoolList<M extends MetadataStorage> = Pool<RpcContext<M>, M>[]

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
