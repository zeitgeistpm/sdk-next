import { pfunc } from '@zeitgeistpm/utility/dist/pfunc'
import { Context, isRpcContext } from '../../context/types'
import { MetadataStorage } from '../../meta'
import { saturatedPoolsIndex } from './functions/saturatedPoolsIndex/index'
import { getPool, observePool$ } from './functions/getPool'
import { listPools } from './functions/listPools'
import { observePoolPrices$, poolPrices } from './functions/poolPrices'
import { PoolGetQuery, PoolPricesQuery, Swaps } from './types'

export * from './types'

/**
 * Create top level enriched zeitgeist Swaps model.
 *
 * @generic C - Context
 * @param ctx C
 * @returns Swaps<C>
 */
export const model = <C extends Context<MS>, MS extends MetadataStorage>(
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
