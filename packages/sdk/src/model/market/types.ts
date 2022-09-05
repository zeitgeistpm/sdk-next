import { Context, RpcContext } from '../../context'
import { ListQuery, MarketList } from './functions/list/types'
import {
  CreateMarketParams,
  CreateMarketResponse,
} from './functions/create/types'

export * from './functions/types'

export type Markets<C extends Context> = MarketsShared<C> & MarketsRpc<C>

export type MarketsShared<C extends Context> = {
  list: (query: ListQuery<C>) => Promise<MarketList<C>>
}

export type MarketsRpc<C> = C extends RpcContext
  ? {
      create: (params: CreateMarketParams) => Promise<CreateMarketResponse>
    }
  : {}
