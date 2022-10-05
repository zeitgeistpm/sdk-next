import { pfunctor } from '@zeitgeistpm/utility/dist/pfunctor'
import { MetadataStorage } from '../../meta'
import { Context, isRpcContext, RpcContext } from '../../context'
import { getPool, getPool$ } from './functions/getpool'
import { listPools } from './functions/listpools'
import { poolPrices, rpcPoolPrices$ } from './functions/poolprices'
import {
  PoolGetQuery,
  PoolPricesQuery,
  PoolPricesStreamQuery,
  PoolsListQuery,
  Swaps,
  SwapsRpc,
  SwapsShared,
} from './types'

export * from './types'

/**
 * Create top level enriched zeitgeist Swaps model.
 *
 * @generic C - Context
 * @param ctx C
 * @returns Swaps<C>
 */
export const swaps = <C extends Context>(ctx: C): Swaps<C> => {
  let base: SwapsShared<C> = {
    listPools: (query: PoolsListQuery<C>) => listPools(ctx, query),
    getPool: (query: PoolGetQuery) => getPool(ctx, query),
    poolPrices: (query: PoolPricesQuery) => poolPrices(ctx, query),
  }

  const rpc = isRpcContext(ctx)
    ? {
        getPool: pfunctor((query: PoolGetQuery) => getPool<typeof ctx>(ctx, query), {
          $: (query: PoolGetQuery) => getPool$(ctx, query),
        }),
        poolPrices: pfunctor((query: PoolPricesQuery) => poolPrices<typeof ctx>(ctx, query), {
          $: (query: PoolPricesStreamQuery) => rpcPoolPrices$(ctx, query),
        }),
      }
    : {}

  return {
    ...base,
    ...rpc,
  } as Swaps<C>
}
