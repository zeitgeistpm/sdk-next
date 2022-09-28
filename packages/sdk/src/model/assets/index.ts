import { functor } from '@zeitgeistpm/utility/dist/functor'
import { Context, isRpcContext, RpcContext } from '../../context'
import { poolPrices, poolPrices$, rpcPoolPrices$ } from './functions/poolprices'
import { PoolPricesQuery, PoolPricesStreamQuery } from './functions/poolprices/types'
import { Assets, AssetsShared, AssetsRpc } from './types'

export * from './types'

/**
 * Create top level enriched zeitgeist Asset model.
 *
 * @generic C - Context
 * @param context C
 * @returns Assets<C>
 */
export const assets = <C extends Context>(ctx: C): Assets<C> => {
  let base: AssetsShared<C> = {
    poolPrices: (query: PoolPricesQuery<C>) => poolPrices(ctx, query),
  }

  const rpc: AssetsRpc<RpcContext> | null = isRpcContext(ctx)
    ? {
        poolPrices: functor((query: PoolPricesQuery<RpcContext>) => poolPrices(ctx, query), {
          $: (query: PoolPricesStreamQuery) => poolPrices$<RpcContext>(ctx, query),
        }),
      }
    : null

  return {
    ...base,
    ...rpc,
  } as Assets<C>
}
