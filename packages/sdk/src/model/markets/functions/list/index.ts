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
export const list = async <C extends Context<MS>, MS extends MetadataStorage>(
  context: C,
  query?: MarketsListQuery<C, MS>,
): Promise<MarketList<C, MS>> => {
  const data =
    isFullContext(context) || isIndexerContext(context)
      ? await indexer(context, query)
      : await rpc(context, query)

  return data as MarketList<C, MS>
}

/**
 * Concrete listing function for indexer context
 * @private
 */
const indexer = async <MS extends MetadataStorage>(
  context: IndexerContext,
  query?: MarketsListQuery<IndexerContext, MS>,
): Promise<MarketList<IndexerContext, MS>> => {
  return {
    items: (await context.indexer.markets(query)).markets,
  }
}

/**
 * Concrete listing function for rpc context
 * @private
 */
const rpc = async <C extends RpcContext<MS>, MS extends MetadataStorage>(
  context: C,
  query?: MarketsListQuery<C, MS>,
): Promise<MarketList<C, MS>> => {
  const entries = isPaginated(query)
    ? await context.api.query.marketCommons.markets.entriesPaged({
        args: [],
        pageSize: query.limit,
        startKey: `${query.offset}`,
      })
    : await context.api.query.marketCommons.markets.entries()

  const list: AugmentedRpcMarketList<MS> = {
    items: entries.map(m => fromEntry(context, m)),
  }

  return list as MarketList<C, MS>
}
