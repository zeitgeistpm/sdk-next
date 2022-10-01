import { pfunctor } from '@zeitgeistpm/utility/dist/pfunctor'
import { MarketMetadata } from 'model/markets/meta/types'
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
export const swaps = <C extends Context<M>, M = MarketMetadata>(ctx: C): Swaps<C, M> => {
  let base: SwapsShared<C> = {
    listPools: (query: PoolsListQuery<C>) => listPools(ctx, query),
    getPool: (query: PoolGetQuery) => getPool(ctx, query),
    poolPrices: (query: PoolPricesQuery) => poolPrices(ctx, query),
  }

  const rpc: SwapsRpc<RpcContext> | null = isRpcContext(ctx)
    ? {
        getPool: pfunctor((query: PoolGetQuery) => getPool<RpcContext>(ctx, query), {
          $: (query: PoolGetQuery) => getPool$(ctx, query),
        }),
        poolPrices: pfunctor((query: PoolPricesQuery) => poolPrices<RpcContext>(ctx, query), {
          $: (query: PoolPricesStreamQuery) => rpcPoolPrices$(ctx, query),
        }),
      }
    : null

  return {
    ...base,
    ...rpc,
  } as Swaps<C>
}
