import {
  MarketOrderByInput,
  MarketsQuery,
  MarketWhereInput,
} from '@zeitgeistpm/indexer/dist'
import { Context, IndexerContext } from '@zeitgeistpm/sdk/src/context'
import { Market } from '@zeitgeistpm/types/dist/interfaces'
import { Unpacked } from '@zeitgeistpm/utility/dist/array'

/**
 * List of Markets.
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to fetch the marketlist for.
 */
export type MarketList<C extends Context> = C extends IndexerContext
  ? IndexedList
  : RpcList

/**
 * Markets list Query type
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to query in.
 */
export type ListQuery<C extends Context> = C extends IndexerContext
  ? IndexerQuery
  : RpcQuery

/**
 * Concrete Market type for indexed market list.
 */
export type IndexedMarket = Unpacked<MarketsQuery['markets']>
/**
 * Concrete MarketList for indexed context
 */
export type IndexedList = IndexedMarket[]

/**
 * Concrete Market type for rpc market list.
 */
export type RpcMarket = Market & { marketId: number }
/**
 * Concrete MarketList for rpc context
 */
export type RpcList = RpcMarket[]

/**
 * Concrete markets Query for rpc context
 */
export type RpcQuery = {
  offset?: number
  limit?: number
}

/**
 * Concrete markets Query for indexed context
 */
export type IndexerQuery = {
  where?: MarketWhereInput
  order?: MarketOrderByInput
  offset?: number
  limit?: number
}
