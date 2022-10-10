import { PFunc } from '@zeitgeistpm/utility/dist/pfunc'
import { $, _ } from '@zeitgeistpm/utility/dist/hkts'
import { MetadataStorage } from '../../meta'
import { Observable } from 'rxjs'
import { Context, FullContext, IndexerContext, RpcContext } from '../../context'
import { Market, RpcMarket } from '../types'
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
export type Markets<C extends Context<MS>, MS extends MetadataStorage> = C extends
  | IndexerContext
  | FullContext<MS>
  ? MarketsIndexed<C, MS>
  : C extends RpcContext<MS>
  ? MarketsRpc<C, MS>
  : never

export type MarketsIndexed<C extends Context<MS>, MS extends MetadataStorage> = {
  /**
   * List markets. Stronger quering is enabled when connecting to indexer.
   */
  list: (query?: MarketsListQuery<C>) => Promise<MarketList<C, MS>>
  /**
   * Get a market by its id.
   */
  get: (query: MarketGetQuery) => Promise<Market<C, MS> | null>
}

export type MarketsRpc<C extends RpcContext<MS>, MS extends MetadataStorage> = {
  /**
   * List markets. Stronger quering is enabled when connecting to indexer.
   */
  list: (query?: MarketsListQuery<C>) => Promise<MarketList<C, MS>>
  /**
   * Get a market by its id.
   */
  get: PFunc<
    /**
     * Get a rpc market by its id.
     */
    (query: MarketGetQuery) => Promise<Market<C, MS>>,
    {
      /**
       * Stream pool prices from the node
       */
      $: (query: MarketGetQuery) => Observable<Market<C, MS>>
    }
  >
  /**
   * Create a market. Only available when connecting to rpc.
   */
  create: {
    (params: CreateMarketParams<C, MS>): Promise<CreateMarketResult<C, MS>>
  }
}
