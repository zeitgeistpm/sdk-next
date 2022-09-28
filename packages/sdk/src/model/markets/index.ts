import { Context, isRpcContext, RpcContext } from '../../context'
import { create } from './functions/create'
import { get } from './functions/get'
import { MarketQuery } from './functions/get/types'
import { list } from './functions/list'
import { CreateMarketParams, Markets, MarketsListQuery, MarketsRpc, MarketsShared } from './types'

export * from './types'

/**
 * Create top level enriched zeitgeist Markets model.
 *
 * @generic C - Context
 * @param context C
 * @returns Markets<C>
 */
export const markets = <C extends Context>(context: C): Markets<C> => {
  let base: MarketsShared<C> = {
    list: (query?: MarketsListQuery<C>) => list(context, query),
    get: (query: MarketQuery) => get(context, query),
  }

  const rpc: MarketsRpc<RpcContext> | null = isRpcContext(context)
    ? {
        create: <P extends CreateMarketParams>(params: P) => create(context, params),
      }
    : null

  return {
    ...base,
    ...rpc,
  } as Markets<C>
}
