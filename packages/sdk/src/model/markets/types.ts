import { Context, RpcContext } from '../../context'
import { CreateMarketParams, CreateMarketResult } from './functions/create/types'
import { MarketGetQuery } from './functions/get/types'
import { MarketList, MarketsListQuery } from './functions/list/types'
import { MarketMetadata } from '../../meta/market'
import { Market } from '../types'
import { PFunctor } from '@zeitgeistpm/utility/dist/pfunctor'
import { Observable } from 'rxjs'
import { MetadataStorage } from 'meta'

export * from './market'
export * from './functions/create/types'
export * from './functions/list/types'

/**
 * Zeitgeist Markets model.
 * Query and create markets.
 */
export type Markets<C extends Context<M>, M extends MetadataStorage> = MarketsShared<C, M> &
  (C extends RpcContext<M> ? MarketsRpc<C, M> : never)

export type MarketsShared<C extends Context<M>, M extends MetadataStorage> = {
  /**
   * List markets. Stronger quering is enabled when connecting to indexer.
   */
  list: (query?: MarketsListQuery<C, M>) => Promise<MarketList<C, M>>
  /**
   * Get a market by its id.
   */
  get: (query: MarketGetQuery) => Promise<Market<C, M>>
}

export type MarketsRpc<C extends RpcContext<M>, M extends MetadataStorage> = {
  /**
   * Create a market. Only available when connecting to rpc.
   */
  create: {
    (params: CreateMarketParams<M>): Promise<CreateMarketResult<M, CreateMarketParams<M>>>
  }
  get: PFunctor<
    MarketsShared<C, M>['get'],
    {
      /**
       * Stream pool prices from the node
       */
      $: (query: MarketGetQuery) => Observable<Market<RpcContext<M>, M>>
    }
  >
}
