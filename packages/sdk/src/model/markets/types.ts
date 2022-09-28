import { Context, RpcContext } from '../../context'
import { CreateMarketParams, CreateMarketResult } from './functions/create/types'
import { MarketQuery } from './functions/get/types'
import { MarketList, MarketsListQuery } from './functions/list/types'
import { MarketMetadata } from './meta/types'
import { Market } from '../types'

export * from './market'
export * from './functions/create/types'
export * from './functions/list/types'

/**
 * Zeitgeist Markets model.
 * Query and create markets.
 */
export type Markets<C extends Context> = MarketsShared<C> & MarketsRpc<C>

export type MarketsShared<C extends Context, M = MarketMetadata> = {
  /**
   * List markets. Stronger quering is enabled when connecting to indexer.
   */
  list: (query?: MarketsListQuery<C>) => Promise<MarketList<C>>
  /**
   * Get a market by its id.
   */
  get: (query: MarketQuery) => Promise<Market<C, M>>
}

export type MarketsRpc<C extends Context> = C extends RpcContext
  ? {
      /**
       * Create a market. Only available when connecting to rpc.
       */
      create: {
        <P extends CreateMarketParams>(params: P): Promise<CreateMarketResult<P>>
      }
    }
  : {}
