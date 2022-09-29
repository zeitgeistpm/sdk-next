import { u128 } from '@polkadot/types'
import { ZeitgeistPrimitivesPool } from '@polkadot/types/lookup'
import { PoolsQuery } from '@zeitgeistpm/indexer'
import { Unpacked } from '@zeitgeistpm/utility/dist/array'
import { Context, IndexerContext } from '../../context'

/**
 * List of Pools.
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to fetch the marketlist for.
 */
export type Pool<C extends Context> = C extends IndexerContext ? IndexedPool : RpcPool

/**
 * Concrete Pool type for indexed Pool.
 */
export type IndexedPool = Unpacked<PoolsQuery['pools']>

/**
 * Concrete Pool type for rpc Pool.
 */
export type RpcPool = ZeitgeistPrimitivesPool & {
  poolId: u128
}
