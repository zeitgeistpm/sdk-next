import { pfunctor } from '@zeitgeistpm/utility/dist/pfunctor'
import { Metadata } from 'meta/types'
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
export const swaps = <C extends Context<M>, M = Metadata>(ctx: C): Swaps<C, M> => {
  let base: SwapsShared<C, M> = {
    listPools: (query: PoolsListQuery<C, M>) => listPools<C, M>(ctx, query),
    getPool: (query: PoolGetQuery) => getPool<C, M>(ctx, query),
    poolPrices: (query: PoolPricesQuery) => poolPrices<C, M>(ctx, query),
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
  } as Swaps<C, M>
}
