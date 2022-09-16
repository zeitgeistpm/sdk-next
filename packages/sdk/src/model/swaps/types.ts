import { Context, RpcContext } from '../../context'
import { PoolsListQuery, PoolList } from './functions/list/types'

export * from './functions/types'

/**
 * Zeitgeist Markets model.
 * Query and create markets.
 */
export type Swaps<C extends Context> = SwapsShared<C> & SwapsRpc<C>

export type SwapsShared<C extends Context> = {
  /**
   * List markets. Stronger quering is enabled when connecting to indexer.
   */
  listPools: (query: PoolsListQuery<C>) => Promise<PoolList<C>>
}

export type SwapsRpc<C extends Context> = C extends RpcContext ? {} : {}
