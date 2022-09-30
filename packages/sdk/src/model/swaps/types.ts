import { Context, RpcContext } from '../../context'
import { PoolsListQuery, PoolList } from './functions/listpools/types'
import { PoolGetQuery } from './functions/getpool/types'
import { Pool } from './pool'
import { Functor } from '@zeitgeistpm/utility/dist/functor'
import { Observable } from 'rxjs'
import {
  PoolPricesQuery,
  PoolPrices,
  PoolPricesStreamQuery,
  PoolAssetPricesAtBlock,
} from './functions/poolprices/types'
import { AssetsShared } from '../assets'

export * from './pool'
export * from './functions/types'

/**
 * Zeitgeist Swaps model..
 */
export type Swaps<C extends Context> = SwapsShared<C> & SwapsRpc<C>

export type SwapsShared<C extends Context> = {
  /**
   * List liquidity pools.
   * @param query PoolsListQuery<C>
   * @returns Promise<PoolList<C>>
   */
  listPools: (query: PoolsListQuery<C>) => Promise<PoolList<C>>

  /**
   * Get a pool by either market id or pool id.
   * @param query PoolGetQuery
   * @returns Promise<Pool<C>>
   */
  getPool: (query: PoolGetQuery) => Promise<Pool<C>>
  /**
   * Fetch poolprices for a cetain timespan. Will prefer indexer but use rpc if indexer isnt available.
   *
   * @param query PoolPricesQuery
   * @returns Promise<PoolPrices>
   */
  poolPrices: (query: PoolPricesQuery) => Promise<PoolPrices>
}

export type SwapsRpc<C extends Context> = C extends RpcContext
  ? {
      getPool: Functor<
        SwapsShared<RpcContext>['getPool'],
        {
          /**
           * Stream changes to a pool object.
           * @param query PoolGetQuery
           * @returns Observable<Pool<RpcContext>>
           */
          $: (query: PoolGetQuery) => Observable<Pool<RpcContext>>
        }
      >
      poolPrices: Functor<
        SwapsShared<RpcContext>['poolPrices'],
        {
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
      >
    }
  : {}
