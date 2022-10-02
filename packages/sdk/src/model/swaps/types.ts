import { PFunctor } from '@zeitgeistpm/utility/dist/pfunctor'
import { Metadata } from '../../meta/market'
import { Observable } from 'rxjs'
import { Context, RpcContext } from '../../context'
import { PoolGetQuery } from './functions/getpool/types'
import { PoolList, PoolsListQuery } from './functions/listpools/types'
import {
  PoolAssetPricesAtBlock,
  PoolPrices,
  PoolPricesQuery,
  PoolPricesStreamQuery,
} from './functions/poolprices/types'
import { Pool } from './pool'

export * from './functions/types'
export * from './pool'

/**
 * Zeitgeist Swaps model..
 */
export type Swaps<C extends Context<M>, M = Metadata> = SwapsShared<C, M> & SwapsRpc<C, M>

export type SwapsShared<C extends Context<M>, M = Metadata> = {
  /**
   * List liquidity pools.
   * @param query PoolsListQuery<C>
   * @returns Promise<PoolList<C>>
   */
  listPools: (query: PoolsListQuery<C, M>) => Promise<PoolList<C, M>>

  /**
   * Get a pool by either market id or pool id.
   * @param query PoolGetQuery
   * @returns Promise<Pool<C>>
   */
  getPool: (query: PoolGetQuery) => Promise<Pool<C, M>>
  /**
   * Fetch poolprices for a cetain timespan. Will prefer indexer but use rpc if indexer isnt available.
   *
   * @param query PoolPricesQuery
   * @returns Promise<PoolPrices>
   */
  poolPrices: (query: PoolPricesQuery) => Promise<PoolPrices>
}

export type SwapsRpc<C extends Context<M>, M = Metadata> = C extends RpcContext
  ? {
      getPool: PFunctor<
        SwapsShared<C>['getPool'],
        {
          /**
           * Stream changes to a pool object.
           * @param query PoolGetQuery
           * @returns Observable<Pool<RpcContext>>
           */
          $: (query: PoolGetQuery) => Observable<Pool<RpcContext>>
        }
      >
      poolPrices: PFunctor<
        SwapsShared<C>['poolPrices'],
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
