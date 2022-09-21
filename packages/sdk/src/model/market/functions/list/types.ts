import type { MarketOrderByInput, MarketsQuery, MarketWhereInput } from '@zeitgeistpm/indexer/dist'
import type { ZeitgeistPrimitivesMarket } from '@polkadot/types/lookup'
import type { Unpacked } from '@zeitgeistpm/utility/dist/array'
import { Context, IndexerContext, RpcContext } from '../../../../context'
import { u128 } from '@polkadot/types'
import { IndexedMarket, RpcMarket } from '../types'

/**
 * List of Markets.
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to fetch the marketlist for.
 */
export type MarketList<C extends Context> = C extends IndexerContext ? IndexedMarketList : RpcMarket[]

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
