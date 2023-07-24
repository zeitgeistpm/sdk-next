import { IOption } from '@zeitgeistpm/utility/dist/option'
import { PFunc } from '@zeitgeistpm/utility/dist/pfunc'
import { Observable } from 'rxjs'
import { Context, RpcContext } from '../../context'
import { MetadataStorage } from '../../meta'
import { PoolGetQuery } from './functions/getPool/types'
import { PoolsListQuery } from './functions/listPools/types'
import { Pool } from './pool'
import { PoolList } from './poolslist'

export * from './functions/types'
export * from './pool'
export * from './poolslist'

/**
 * Zeitgeist Swaps model..
 */
export type Swaps<C extends Context<MS>, MS extends MetadataStorage> = {
  /**
   * List liquidity pools.
   * @param query PoolsListQuery<C>
   * @returns Promise<PoolList<C>>
   */
  listPools: (query: PoolsListQuery<C, MS>) => Promise<PoolList<C, MS>>

  /**
   * Get a pool by pool or market id.
   */
  getPool: PFunc<
    /**
     * Get a pool by market or pool id.
     *
     * @param query PoolGetQuery
     * @returns Promise<Pool<C, MS> | null>
     */
    (query: PoolGetQuery) => Promise<IOption<Pool<C, MS>>>,
    C extends RpcContext<MS>
      ? {
          /**
           * Stream changes to a pool object.
           * @param query PoolGetQuery
           * @returns Observable<Pool<RpcContext>>
           */
          $: (query: PoolGetQuery) => Observable<Pool<C, MS>>
        }
      : {}
  >
}
