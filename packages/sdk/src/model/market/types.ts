import {
  ZeitgeistPrimitivesMarketMarketType,
  ZeitgeistPrimitivesMarketMarketPeriod,
  ZeitgeistPrimitivesMarketMarketDisputeMechanism,
} from '@polkadot/types/lookup'
import { Context, RpcContext } from '../../context'
import { MarketsListQuery, MarketList } from './functions/list/types'
import {
  CreateMarketResponse,
  CreateMarketParams,
} from './functions/create/types'
import { ISubmittableResult } from '@polkadot/types/types'

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
      create: <
        MT extends ZeitgeistPrimitivesMarketMarketType['type'],
        MP extends ZeitgeistPrimitivesMarketMarketPeriod['type'],
        MD extends ZeitgeistPrimitivesMarketMarketDisputeMechanism['type'],
      >(
        params: CreateMarketParams<MT, MP, MD>,
      ) => Promise<ISubmittableResult>
    }
  : {}
