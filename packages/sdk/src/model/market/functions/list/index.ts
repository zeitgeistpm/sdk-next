import { Option } from '@polkadot/types'
import { Market } from '@zeitgeistpm/types/dist/interfaces'
import {
  RpcContext,
  Context,
  IndexerContext,
  isFullContext,
  isIndexerContext,
} from '../../../../context'
import { MarketList, ListQuery, RpcMarket } from '../../types'

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
  query: ListQuery<C>,
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
  query: ListQuery<IndexerContext>,
): Promise<MarketList<IndexerContext>> => {
  return (await context.indexer.markets(query)).markets
}

/**
 * Concrete listing function for rpc context
 * @private
 */
const rpcList = async <C extends RpcContext>(
  { api }: RpcContext,
  query: ListQuery<RpcContext>,
): Promise<MarketList<C>> => {
  const entries = await api.query.marketCommons.markets.entries<Option<Market>>()

  const list = entries.map(
    ([
      {
        args: [index],
      },
      market,
    ]) => {
      const marketId = Number(index.toHuman())
      const rpcMarket: RpcMarket = [marketId, market.unwrap()]
      return rpcMarket
    },
  )

  const offset = query.offset ?? 0
  const limit = offset + (query.limit ?? list.length)

  return list.slice(offset, limit) as any
}
