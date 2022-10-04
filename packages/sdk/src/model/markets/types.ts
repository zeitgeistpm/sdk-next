import { PFunctor } from '@zeitgeistpm/utility/dist/pfunctor'
import { MetadataStorage } from 'meta'
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
export type Markets<C extends Context<MS>, MS extends MetadataStorage<any, any>> = MarketsShared<
  C,
  MS
> &
  (C extends RpcContext<MS> ? MarketsRpc<C, MS> : never)

export type MarketsShared<C extends Context<MS>, MS extends MetadataStorage<any, any>> = {
  /**
   * List markets. Stronger quering is enabled when connecting to indexer.
   */
  list: (query?: MarketsListQuery<C, MS>) => Promise<MarketList<C, MS>>
  /**
   * Get a market by its id.
   */
  get: (query: MarketGetQuery) => Promise<Market<C, MS>>
}

export type MarketsRpc<C extends RpcContext<MS>, MS extends MetadataStorage<any, any>> = {
  /**
   * Create a market. Only available when connecting to rpc.
   */
  create: {
    (params: CreateMarketParams<MS>): Promise<CreateMarketResult<MS, CreateMarketParams<MS>>>
  }
  get: PFunctor<
    MarketsShared<C, MS>['get'],
    {
      /**
       * Stream pool prices from the node
       */
      $: (query: MarketGetQuery) => Observable<Market<RpcContext<MS>, MS>>
    }
  >
}
