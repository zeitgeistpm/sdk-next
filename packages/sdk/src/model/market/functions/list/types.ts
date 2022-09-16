import {
  MarketOrderByInput,
  MarketsQuery,
  MarketWhereInput,
} from '@zeitgeistpm/indexer/dist'
import { ZeitgeistPrimitivesMarket } from '@polkadot/types/lookup'
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
  : ZeitgeistPrimitivesMarket[]

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
