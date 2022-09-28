import { Context, RpcContext } from '../../context'
import { PoolsListQuery, PoolList } from './functions/listpools/types'

export * from './functions/types'

/**
 * Zeitgeist Swaps model..
 */
export type Swaps<C extends Context> = SwapsShared<C> & SwapsRpc<C>

export type SwapsShared<C extends Context> = {
  /**
   * List Liquidity Pools. Stronger quering is enabled when connecting to indexer.
   */
  listPools: (query: PoolsListQuery<C>) => Promise<PoolList<C>>
}

export type SwapsRpc<C extends Context> = C extends RpcContext ? {} : {}
