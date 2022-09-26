import { Context, IndexerContext, isFullContext, isIndexerContext, RpcContext } from '../../../../context'
import { isPaginated } from '../../../../types/query'
import { fromEntry } from '../../market'
import { MarketList, MarketsListQuery, RpcMarketList } from '../../types'

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
      ? await indexerList(context, query)
      : await rpcList(context, query)

  return data as MarketList<C>
}

/**
 * Concrete listing function for indexer context
 * @private
 */
const indexerList = async (
  context: IndexerContext,
  query?: MarketsListQuery<IndexerContext>,
): Promise<MarketList<IndexerContext>> => {
  return {
    items: (await context.indexer.markets(query)).markets,
  }
}

/**
 * Concrete listing function for rpc context
 * @private
 */
const rpcList = async <C extends RpcContext>(
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

  const list: RpcMarketList = {
    items: entries.map(m => fromEntry(context, m)),
  }

  return list as MarketList<C>
}
