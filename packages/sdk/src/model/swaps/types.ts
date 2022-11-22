import { PFunc } from '@zeitgeistpm/utility/dist/pfunc'
import { Observable } from 'rxjs'
import { Context, RpcContext } from '../../context'
import { MetadataStorage } from '../../meta'
import { PoolGetQuery } from './functions/get-pool/types'
import { PoolsListQuery } from './functions/list-pools/types'
import { SaturatedPoolIndex } from './functions/saturated-pool-index/types'
import {
  PoolAssetPricesAtBlock,
  PoolPrices,
  PoolPricesQuery,
  PoolPricesStreamQuery,
} from './functions/pool-prices/types'
import { Pool } from './pool'
import { PoolList } from './poolslist'
import { IOption } from '@zeitgeistpm/utility/dist/option'

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
   * Fetch an index of assets + category and values like asset amounts, price
   * and liquidity for a set of pools.
   *
   * @param pools Pool<C, MS>[]
   * @returns Promise<SaturatedPoolIndex>
   */
  saturatedPoolsIndex: (pools: Pool<C, MS>[]) => Promise<SaturatedPoolIndex<C, MS>>

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

  /**
   * Get pool prices for a pool.
   */
  poolPrices: PFunc<
    /**
     * Get a pools prices.
     *
     * @param query PoolPricesQuery
     * @returns  Promise<PoolPrices>
     */
    (query: PoolPricesQuery) => Promise<PoolPrices>,
    C extends RpcContext<MS>
      ? {
          /**
           * Will stream prices for a given pool tailed after a block or date.
           * Will emit the price at each block in the stream as dictated by the resolution passed.
           * When it reaches the end it starts to listen for new blocks and emits an item for every block.
           *
           * @param query PoolPricesStreamQuery
           * @returns Observable<PoolAssetPricesAtBlock>
           */
          $: (query: PoolPricesStreamQuery) => Observable<PoolAssetPricesAtBlock>
        }
      : {}
  >
}
