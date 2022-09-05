import {
  RpcContext,
  Context,
  IndexerContext,
  isFullContext,
  isIndexerContext,
} from '../../context'
import { MarketList, ListQuery } from './types'

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

const rpcList = async <C extends RpcContext>(
  { api }: RpcContext,
  query: ListQuery<RpcContext>,
): Promise<MarketList<C>> => {
  const entries = await api.query.marketCommons.markets.entries()

  const list = entries.map(
    ([
      {
        args: [val],
      },
      market,
    ]) => {
      return {
        id: Number(val.toHuman()),
        ...(market.toHuman() as any),
      }
    },
  )

  const offset = query.offset ?? 0
  const limit = offset + (query.limit ?? list.length)

  return list.slice(offset, limit) as any
}

const indexerList = async (
  context: IndexerContext,
  query: ListQuery<IndexerContext>,
): Promise<MarketList<IndexerContext>> => {
  return (await context.indexer.markets(query)).markets
}
