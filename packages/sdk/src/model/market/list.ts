import {
  ApiContext,
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

const rpcList = async <C extends ApiContext>(
  { api }: ApiContext,
  query: ListQuery<ApiContext>,
): Promise<MarketList<C>> => {
  const data = await api.query.marketCommons.markets()
  return (data.toHuman() as any).slice(query.offset, query.limit)
}

const indexerList = async (
  context: IndexerContext,
  query: ListQuery<IndexerContext>,
): Promise<MarketList<IndexerContext>> => {
  return (await context.indexer.markets(query)).markets
}
