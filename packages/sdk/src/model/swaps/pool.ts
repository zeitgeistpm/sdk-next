import { u128 } from '@polkadot/types'
import { ZeitgeistPrimitivesPool } from '@polkadot/types/lookup'
import { PoolsQuery } from '@zeitgeistpm/indexer'
import { Unpacked } from '@zeitgeistpm/utility/dist/array'
import { Data } from '../../primitives/data'
import { Context } from '../../context'
import { MetadataStorage } from 'meta'

/**
 * Union Pool type of indexed and rpc types.
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to fetch the marketlist for.
 */
export type Pool<C extends Context<M>, M extends MetadataStorage> = Data<C, RpcPool, IndexedPool, M>

/**
 * Concrete Pool type for indexed Pool.
 */
export type IndexedPool = Unpacked<PoolsQuery['pools']>

/**
 * Concrete Pool type for rpc Pool.
 */
export type RpcPool = ZeitgeistPrimitivesPool & {
  poolId: number
}
