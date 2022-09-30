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
   * List prices of assets in a pool for a certain timespan.
   */
  poolPrices: (query: PoolPricesQuery) => Promise<PoolPrices>
}

export type AssetsRpc<C extends Context> = C extends RpcContext
  ? {
      poolPrices: Functor<
        AssetsShared<RpcContext>['poolPrices'],
        {
          /**
           * Stream pool prices from the node
           */
          $: (query: PoolPricesStreamQuery) => Observable<PoolAssetPricesAtBlock>
        }
      >
    }
  : {}
