import {
  ZeitgeistPrimitivesMarketMarketType,
  ZeitgeistPrimitivesMarketMarketPeriod,
  ZeitgeistPrimitivesMarketMarketDisputeMechanism,
} from '@polkadot/types/lookup'
import { Context, RpcContext } from '../../context'
import { MarketsListQuery, MarketList } from './functions/list/types'
import { CreateMarketParams, CreateMarketResult } from './functions/create/types'

export * from './functions/types'

/**
 * Zeitgeist Markets model.
 * Query and create markets.
 */
export type Markets<C extends Context> = MarketsShared<C> & MarketsRpc<C>

export type MarketsShared<C extends Context> = {
  /**
   * List markets. Stronger quering is enabled when connecting to indexer.
   */
  list: (query: MarketsListQuery<C>) => Promise<MarketList<C>>
}

export type MarketsRpc<C> = C extends RpcContext
  ? {
      /**
       * Create a market. Only available when connecting to rpc.
       */
      create: <P extends CreateMarketParams>(
        params: P,
      ) => Promise<CreateMarketResult<P>>
    }
  : {}
