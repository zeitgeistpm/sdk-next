import type { PoolOrderByInput, PoolWhereInput } from '@zeitgeistpm/indexer'
import type { StorageKey, u128 } from '@polkadot/types'
import type { Context, IndexerContext } from '../../../../context/types'
import type { MetadataStorage } from '../../../../meta/types'

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
  /**
   * The index to start at.
   */
  offset?: number
  /**
   * How many items to list.
   */
  limit?: number
  /**
   * Supplied storage keys. Will be fetched fresh if not supplied.
   */
  keys?: StorageKey<[u128]>[]
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
