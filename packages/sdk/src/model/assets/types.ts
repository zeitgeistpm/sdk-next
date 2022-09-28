import { Functor } from '@zeitgeistpm/utility/dist/functor'
import { Observable } from 'rxjs'
import { Context, RpcContext } from '../../context'
import {
  PoolPrices,
  PoolPricesQuery,
  PoolPricesStreamQuery,
  RpcPoolPrices,
} from './functions/poolprices/types'

/**
 * Zeitgeist Assets Model
 */
export type Assets<C extends Context> = AssetsShared<C> & AssetsRpc<C>

export type AssetsShared<C extends Context> = {
  /**
   * List prices of assets in a pool for a certain timespan.
   */
  poolPrices: (query: PoolPricesQuery) => Promise<PoolPrices<C>>
}

export type AssetsRpc<C extends Context> = C extends RpcContext
  ? {
      poolPrices: Functor<
        AssetsShared<RpcContext>['poolPrices'],
        {
          /**
           * Stream pool prices from the node
           */
          $: (query: PoolPricesStreamQuery) => Observable<RpcPoolPrices>
        }
      >
    }
  : {}
