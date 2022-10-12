import { pfunc } from '@zeitgeistpm/utility/dist/pfunc'
import { Context, isRpcContext } from '../../context'
import { MetadataStorage } from '../../meta'
import { getPool, observePool$ } from './functions/getpool'
import { listPools } from './functions/listpools'
import { poolPrices, observePoolPrices$ } from './functions/poolprices'
import { PoolGetQuery, PoolPricesQuery, PoolPricesStreamQuery, PoolsListQuery, Swaps } from './types'

export * from './types'

/**
 * Create top level enriched zeitgeist Swaps model.
 *
 * @generic C - Context
 * @param ctx C
 * @returns Swaps<C>
 */
export const swaps = <C extends Context<MS>, MS extends MetadataStorage>(ctx: C): Swaps<C, MS> => {
  const swaps: Swaps<C, MS> = {
    listPools: (query: PoolsListQuery<typeof ctx, MS>) => listPools<typeof ctx, MS>(ctx, query),
    getPool: pfunc(
      (query: PoolGetQuery) => getPool<typeof ctx, MS>(ctx, query),
      (isRpcContext<MS>(ctx)
        ? {
            $: (query: PoolGetQuery) => observePool$<typeof ctx, MS>(ctx, query),
          }
        : {}) as Swaps<typeof ctx, MS>['getPool'],
    ),
    poolPrices: pfunc(
      (query: PoolPricesQuery) => poolPrices<typeof ctx>(ctx, query),
      (isRpcContext<MS>(ctx)
        ? {
            $: (query: PoolPricesStreamQuery) => observePoolPrices$(ctx, query),
          }
        : {}) as Swaps<typeof ctx, MS>['poolPrices'],
    ),
  }

  return swaps
}
