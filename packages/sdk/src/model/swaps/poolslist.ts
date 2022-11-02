import { Context } from '../../context'
import { MetadataStorage } from '../../meta'
import { Pool } from './pool'

/**
 * List of Pools.
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to fetch the marketlist for.
 */
export type PoolList<
  C extends Context<MS>,
  MS extends MetadataStorage = MetadataStorage,
> = Pool<C, MS>[]
