import { pfunctor } from '@zeitgeistpm/utility/dist/pfunctor'
import { Context, isRpcContext, RpcContext } from '../../context'
import { create } from './functions/create'
import { get, get$ } from './functions/get'
import { MarketGetQuery } from './functions/get/types'
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
export const markets = <C extends Context>(ctx: C): Markets<C> => {
  let base: MarketsShared<C> = {
    list: (query?: MarketsListQuery<C>) => list(ctx, query),
    get: (query: MarketGetQuery) => get(ctx, query),
  }

  const rpc: MarketsRpc<RpcContext> | null = isRpcContext(ctx)
    ? {
        create: <P extends CreateMarketParams>(params: P) => create(ctx, params),
        get: pfunctor((query: MarketGetQuery) => get<RpcContext>(ctx, query), {
          $: (query: MarketGetQuery) => get$(ctx, query),
        }),
      }
    : null

  return {
    ...base,
    ...rpc,
  } as Markets<C>
}
