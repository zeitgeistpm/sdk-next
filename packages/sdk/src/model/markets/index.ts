import { pfunc } from '@zeitgeistpm/utility/dist/pfunc'
import * as AE from '@zeitgeistpm/utility/dist/aeither'
import { ChainTime } from '@zeitgeistpm/utility/dist/time'
import { Context, isRpcContext, RpcContext } from '../../context'
import { MetadataStorage } from '../../meta'
import { create, transaction } from './functions/create'
import { get, observeMarket$ } from './functions/get'
import { MarketGetQuery } from './functions/get/types'
import { list } from './functions/list'
import { getStage } from './functions/getStage'
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
      ? (params: CreateMarketParams<typeof ctx, MS>) => create(ctx, params)
      : undefined) as unknown as Markets<typeof ctx, MS>['create'],

    getStage: (isRpcContext<MS>(ctx)
      ? async (market: Market<Context>, time?: ChainTime): Promise<MarketStage> => {
          return getStage(ctx, market, time)
        }
      : undefined) as Markets<typeof ctx, MS>['getStage'],
  }

  return markets
}
