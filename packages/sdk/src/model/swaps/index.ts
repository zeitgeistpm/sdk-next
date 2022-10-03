import { pfunctor } from '@zeitgeistpm/utility/dist/pfunctor'
import { MetadataStorage } from 'meta'
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
export const swaps = <C extends Context<M>, M extends MetadataStorage>(ctx: C): Swaps<C, M> => {
  let base: SwapsShared<C, M> = {
    listPools: (query: PoolsListQuery<C, M>) => listPools(ctx, query),
    getPool: (query: PoolGetQuery) => getPool(ctx, query),
    poolPrices: (query: PoolPricesQuery) => poolPrices(ctx, query),
  }

  const rpc: SwapsRpc<RpcContext<M>, M> | null = isRpcContext(ctx)
    ? {
        getPool: pfunctor((query: PoolGetQuery) => getPool<RpcContext<M>, M>(ctx, query), {
          $: (query: PoolGetQuery) => getPool$(ctx, query),
        }),
        poolPrices: pfunctor((query: PoolPricesQuery) => poolPrices<RpcContext<M>, M>(ctx, query), {
          $: (query: PoolPricesStreamQuery) => rpcPoolPrices$(ctx, query),
        }),
      }
    : null

  return {
    ...base,
    ...rpc,
  } as Swaps<C, M>
}
