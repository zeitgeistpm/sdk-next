import { IOption } from '@zeitgeistpm/utility/dist/option'
import { PFunc } from '@zeitgeistpm/utility/dist/pfunc'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { ChainTime } from '@zeitgeistpm/utility/dist/time'
import { Observable } from 'rxjs'
import { Context, RpcContext } from '../../context'
import { MetadataStorage } from '../../meta'
import { CreateMarketTransaction, Market, RpcMarket } from '../types'
import { CreateMarketParams, CreateMarketResult } from './functions/create/types'
import { MarketGetQuery } from './functions/get/types'
import { MarketList, MarketsListQuery } from './functions/list/types'
import { MarketStage } from './marketstage'

export * from './functions/create/types'
export * from './functions/list/types'
export * from './market'

/**
 * Zeitgeist Markets model.
 * Query and create markets.
 */
export type Markets<C extends Context<MS>, MS extends MetadataStorage> = {
  /**
   * List markets. Stronger quering is enabled when connecting to indexer.
   *
   * @note Pagination behaves differently between rcp and indexer environments.
   *
   * @param query MarketsListQuery<C>
   * @returns Promise<MarketList<C, MS>>
   */
  list: (query?: MarketsListQuery<C>) => Promise<MarketList<C, MS>>

  /**
   * Get a market by its id.
   */
  get: PFunc<
    /**
     * Get a rpc market by its id.
     *
     * @param query MarketGetQuery
     * @returns Promise<Market<C, MS> | null>
     */
    (query: MarketGetQuery) => IOption<Market<C, MS>>,
    C extends RpcContext<MS>
      ? {
          /**
           * Stream changes to the market.
           *
           * @param query MarketGetQuery
           * @returns Observable<RpcMarket<C, MS>>
           */
          $: (query: MarketGetQuery) => Observable<RpcMarket<C, MS>>
        }
      : {}
  >

  /**
   * Create a market. Only available when connecting to rpc.
   */
  create: C extends RpcContext<MS>
    ? PFunc<
        Te.TaskEither<
          Error,
          CreateMarketResult<C, MS>,
          [params: CreateMarketParams<C, MS>]
        >,
        {
          /**
           * Create a transaction that can be signed and sent manually.
           * @param query CreateMarketParams<C, MS>
           * @returns Promise<CreateMarketTransaction>
           */
          tx: (params: CreateMarketParams<C, MS>) => Promise<CreateMarketTransaction>
        }
      >
    : never

  getStage: C extends RpcContext<MS>
    ? (market: Market<C, MS>, time?: ChainTime) => Promise<MarketStage>
    : never
}
