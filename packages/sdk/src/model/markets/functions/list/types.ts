import type { MarketOrderByInput, MarketWhereInput } from '@zeitgeistpm/indexer'
import type { Unpartial } from '@zeitgeistpm/utility/dist/object'
import { MetadataStorage } from '../../../../meta'
import { Context, IndexerContext, RpcContext } from '../../../../context'
import { PaginationQuery } from '../../../../primitives/pagination'
import { Market, IndexedMarket, RpcMarket } from '../../types'

/**
 * List of Markets.
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to fetch the marketlist for.
 */
export type MarketList<C extends Context<MS>, MS extends MetadataStorage> = Market<C, MS>[]

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
export type FullMarketList<C extends Context<MS>, MS extends MetadataStorage> = {
  items: IndexedMarket<C, MS>[]
}

/**
 * Concrete MarketList for rpc context
 */
export type AugmentedRpcMarketList<C extends RpcContext<MS>, MS extends MetadataStorage> = {
  items: RpcMarket<C, MS>[]
}

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
