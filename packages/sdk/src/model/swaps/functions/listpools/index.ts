import {
  Context,
  IndexerContext,
  isFullContext,
  isIndexerContext,
  RpcContext,
} from '../../../../context'
import { isPaginated } from '../../../../types/query'
import { PoolList, PoolsListQuery, RpcPoolList } from '../../types'
import { RpcPool } from '../../pool'
import { Metadata } from 'meta/market'

/**
 * Query for a list of pools.
 * Query capabilities and returned data differentiates between a rpc and indexer context.
 *
 * @generic C - Context
 * @param context C - the context to query in
 * @param query ListQuery<C>
 * @returns Promise<PoolList<C>>
 */
export const listPools = async <C extends Context<M>, M = Metadata>(
  context: C,
  query: PoolsListQuery<C, M>,
): Promise<PoolList<C, M>> => {
  const data =
    isFullContext(context) || isIndexerContext(context)
      ? await listFromIndexer(context, query)
      : await listFromRpc<RpcContext<M>, M>(context, query)

  return data as PoolList<C, M>
}

/**
 * Concrete listing function for indexer context
 * @private
 */
const listFromIndexer = async (
  context: IndexerContext,
  query: PoolsListQuery<IndexerContext>,
): Promise<PoolList<IndexerContext>> => {
  return (await context.indexer.pools(query)).pools
}

/**
 * Concrete listing function for rpc context
 * @private
 */
const listFromRpc = async <C extends RpcContext<M>, M = Metadata>(
  { api }: RpcContext<M>,
  query?: PoolsListQuery<RpcContext>,
): Promise<PoolList<C, M>> => {
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
      rpcPool.poolId = poolId.toNumber()
      return rpcPool
    },
  )

  return list as PoolList<C, M>
}
