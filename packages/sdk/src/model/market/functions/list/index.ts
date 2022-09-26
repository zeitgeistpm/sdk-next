import CID from 'cids'
import { isPaginated } from 'types/query'
import { RpcContext, Context, IndexerContext, isFullContext, isIndexerContext } from '../../../../context'
import { MarketList, MarketsListQuery, RpcMarket, RpcMarketList } from '../../types'

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
  return (await context.indexer.markets(query)).markets
}

/**
 * Concrete listing function for rpc context
 * @private
 */
const rpcList = async <C extends RpcContext>(
  { api, storage }: C,
  query?: MarketsListQuery<C>,
): Promise<MarketList<C>> => {
  const entries = isPaginated(query)
    ? await api.query.marketCommons.markets.entriesPaged({
        args: [],
        pageSize: query.limit,
        startKey: `${query.offset}`,
      })
    : await api.query.marketCommons.markets.entries()

  const list: RpcMarketList = entries.map(
    ([
      {
        args: [marketId],
      },
      market,
    ]) => {
      const rpcMarket = market.unwrap() as RpcMarket
      rpcMarket.marketId = marketId
      rpcMarket.storage = async () => {
        const hex = rpcMarket.metadata.toHex()
        return storage.get(new CID('f0155' + hex.slice(2)) as any)
      }
      return rpcMarket
    },
  )

  return list as MarketList<C>
}
