import { Functor } from '@zeitgeistpm/utility/dist/functor'
import { Observable } from 'rxjs'
import { Context, RpcContext } from '../../context'
import {
  PoolAssetPricesAtBlock,
  PoolPrices,
  PoolPricesQuery,
  PoolPricesStreamQuery,
} from './functions/poolprices/types'

export * from './asset'
export * from './functions/types'

/**
 * Zeitgeist Assets Model
 */
export type Assets<C extends Context> = AssetsShared<C> & AssetsRpc<C>

export type AssetsShared<C extends Context> = {
  /**
   * Fetch poolprices for a cetain timespan. Will prefer indexer but use rpc if indexer isnt available.
   *
   * @param query PoolPricesQuery
   * @returns Promise<PoolPrices>
   */
  poolPrices: (query: PoolPricesQuery) => Promise<PoolPrices>
}

export type AssetsRpc<C extends Context> = C extends RpcContext
  ? {
      poolPrices: Functor<
        AssetsShared<RpcContext>['poolPrices'],
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
