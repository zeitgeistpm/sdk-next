import {
  MarketPeriod,
  MarketType,
  MarketDisputeMechanism,
} from '@zeitgeistpm/types/dist/interfaces'
import { Context, RpcContext } from '../../context'
import { ListQuery, MarketList } from './functions/list/types'
import {
  CreateMarketResponse,
  CreateMarketParams,
} from './functions/create/types'

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
  list: (query: ListQuery<C>) => Promise<MarketList<C>>
}

export type MarketsRpc<C> = C extends RpcContext
  ? {
      /**
       * Create a market. Only available when connecting to rpc.
       */
      create: <
        MT extends MarketType['type'] = 'Categorical',
        MP extends MarketPeriod['type'] = 'Timestamp',
        MD extends MarketDisputeMechanism['type'] = 'Authorized',
      >(
        params: CreateMarketParams<MT, MP, MD>,
      ) => Promise<CreateMarketResponse>
    }
  : {}
