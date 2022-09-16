import {
  MarketOrderByInput,
  MarketsQuery,
  MarketWhereInput,
} from '@zeitgeistpm/indexer/dist'
import { Market } from '@zeitgeistpm/types/dist/interfaces'
import { Unpacked } from '@zeitgeistpm/utility/dist/array'
import { Context, IndexerContext } from '../../../../context'

/**
 * List of Markets.
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to fetch the marketlist for.
 */
export type MarketList<C extends Context> = C extends IndexerContext
  ? IndexedMarketList
  : RpcMarketList

/**
 * Markets list Query type
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to query in.
 */
export type MarketsListQuery<C extends Context> = C extends IndexerContext
  ? MarketsIndexerQuery
  : MarketsRpcQuery

/**
 * Concrete Market type for indexed market list.
 */
export type IndexedMarket = Unpacked<MarketsQuery['markets']>
/**
 * Concrete MarketList for indexed context
 */
export type IndexedMarketList = IndexedMarket[]

/**
 * Concrete Market type for rpc market list.
 */
export type RpcMarket = [number, Market]
/**
 * Concrete MarketList for rpc context
 */
export type RpcMarketList = RpcMarket[]

/**
 * Concrete markets Query for rpc context
 */
export type MarketsRpcQuery = {
  offset?: number
  limit?: number
}

/**
 * Concrete markets Query for indexed context
 */
export type MarketsIndexerQuery = {
  where?: MarketWhereInput
  order?: MarketOrderByInput
  offset?: number
  limit?: number
}
