import { pfunc } from '@zeitgeistpm/utility/dist/pfunc'
import { ChainTime } from '@zeitgeistpm/utility/dist/time'
import { Context, isFullContext, isRpcContext } from '../../context'
import { MetadataStorage } from '../../meta'
import { calculateFees, create, transaction } from './functions/create'
import { get, observeMarket$ } from './functions/get'
import { MarketGetQuery } from './functions/get/types'
import { getStage } from './functions/getStage'
import { list } from './functions/list'
import { MarketStage } from './marketstage'
import { CreateMarketParams, Market, Markets, MarketsListQuery } from './types'
import { ForeignAssetId, MarketId } from '../../primitives'
import { verifyMetadata } from './functions/verify-metadata'

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
          (params: CreateMarketParams<typeof ctx, MS>, feePayingAsset?: ForeignAssetId) =>
            create(ctx, params, feePayingAsset),
          {
            tx: (params: CreateMarketParams<typeof ctx, MS>) => transaction(ctx, params),
            calculateFees: (params: CreateMarketParams<typeof ctx, MS>) =>
              calculateFees(ctx, params),
          },
        )
      : undefined) as unknown as Markets<typeof ctx, MS>['create'],

    verifyMetadata: (isFullContext<MS>(ctx)
      ? (marketId: MarketId) => verifyMetadata(ctx, marketId)
      : undefined) as unknown as Markets<typeof ctx, MS>['verifyMetadata'],

    getStage: (isRpcContext<MS>(ctx)
      ? async (market: Market<Context>, time?: ChainTime): Promise<MarketStage> => {
          return getStage(ctx, market, time)
        }
      : undefined) as Markets<typeof ctx, MS>['getStage'],
  }

  return markets
}
