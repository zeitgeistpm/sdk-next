import { pfunctor } from '@zeitgeistpm/utility/dist/pfunctor'
import { MetadataStorage } from '../../meta'
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

  const rpc = isRpcContext(ctx)
    ? ({
        create: (params: CreateMarketParams<typeof ctx>) => create(ctx, params),
        get: pfunctor((query: MarketGetQuery) => get<typeof ctx>(ctx, query), {
          $: (query: MarketGetQuery) => get$<typeof ctx>(ctx, query),
        }),
      } as MarketsRpc<typeof ctx>)
    : {}

  return {
    ...base,
    ...rpc,
  } as Markets<C>
}
