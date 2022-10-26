import { pfunc } from '@zeitgeistpm/utility/dist/pfunc'
import { Context, isRpcContext } from '../../context/types'
import { MetadataStorage } from '../../meta'
import { saturatedPoolsIndex } from './functions/saturated-pool-index/index'
import { getPool, observePool$ } from './functions/get-pool'
import { listPools } from './functions/list-pools'
import { observePoolPrices$, poolPrices } from './functions/pool-prices'
import { PoolGetQuery, PoolPricesQuery, Swaps } from './types'

export * from './types'

/**
 * Create top level enriched zeitgeist Swaps model.
 *
 * @generic C - Context
 * @param ctx C
 * @returns Swaps<C>
 */
export const swaps = <C extends Context<MS>, MS extends MetadataStorage>(
  ctx: C,
): Swaps<C, MS> => {
  const swaps: Swaps<C, MS> = {
    listPools: query => listPools<typeof ctx, MS>(ctx, query),

    getPool: pfunc(
      (query: PoolGetQuery) => getPool<typeof ctx, MS>(ctx, query),
      (isRpcContext<MS>(ctx)
        ? {
            $: query => observePool$<typeof ctx, MS>(ctx, query),
          }
        : {}) as Swaps<typeof ctx, MS>['getPool'],
    ),

    poolPrices: pfunc(
      (query: PoolPricesQuery) => poolPrices<typeof ctx>(ctx, query),
      (isRpcContext<MS>(ctx)
        ? {
            $: query => observePoolPrices$(ctx, query),
          }
        : {}) as Swaps<typeof ctx, MS>['poolPrices'],
    ),

    saturatedPoolsIndex: pools => saturatedPoolsIndex<typeof ctx, MS>(ctx, pools),
  }

  return swaps
}
