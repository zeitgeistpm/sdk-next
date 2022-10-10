import { pfunctor } from '@zeitgeistpm/utility/dist/pfunctor'
import { MetadataStorage } from '../../meta'
import { Context, isRpcContext, RpcContext } from '../../context'
import { create } from './functions/create'
import { get, get$ } from './functions/get'
import { MarketGetQuery } from './functions/get/types'
import { list } from './functions/list'
import { CreateMarketParams, Markets, MarketsIndexed, MarketsListQuery, MarketsRpc } from './types'

export * from './types'

/**
 * Create top level enriched zeitgeist Markets model.
 *
 * @generic C - Context
 * @param context C
 * @returns Markets<C>
 */
export const markets = <C extends Context<MS>, MS extends MetadataStorage>(
  ctx: C,
): Markets<C, MS> => {
  let base: MarketsIndexed<C, MS> = {
    list: (query?: MarketsListQuery<C>) => list<typeof ctx, MS>(ctx, query),
    get: (query: MarketGetQuery) => get<typeof ctx, MS>(ctx, query),
  }

  const rpc = isRpcContext<MS>(ctx)
    ? {
        create: (params: CreateMarketParams<typeof ctx>) => create(ctx, params),
        get: pfunctor((query: MarketGetQuery) => get<typeof ctx, MS>(ctx, query), {
          $: (query: MarketGetQuery) => get$<typeof ctx, MS>(ctx, query),
        }),
      }
    : {}

  return {
    ...base,
    ...rpc,
  } as Markets<C, MS>
}
