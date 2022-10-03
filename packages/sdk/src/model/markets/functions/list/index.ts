import { Metadata, TaggedMetadata } from 'meta/types'
import {
  Context,
  IndexerContext,
  isFullContext,
  isIndexerContext,
  RpcContext,
} from '../../../../context'
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
export const list = async <C extends Context<M>, M extends TaggedMetadata = Metadata>(
  context: C,
  query?: MarketsListQuery<C, M>,
): Promise<MarketList<C, M>> => {
  const data =
    isFullContext(context) || isIndexerContext(context)
      ? await indexer(context, query)
      : await rpc(context, query)

  return data as MarketList<C, M>
}

/**
 * Concrete listing function for indexer context
 * @private
 */
const indexer = async (
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
const rpc = async <C extends RpcContext<M>, M extends TaggedMetadata = Metadata>(
  context: C,
  query?: MarketsListQuery<C, M>,
): Promise<MarketList<C, M>> => {
  const entries = isPaginated(query)
    ? await context.api.query.marketCommons.markets.entriesPaged({
        args: [],
        pageSize: query.limit,
        startKey: `${query.offset}`,
      })
    : await context.api.query.marketCommons.markets.entries()

  const list: AugmentedRpcMarketList<M> = {
    items: entries.map(m => fromEntry<RpcContext<M>, M>(context, m)),
  }

  return list as MarketList<C, M>
}
