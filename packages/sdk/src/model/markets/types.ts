import { PFunctor } from '@zeitgeistpm/utility/dist/pfunctor'
import { Metadata, TaggedMetadata } from 'meta/types'
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
export type Markets<C extends Context<M>, M extends TaggedMetadata = Metadata> = MarketsShared<C, M> &
  MarketsRpc<C, M>

export type MarketsShared<C extends Context<M>, M extends TaggedMetadata = Metadata> = {
  /**
   * List markets. Stronger quering is enabled when connecting to indexer.
   */
  list: (query?: MarketsListQuery<C, M>) => Promise<MarketList<C, M>>
  /**
   * Get a market by its id.
   */
  get: (query: MarketGetQuery) => Promise<Market<C, M>>
}

export type MarketsRpc<
  C extends Context<M>,
  M extends TaggedMetadata = Metadata,
> = C extends RpcContext<M>
  ? {
      /**
       * Create a market. Only available when connecting to rpc.
       */
      create: {
        <P extends CreateMarketParams<M>>(params: P): Promise<CreateMarketResult<P, M>>
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
  : {}
