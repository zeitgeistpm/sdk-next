import { pfunctor } from '@zeitgeistpm/utility/dist/pfunctor'
import { MetadataStorage } from 'meta'
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
export const markets = <C extends Context<MS>, MS extends MetadataStorage<any, any>>(
  ctx: C,
): Markets<C, MS> => {
  let base: MarketsShared<C, MS> = {
    list: (query?: MarketsListQuery<C, MS>) => list(ctx, query),
    get: (query: MarketGetQuery) => get(ctx, query),
  }

  const rpc: MarketsRpc<RpcContext<MS>, MS> | null = isRpcContext(ctx)
    ? {
        create: (params: CreateMarketParams<MS>) => create(ctx, params),
        get: pfunctor((query: MarketGetQuery) => get<RpcContext<MS>, MS>(ctx, query), {
          $: (query: MarketGetQuery) => get$<MS>(ctx, query),
        }),
      }
    : null

  return {
    ...base,
    ...rpc,
  } as Markets<C, MS>
}
