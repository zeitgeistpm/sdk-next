import { Context, isRpcContext, RpcContext } from '../../context'
import { poolPrices } from './functions/poolprices'
import { PoolPricesQuery } from './functions/poolprices/types'
import { Assets, AssetsShared, AssetsRpc } from './types'

export * from './types'

/**
 * Create top level enriched zeitgeist Asset model.
 *
 * @generic C - Context
 * @param context C
 * @returns Assets<C>
 */
export const assets = <C extends Context>(context: C): Assets<C> => {
  let base: AssetsShared<C> = {
    poolPrices: (query: PoolPricesQuery<C>) => poolPrices(context, query),
  }

  const rpc: AssetsRpc<RpcContext> | null = isRpcContext(context) ? {} : null

  return {
    ...base,
    ...rpc,
  } as Assets<C>
}
