import {
  Context,
  IndexerContext,
  isFullContext,
  isIndexerContext,
  RpcContext,
} from '../../../../context'
import { MetadataStorage } from '../../../../meta'
import { isPaginated } from '../../../../types/query'
import { fromEntry } from '../../market'
import { AugmentedRpcMarketList, MarketList, MarketsListQuery } from '../../types'

/**
 * Query for a list of markets.
 * Query capabilities and returned data differentiates between a rpc and indexer context.
 *
 * @generic C - Context
 * @param context C - the context to query inb
 * @param query ListQuery<C>
 * @returns Promise<MarketList<C>>
 */
export const list = async <C extends Context>(
  context: C,
  query?: MarketsListQuery<C>,
): Promise<MarketList<C>> => {
  const data =
    isFullContext(context) || isIndexerContext(context)
      ? await indexer(context, query)
      : await rpc(context, query)

  return data as MarketList<C>
}

/**
 * Concrete listing function for indexer context
 * @private
 */
const indexer = async <C extends IndexerContext>(
  context: IndexerContext,
  query?: MarketsListQuery<C>,
): Promise<MarketList<C>> => {
  return (await context.indexer.markets(query)).markets as MarketList<C>
}

/**
 * Concrete listing function for rpc context
 * @private
 */
const rpc = async <C extends RpcContext>(
  context: C,
  query?: MarketsListQuery<C>,
): Promise<MarketList<C>> => {
  const entries = isPaginated(query)
    ? await context.api.query.marketCommons.markets.entriesPaged({
        args: [],
        pageSize: query.limit,
        startKey: `${query.offset}`,
      })
    : await context.api.query.marketCommons.markets.entries()

  const list = entries.map(m => fromEntry(context, m))

  return list as MarketList<C>
}
