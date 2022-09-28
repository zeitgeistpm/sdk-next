import { range, zip } from '@zeitgeistpm/utility/dist/array'
import {
  Context,
  IndexerContext,
  isFullContext,
  isIndexerContext,
  RpcContext,
} from '../../../../context'
import { asBlocks, isBlocks } from '../../../time'
import type {
  IndexedPoolPrices,
  PoolPrices,
  PoolPricesQuery,
  RpcPoolPrice,
  RpcPoolPrices,
} from './types'

export const poolPrices = async <C extends Context>(
  context: C,
  query: PoolPricesQuery<C>,
): Promise<PoolPrices<C>> => {
  const data =
    isFullContext(context) || isIndexerContext(context)
      ? await indexer(context, query)
      : await rpc(context, query)
  return data as PoolPrices<C>
}

const rpc = async (ctx: RpcContext, query: PoolPricesQuery<RpcContext>): Promise<RpcPoolPrices> => {
  const [pool, { start, end }] = await Promise.all([
    ctx.api.query.swaps.pools(query.pool).then(o => o.unwrap()),
    asBlocks(ctx, query.timespan),
  ])

  const ztg = { Ztg: null }

  const blocks = range(start, end)
  const assets = pool.assets.toArray().slice(0, -1)

  const prices = await Promise.all(
    assets.map(async asset => {
      const prices = await ctx.api.rpc.swaps.getSpotPrices(query.pool, ztg, asset, blocks)
      return [asset, zip(blocks, prices.toArray())] as RpcPoolPrice
    }),
  )

  return prices
}

const indexer = async (
  context: IndexerContext,
  query: PoolPricesQuery<IndexerContext>,
): Promise<IndexedPoolPrices> => {
  const {
    pools: [pool],
  } = await context.indexer.pools({
    where: {
      poolId_eq: query.pool,
    },
  })

  const { historicalAssets } = await context.indexer.historicalAssets({
    where: {
      accountId_eq: pool.accountId,
      ...(isBlocks(query.timespan)
        ? {
            blockNumber_gte: query.timespan.start,
            blockNumber_lte: query.timespan.end,
          }
        : {
            timestamp_gte: query.timespan.start,
            timestamp_lte: query.timespan.end,
          }),
    },
  })

  return historicalAssets
}
