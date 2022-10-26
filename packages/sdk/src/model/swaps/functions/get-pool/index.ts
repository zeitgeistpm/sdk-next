import { Observable, of } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import {
  Context,
  IndexerContext,
  isFullContext,
  isIndexerContext,
  RpcContext,
} from '../../../../context'
import { MetadataStorage } from '../../../../meta'
import { IndexedPool, Pool, RpcPool, rpcPool } from '../../pool'
import { isMarketIdQuery, PoolGetQuery } from '../../types'

/**
 * Fetch a pool by its market id or pool id.
 * Query capabilities and returned data differentiates between a rpc and indexer context.
 *
 * @generic C - Context
 * @param context C - the context to query in
 * @param query PoolGetQuery
 * @returns Promise<Pool<C>>
 */
export const getPool = async <C extends Context<MS>, MS extends MetadataStorage>(
  context: C,
  query: PoolGetQuery,
): Promise<Pool<C, MS> | null> => {
  const data =
    isFullContext<MS>(context) || isIndexerContext<MS>(context)
      ? await getFromIndexer(context, query)
      : await getFromRpc(context, query)

  return data as Pool<C, MS>
}

/**
 * Concrete get function for indexer context
 * @private
 */
const getFromIndexer = async <C extends Context<MS>, MS extends MetadataStorage>(
  context: IndexerContext,
  query: PoolGetQuery,
): Promise<IndexedPool<C, MS> | null> => {
  const {
    pools: [pool],
  } = await context.indexer.pools({
    where: isMarketIdQuery(query)
      ? { marketId_eq: query.marketId }
      : { poolId_eq: query.poolId },
  })
  return pool as IndexedPool<C, MS> | null
}

/**
 * Concrete get function for rpc context
 * @private
 */
const getFromRpc = async <C extends RpcContext<MS>, MS extends MetadataStorage>(
  context: C,
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

  const marketPool = await context.api.query.swaps.pools(poolId)

  if (marketPool.isNone) return null
  return rpcPool(context, poolId, marketPool.unwrap())
}

/**
 * Fetch pool and stream changes from rpc.
 *
 * @param context RpcContext
 * @param query PoolGetQuery
 * @returns Observable<Pool<C, MS>>
 */
export const observePool$ = <C extends RpcContext<MS>, MS extends MetadataStorage>(
  context: C,
  query: PoolGetQuery,
): Observable<Pool<C, MS>> => {
  const poolId$ = isMarketIdQuery(query)
    ? observeMarketPoolId$(context, query.marketId)
    : of(query.poolId)

  return poolId$.pipe(
    switchMap(
      poolId =>
        new Observable<Pool<C, MS>>(subscription => {
          const unsub = context.api.query.swaps.pools(poolId, pool => {
            if (pool.isNone) return subscription.complete()
            subscription.next(rpcPool(context, poolId, pool.unwrap()) as Pool<C, MS>)
          })

          return () => {
            subscription.complete()
            unsub.then(unsub => unsub())
          }
        }),
    ),
  )
}

/**
 * Observe the pool id of a market. Usefull for starting to observe the pool of a market
 * at any time even before it is created.
 *
 * @param context RpcContext<MS>
 * @param marketId number
 * @returns Observable<number>
 */
export const observeMarketPoolId$ = <C extends RpcContext<MS>, MS extends MetadataStorage>(
  context: C,
  marketId: number,
) => {
  return new Observable<number>(subscription => {
    context.api.query.marketCommons.marketPool(marketId, poolId => {
      if (poolId.isSome) {
        subscription.next(poolId.unwrap().toNumber())
      }
    })
  })
}
