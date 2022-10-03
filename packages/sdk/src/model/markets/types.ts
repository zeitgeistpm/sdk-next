import { Context, RpcContext } from '../../context'
import { CreateMarketParams, CreateMarketResult } from './functions/create/types'
import { MarketGetQuery } from './functions/get/types'
import { MarketList, MarketsListQuery } from './functions/list/types'
import { MarketMetadata } from '../../meta/market'
import { Market } from '../types'
import { PFunctor } from '@zeitgeistpm/utility/dist/pfunctor'
import { Observable } from 'rxjs'

export * from './market'
export * from './functions/create/types'
export * from './functions/list/types'

/**
 * Zeitgeist Markets model.
 * Query and create markets.
 */
export type Markets<C extends Context, M = MarketMetadata> = MarketsShared<C, M> & MarketsRpc<C, M>

export type MarketsShared<C extends Context, M = MarketMetadata> = {
  /**
   * List markets. Stronger quering is enabled when connecting to indexer.
   */
  list: (query?: MarketsListQuery<C>) => Promise<MarketList<C>>
  /**
   * Get a market by its id.
   */
  get: (query: MarketGetQuery) => Promise<Market<C, M>>
}

export type MarketsRpc<C extends Context, M = MarketMetadata> = C extends RpcContext<M>
  ? {
      /**
       * Create a market. Only available when connecting to rpc.
       */
      create: {
        <P extends CreateMarketParams>(params: P): Promise<CreateMarketResult<P>>
      }
      get: PFunctor<
        MarketsShared<C, M>['get'],
        {
          /**
           * Stream pool prices from the node
           */
          $: (query: MarketGetQuery) => Observable<Market<RpcContext>>
        }
      >
    }
  : {}
