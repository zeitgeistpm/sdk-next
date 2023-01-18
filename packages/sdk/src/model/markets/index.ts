import { pfunc } from '@zeitgeistpm/utility/dist/pfunc'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { ChainTime } from '@zeitgeistpm/utility/dist/time'
import { Context, isRpcContext } from '../../context'
import { MetadataStorage } from '../../meta'
import { create, transaction } from './functions/create'
import { get, observeMarket$ } from './functions/get'
import { MarketGetQuery } from './functions/get/types'
import { list } from './functions/list'
import { getStage } from './functions/stage'
import { MarketStage } from './marketstage'
import {
  CreateMarketParams,
  Markets,
  MarketsListQuery,
  CreateMarketResult,
  Market,
} from './types'

export * from './types'

/**
 * Create top level enriched zeitgeist Markets model.
 *
 * @generic C - Context
 * @param context C
 * @returns Markets<C>
 */
export const model = <C extends Context<MS>, MS extends MetadataStorage>(
  ctx: C,
): Markets<C, MS> => {
  const markets: Markets<C, MS> = {
    list: (query?: MarketsListQuery<C>) => list(ctx, query),
    get: pfunc(
      (query: MarketGetQuery) => get<typeof ctx, MS>(ctx, query),
      (isRpcContext<MS>(ctx)
        ? {
            $: (query: MarketGetQuery) => observeMarket$<typeof ctx, MS>(ctx, query),
          }
        : {}) as Markets<typeof ctx, MS>['get'],
    ),
    create: (isRpcContext<MS>(ctx)
      ? pfunc(
          Te.from<
            CreateMarketResult<typeof ctx, MS>,
            Error,
            [params: CreateMarketParams<typeof ctx, MS>]
          >(params => create<typeof ctx, MS>(ctx, params)),
          {
            tx: (params: CreateMarketParams<typeof ctx, MS>) =>
              transaction<typeof ctx, MS>(ctx, params),
          },
        )
      : undefined) as Markets<typeof ctx, MS>['create'],

    getStage: (isRpcContext<MS>(ctx)
      ? async (market: Market<Context>, time?: ChainTime): Promise<MarketStage> => {
          return getStage(ctx, market, time)
        }
      : undefined) as Markets<typeof ctx, MS>['getStage'],
  }

  return markets
}
