import { PFunctor } from '@zeitgeistpm/utility/dist/pfunctor'
import { Observable } from 'rxjs'
import { Context, RpcContext } from '../../context'
import { Market } from '../types'
import { CreateMarketParams, CreateMarketResult } from './functions/create/types'
import { MarketGetQuery } from './functions/get/types'
import { MarketList, MarketsListQuery } from './functions/list/types'

export * from './functions/create/types'
export * from './functions/list/types'
export * from './market'

/**
 * Zeitgeist Markets model.
 * Query and create markets.
 */
export type Markets<C extends Context<any>> = MarketsShared<C> &
  (C extends RpcContext<any> ? MarketsRpc<C> : {})

export type MarketsShared<C extends Context<any>> = {
  /**
   * List markets. Stronger quering is enabled when connecting to indexer.
   */
  list: (query?: MarketsListQuery<C>) => Promise<MarketList<C>>
  /**
   * Get a market by its id.
   */
  get: (query: MarketGetQuery) => Promise<Market<C>>
}

export type MarketsRpc<C extends RpcContext<any>> = {
  /**
   * Create a market. Only available when connecting to rpc.
   */
  create: {
    <P extends CreateMarketParams<C>>(params: P): Promise<CreateMarketResult<C, P>>
  }
  get: PFunctor<
    MarketsShared<C>['get'],
    {
      /**
       * Stream pool prices from the node
       */
      $: (query: MarketGetQuery) => Observable<Market<C>>
    }
  >
}
