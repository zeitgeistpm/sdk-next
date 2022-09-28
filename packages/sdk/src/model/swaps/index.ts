import { Context, isRpcContext, RpcContext } from '../../context'
import { listPools } from './functions/listpools'
import { PoolsListQuery, Swaps, SwapsRpc, SwapsShared } from './types'

/**
 * Create top level enriched zeitgeist Swaps model.
 *
 * @generic C - Context
 * @param context C
 * @returns Swaps<C>
 */
export const swaps = <C extends Context>(context: C): Swaps<C> => {
  let base: SwapsShared<C> = {
    listPools: (query: PoolsListQuery<C>) => listPools(context, query),
  }

  const rpc: SwapsRpc<RpcContext> | null = isRpcContext(context) ? {} : null

  return {
    ...base,
    ...rpc,
  } as Swaps<C>
}
