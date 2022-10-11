import { pfunc } from '@zeitgeistpm/utility/dist/pfunc'
import { MetadataStorage } from '../../meta'
import { Context, isRpcContext, RpcContext } from '../../context'
import { create, transaction } from './functions/create'
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

  if (isRpcContext<MS>(ctx)) {
    const rpc: MarketsRpc<typeof ctx, MS> = {
      ...base,
      create: pfunc((params: CreateMarketParams<typeof ctx, MS>) => create(ctx, params), {
        tx: (params: CreateMarketParams<typeof ctx, MS>) => transaction(ctx, params),
      }),
      get: pfunc((query: MarketGetQuery) => get<typeof ctx, MS>(ctx, query), {
        $: (query: MarketGetQuery) => get$<typeof ctx, MS>(ctx, query),
      }),
    }
    return rpc as Markets<C, MS>
  }

  return base as Markets<C, MS>
}
