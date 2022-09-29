import { MarketMetadata } from 'model/markets/meta/types'
import { EMPTY, Observable } from 'rxjs'
import {
  Context,
  IndexerContext,
  isFullContext,
  isIndexerContext,
  RpcContext,
} from '../../../../context'
import { PoolGetQuery, isMarketIdQuery } from '../../types'
import { Pool, IndexedPool, RpcPool } from '../../pool'

/**
 * Fetch a pool by its market id or pool id.
 * Query capabilities and returned data differentiates between a rpc and indexer context.
 *
 * @generic C - Context
 * @param context C - the context to query in
 * @param query PoolGetQuery
 * @returns Promise<Pool<C>>
 */
export const getPool = async <C extends Context>(
  context: C,
  query: PoolGetQuery,
): Promise<Pool<C>> => {
  const data =
    isFullContext(context) || isIndexerContext(context)
      ? await getFromIndexer(context, query)
      : await getFromRpc(context, query)

  return data as Pool<C>
}

/**
 * Concrete get function for indexer context
 * @private
 */
const getFromIndexer = async (context: IndexerContext, query: PoolGetQuery): Promise<IndexedPool> => {
  const {
    pools: [pool],
  } = await context.indexer.pools({
    where: isMarketIdQuery(query) ? { marketId_eq: query.marketId } : { poolId_eq: query.poolId },
  })
  return pool
}

/**
 * Concrete get function for rpc context
 * @private
 */
const getFromRpc = async <M = MarketMetadata>(
  context: RpcContext<M>,
  query: PoolGetQuery,
): Promise<RpcPool | null> => {
  let poolId: number

  if (isMarketIdQuery(query)) {
    const mPoolId = await context.api.query.marketCommons.marketPool(query.marketId)
    if (mPoolId.isNone) return null
    poolId = mPoolId.unwrap().toNumber()
  } else {
    poolId = query.poolId
  }

  const mPool = await context.api.query.swaps.pools(poolId)

  if (mPool.isNone) return null

  let pool = mPool.unwrap() as RpcPool
  pool.poolId = context.api.createType('u128', poolId)

  return pool
}

/**
 * Fetch pool and stream changes from rpc.
 *
 * @param context RpcContext
 * @param query PoolGetQuery
 * @returns Observable<RpcPool> | typeof EMPTY
 */
export const getPool$ = (
  context: RpcContext,
  query: PoolGetQuery,
): Observable<RpcPool> | typeof EMPTY => {
  return new Observable(subscription => {
    getFromRpc(context, query).then(pool => {
      if (!pool) return subscription.complete()
      subscription.next(pool)

      const poolId = context.api.createType('u128', pool.poolId)
      const unsub = context.api.query.swaps.pools(pool.poolId, pool => {
        if (pool.isNone) return subscription.complete()
        let rpcPool = pool.unwrap() as RpcPool
        rpcPool.poolId = poolId
        subscription.next(rpcPool)
      })

      return () => {
        subscription.complete()
        unsub.then(unsub => unsub())
      }
    })
  })
}
