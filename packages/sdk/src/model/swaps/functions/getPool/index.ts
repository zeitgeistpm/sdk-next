import { isNumber, isString } from '@polkadot/util'
import { InputMaybe, PoolWhereInput } from '@zeitgeistpm/indexer'
import * as O from '@zeitgeistpm/utility/dist/option'
import { Observable, of } from 'rxjs'
import { switchMap } from 'rxjs/operators'
import {
  Context,
  IndexerContext,
  isIndexerContext,
  isRpcContext,
  RpcContext,
} from '../../../../context'
import { MetadataStorage } from '../../../../meta'
import { attachPoolMethods, attachPoolRcpOnlyMethods, Pool, rpcPool } from '../../pool'
import { isMarketIdQuery, isPoolIdQuery, PoolGetQuery } from '../../types'

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
): Promise<O.IOption<Pool<C, MS>>> => {
  let pool: O.IOption<Pool<C, MS>> = O.option(O.none())

  if (isIndexerContext<MS>(context)) {
    pool = await getFromIndexer(context, query)
  } else if (isRpcContext<MS>(context)) {
    pool = await getFromRpc<typeof context, MS>(context, query)
  }

  return pool
    .map(pool => {
      if (isRpcContext(context)) {
        attachPoolRcpOnlyMethods(context, pool)
      }
      return pool
    })
    .map(pool => attachPoolMethods(context, pool))

  throw new Error('unrechable code detected.')
}

/**
 * Concrete get function for indexer context
 * @private
 */
const getFromIndexer = async <C extends Context<MS>, MS extends MetadataStorage>(
  context: IndexerContext,
  query: PoolGetQuery,
): Promise<O.IOption<Pool<C, MS>>> => {
  const where: InputMaybe<PoolWhereInput> = isMarketIdQuery(query)
    ? { marketId_eq: query.marketId }
    : isPoolIdQuery(query)
    ? { poolId_eq: query.poolId }
    : { poolId_eq: isNumber(query) ? query : Number(query) }

  const {
    pools: [pool],
  } = await context.indexer.pools({
    where,
  })
  if (pool) {
    return O.option(O.some(pool as Pool<C, MS>))
  }
  return O.option(O.none())
}

/**
 * Concrete get function for rpc context
 * @private
 */
const getFromRpc = async <C extends RpcContext<MS>, MS extends MetadataStorage>(
  context: C,
  query: PoolGetQuery,
): Promise<O.IOption<Pool<C, MS>>> => {
  let poolId: number

  if (isMarketIdQuery(query)) {
    const mPoolId = await context.api.query.marketCommons.marketPool(query.marketId)
    if (mPoolId.isNone) O.option(O.none())
    poolId = mPoolId.unwrap().toNumber()
  } else {
    poolId = isNumber(query) ? query : Number(query)
  }

  const marketPool = await context.api.query.swaps.pools(poolId)

  if (marketPool.isNone) O.option(O.none())

  return O.option(O.some(rpcPool(context, poolId, marketPool.unwrap()) as Pool<C, MS>))
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
    : of(isNumber(query) ? query : Number(query))

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
