import {
  Context,
  IndexerContext,
  isFullContext,
  isIndexerContext,
  isRpcContext,
  RpcContext,
} from '../../../../context'
import { MetadataStorage } from '../../../../meta'
import { isPaginated } from '../../../../types/query'
import { MarketList, MarketsListQuery, rpcMarket, attachTransactionInterface } from '../../types'

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
  query?: MarketsListQuery<C>,
): Promise<MarketList<C, MS>> => {
  if (isFullContext<MS>(context) || isIndexerContext<MS>(context)) {
    return listFromIndexer<typeof context, MS>(context, query)
  } else if (isRpcContext<MS>(context)) {
    return listFromRpc<typeof context, MS>(context, query)
  }
  return []
}

/**
 * Concrete listing function for indexer context
 * @private
 */
const listFromIndexer = async <C extends IndexerContext, MS extends MetadataStorage>(
  context: C,
  query?: MarketsListQuery<C>,
): Promise<MarketList<C, MS>> => {
  return (await context.indexer.markets(query)).markets.map(market =>
    attachTransactionInterface<C, MS>(context, market),
  ) as MarketList<C, MS>
}

/**
 * Concrete listing function for rpc context
 * @private
 */
const listFromRpc = async <C extends RpcContext<MS>, MS extends MetadataStorage>(
  context: C,
  query?: MarketsListQuery<C>,
): Promise<MarketList<C, MS>> => {
  const entries = isPaginated(query)
    ? await context.api.query.marketCommons.markets.entriesPaged({
        args: [],
        pageSize: query.limit,
        startKey: `${query.offset}`,
      })
    : await context.api.query.marketCommons.markets.entries()

  const list = entries.map(
    ([
      {
        args: [marketId],
      },
      market,
    ]) => rpcMarket<C, MS>(context, marketId, market.unwrap()),
  )

  return list as MarketList<C, MS>
}
