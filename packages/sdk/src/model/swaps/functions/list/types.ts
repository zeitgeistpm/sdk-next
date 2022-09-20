import type { PoolOrderByInput, PoolsQuery, PoolWhereInput } from '@zeitgeistpm/indexer/dist'
import type { ZeitgeistPrimitivesPool } from '@polkadot/types/lookup'
import { Unpacked } from '@zeitgeistpm/utility/dist/array'
import { Context, IndexerContext } from '../../../../context'

/**
 * List of Pools.
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to fetch the marketlist for.
 */
export type PoolList<C extends Context> = C extends IndexerContext ? IndexedPoolList : RpcPoolList

/**
 * Pools list Query type
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to query in.
 */
export type PoolsListQuery<C extends Context> = C extends IndexerContext ? PoolsIndexerQuery : PoolsRpcQuery

/**
 * Concrete Pool type for indexed market list.
 */
export type IndexedPool = Unpacked<PoolsQuery['pools']>
/**
 * Concrete PoolList for indexed context
 */
export type IndexedPoolList = IndexedPool[]

/**
 * Concrete Pool type for rpc market list.
 */
export type RpcPool = [number, ZeitgeistPrimitivesPool]
/**
 * Concrete PoolList for rpc context
 */
export type RpcPoolList = RpcPool[]

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
