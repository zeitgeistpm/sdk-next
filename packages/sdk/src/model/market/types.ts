import {
  MarketOrderByInput,
  MarketsQuery,
  MarketWhereInput,
} from '@zeitgeistpm/indexer/dist'
import { Context, IndexerContext } from '../../context'

export type Markets<C extends Context> = {
  list: (query: ListQuery<C>) => Promise<MarketList<C>>
}

export type MarketList<C extends Context> = C extends IndexerContext
  ? IndexedList
  : RpcList

export type ListQuery<C extends Context> = C extends IndexerContext
  ? IndexerQuery
  : RpcQuery

export type IndexedList = MarketsQuery['markets']

export type RpcList = []

export type RpcQuery = {
  offset?: number
  limit?: number
}

export type IndexerQuery = {
  where?: MarketWhereInput
  order?: MarketOrderByInput
  offset?: number
  limit?: number
}
