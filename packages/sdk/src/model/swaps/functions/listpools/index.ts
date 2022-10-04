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
import { MetadataStorage } from '../../../../meta'

/**
 * Query for a list of pools.
 * Query capabilities and returned data differentiates between a rpc and indexer context.
 *
 * @generic C - Context
 * @param context C - the context to query in
 * @param query ListQuery<C>
 * @returns Promise<PoolList<C>>
 */
export const listPools = async <C extends Context<MS>, MS extends MetadataStorage<any, any>>(
  context: C,
  query: PoolsListQuery<C, MS>,
): Promise<PoolList<C, MS>> => {
  const data =
    isFullContext(context) || isIndexerContext(context)
      ? await listFromIndexer(context, query)
      : await listFromRpc(context, query)

  return data as PoolList<C, MS>
}

/**
 * Concrete listing function for indexer context
 * @private
 */
const listFromIndexer = async <MS extends MetadataStorage<any, any>>(
  context: IndexerContext,
  query: PoolsListQuery<IndexerContext, MS>,
): Promise<PoolList<IndexerContext, MS>> => {
  return (await context.indexer.pools(query)).pools
}

/**
 * Concrete listing function for rpc context
 * @private
 */
const listFromRpc = async <C extends RpcContext<MS>, MS extends MetadataStorage<any, any>>(
  { api }: RpcContext<MS>,
  query?: PoolsListQuery<RpcContext<MS>, MS>,
): Promise<PoolList<C, MS>> => {
  const entries = isPaginated(query)
    ? await api.query.swaps.pools.entriesPaged({
        args: [],
        pageSize: query.limit,
        startKey: `${query.offset}`,
      })
    : await api.query.swaps.pools.entries()

  const list: RpcPoolList<MS> = entries.map(
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

  return list as PoolList<C, MS>
}
