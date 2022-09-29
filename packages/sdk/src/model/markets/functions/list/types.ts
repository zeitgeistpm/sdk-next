import type { MarketOrderByInput, MarketWhereInput } from '@zeitgeistpm/indexer'
import type { Unpartial } from '@zeitgeistpm/utility/dist/object'
import { Context, IndexerContext } from '../../../../context'
import { PaginationQuery } from '../../../../types/query'
import { IndexedMarket, AugmentedRpcMarket } from '../../types'

/**
 * List of Markets.
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to fetch the marketlist for.
 */
export type MarketList<C extends Context> = C extends IndexerContext
  ? FullMarketList
  : AugmentedRpcMarketList

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
 * Concrete MarketList for indexed context
 */
export type FullMarketList = { items: IndexedMarket[] }

/**
 * Concrete MarketList for rpc context
 */
export type AugmentedRpcMarketList = { items: AugmentedRpcMarket[] }

/**
 * Concrete markets Query for rpc context
 */
export type MarketsRpcQuery = Unpartial<PaginationQuery>

/**
 * Concrete markets Query for indexed context
 */
export type MarketsIndexerQuery = Unpartial<PaginationQuery> & {
  where?: MarketWhereInput
  order?: MarketOrderByInput
}
