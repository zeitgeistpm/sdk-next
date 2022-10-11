import { pfunc } from '@zeitgeistpm/utility/dist/pfunc'
import { Context, isRpcContext } from '../../context'
import { MetadataStorage } from '../../meta'
import { create, transaction } from './functions/create'
import { get, observe$ } from './functions/get'
import { MarketGetQuery } from './functions/get/types'
import { list } from './functions/list'
import { CreateMarketParams, Markets, MarketsListQuery } from './types'

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
  const markets: Markets<C, MS> = {
    list: (query?: MarketsListQuery<C>) => list<typeof ctx, MS>(ctx, query),
    get: pfunc(
      (query: MarketGetQuery) => get<typeof ctx, MS>(ctx, query),
      (isRpcContext<MS>(ctx)
        ? {
            $: (query: MarketGetQuery) => observe$<typeof ctx, MS>(ctx, query),
          }
        : {}) as Markets<typeof ctx, MS>['get'],
    ),
    create: (isRpcContext<MS>(ctx)
      ? pfunc((params: CreateMarketParams<typeof ctx, MS>) => create<typeof ctx, MS>(ctx, params), {
          tx: (params: CreateMarketParams<typeof ctx, MS>) =>
            transaction<typeof ctx, MS>(ctx, params),
        })
      : undefined) as Markets<typeof ctx, MS>['create'],
  }

  return markets
}
