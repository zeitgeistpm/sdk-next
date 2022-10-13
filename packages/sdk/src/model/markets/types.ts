import { PFunc } from '@zeitgeistpm/utility/dist/pfunc'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { Observable } from 'rxjs'
import { Context, RpcContext } from '../../context'
import { MetadataStorage } from '../../meta'
import { CreateMarketTransaction, Market, RpcMarket } from '../types'
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
export type Markets<C extends Context<MS>, MS extends MetadataStorage> = {
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
    (query: MarketGetQuery) => Promise<Market<C, MS> | null>,
    C extends RpcContext<MS>
      ? {
          /**
           * Stream pool prices from the node
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
        Te.TaskEither<Error, CreateMarketResult<C, MS>, [params: CreateMarketParams<C, MS>]>,
        {
          /**
           * Create a transaction that can be signed and sent manually.
           */
          tx: (params: CreateMarketParams<C, MS>) => Promise<CreateMarketTransaction>
        }
      >
    : never
}
