import type { PoolOrderByInput, PoolWhereInput } from '@zeitgeistpm/indexer/dist'
import { Metadata, TaggedMetadata } from 'meta/types'
import { Context, IndexerContext, RpcContext } from '../../../../context'
import { Pool } from '../../pool'

/**
 * List of Pools.
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to fetch the marketlist for.
 */
export type PoolList<
  C extends Context<M>,
  M extends TaggedMetadata = Metadata,
> = C extends IndexerContext ? IndexedPoolList : RpcPoolList

/**
 * Pools list Query type
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to query in.
 */
export type PoolsListQuery<
  C extends Context<M>,
  M extends TaggedMetadata = Metadata,
> = C extends IndexerContext ? PoolsIndexerQuery : PoolsRpcQuery

/**
 * Concrete PoolList for indexed context
 */
export type IndexedPoolList = Pool<IndexerContext>[]

/**
 * Concrete PoolList for rpc context
 */
export type RpcPoolList = Pool<RpcContext>[]

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
