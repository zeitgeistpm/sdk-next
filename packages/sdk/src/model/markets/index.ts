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
export const markets = <C extends Context<M>, M extends MetadataStorage>(ctx: C): Markets<C, M> => {
  let base: MarketsShared<C, M> = {
    list: (query?: MarketsListQuery<C, M>) => list(ctx, query),
    get: (query: MarketGetQuery) => get(ctx, query),
  }

  const rpc: MarketsRpc<RpcContext<M>, M> | null = isRpcContext(ctx)
    ? {
        create: <P extends CreateMarketParams<M>>(params: P) => create(ctx, params),
        get: pfunctor((query: MarketGetQuery) => get<RpcContext<M>, M>(ctx, query), {
          $: (query: MarketGetQuery) => get$<M>(ctx, query),
        }),
      }
    : null

  return {
    ...base,
    ...rpc,
  } as Markets<C, M>
}
