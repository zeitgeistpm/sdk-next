import { isPaginated } from '../../../../types/query'
import { RpcContext, Context, IndexerContext, isFullContext, isIndexerContext } from '../../../../context'
import { PoolList, PoolsListQuery, RpcPool, RpcPoolList } from '../../types'

/**
 * Query for a list of pools.
 * Query capabilities and returned data differentiates between a rpc and indexer context.
 *
 * @generic C - Context
 * @param context C - the context to query in
 * @param query ListQuery<C>
 * @returns Promise<PoolList<C>>
 */
export const pools = async <C extends Context>(context: C, query: PoolsListQuery<C>): Promise<PoolList<C>> => {
  const data =
    isFullContext(context) || isIndexerContext(context)
      ? await indexer(context, query)
      : await rpc(context, query)

  return data as PoolList<C>
}

/**
 * Concrete listing function for indexer context
 * @private
 */
const indexer = async (
  context: IndexerContext,
  query: PoolsListQuery<IndexerContext>,
): Promise<PoolList<IndexerContext>> => {
  return (await context.indexer.pools(query)).pools
}

/**
 * Concrete listing function for rpc context
 * @private
 */
const rpc = async <C extends RpcContext>(
  { api }: RpcContext,
  query?: PoolsListQuery<RpcContext>,
): Promise<PoolList<C>> => {
  const entries = isPaginated(query)
    ? await api.query.swaps.pools.entriesPaged({
        args: [],
        pageSize: query.limit,
        startKey: `${query.offset}`,
      })
    : await api.query.swaps.pools.entries()

  const list: RpcPoolList = entries.map(
    ([
      {
        args: [poolId],
      },
      pool,
    ]) => {
      const rpcPool = pool.unwrap() as RpcPool
      rpcPool.poolId = poolId
      return rpcPool
    },
  )

  return list as PoolList<C>
}
