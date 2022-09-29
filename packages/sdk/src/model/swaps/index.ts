import { Context, isRpcContext, RpcContext } from '../../context'
import { listPools } from './functions/listpools'
import { getPool, getPool$ } from './functions/getpool'
import { PoolsListQuery, Swaps, SwapsRpc, SwapsShared, PoolGetQuery } from './types'
import { functor } from '@zeitgeistpm/utility/dist/functor'

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
  }

  const rpc: SwapsRpc<RpcContext> | null = isRpcContext(ctx)
    ? {
        getPool: functor((query: PoolGetQuery) => getPool<RpcContext>(ctx, query), {
          $: (query: PoolGetQuery) => getPool$(ctx, query),
        }),
      }
    : null

  return {
    ...base,
    ...rpc,
  } as Swaps<C>
}
