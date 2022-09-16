import {
  RpcContext,
  Context,
  IndexerContext,
  isFullContext,
  isIndexerContext,
} from '../../../../context'
import { PoolList, PoolsListQuery, RpcPool } from '../../types'

/**
 * Query for a list of markets.
 * Query capabilities and returned data differentiates between a rpc and indexer context.
 *
 * @generic C - Context
 * @param context C - the context to query inb
 * @param query ListQuery<C>
 * @returns Promise<MarketList<C>>
 */
export const listPools = async <C extends Context>(
  context: C,
  query: PoolsListQuery<C>,
): Promise<PoolList<C>> => {
  const data =
    isFullContext(context) || isIndexerContext(context)
      ? await indexerList(context, query)
      : await rpcList(context, query)

  return data as PoolList<C>
}

/**
 * Concrete listing function for indexer context
 * @private
 */
const indexerList = async (
  context: IndexerContext,
  query: PoolsListQuery<IndexerContext>,
): Promise<PoolList<IndexerContext>> => {
  return (await context.indexer.pools(query)).pools
}

/**
 * Concrete listing function for rpc context
 * @private
 */
const rpcList = async <C extends RpcContext>(
  { api }: RpcContext,
  query: PoolsListQuery<RpcContext>,
): Promise<PoolList<C>> => {
  const entries = await api.query.swaps.pools.entries()

  const list = entries.map(
    ([
      {
        args: [index],
      },
      pool,
    ]) => {
      const poolId = Number(index.toHuman())
      const rpcPool: RpcPool = [poolId, pool.unwrap()]
      return rpcPool
    },
  )

  const offset = query.offset ?? 0
  const limit = offset + (query.limit ?? list.length)

  return list.slice(offset, limit) as any
}
