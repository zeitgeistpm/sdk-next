import { HistoricalAssetOrderByInput } from '@zeitgeistpm/indexer'
import { project, range, zip } from '@zeitgeistpm/utility/dist/array'
import { BigNumber } from 'bignumber.js'
import ms from 'ms'
import { Observable } from 'rxjs'
import {
  Context,
  IndexerContext,
  isFullContext,
  isIndexerContext,
  RpcContext,
} from '../../../../context'
import { getIndexOf, IOAssetId } from '../../../../primitives/assetid'
import { asBlock, asBlocks, BlockNumber, isBlocks, now } from '../../../time'
import type {
  AssetPriceAtBlock,
  PoolAssetPricesAtBlock,
  PoolPrices,
  PoolPricesQuery,
  PoolPricesStreamQuery,
} from './types'

/**
 * Fetch poolprices for a cetain timespan. Will prefer indexer but use rpc if indexer isnt available.
 *
 * @generic C extends Context
 * @param context C
 * @param query PoolPricesQuery
 * @returns Promise<PoolPrices>
 */
export const poolPrices = async <C extends Context>(
  context: C,
  query: PoolPricesQuery,
): Promise<PoolPrices> => {
  const data =
    isFullContext(context) || isIndexerContext(context)
      ? await indexerPoolPrices(context, query)
      : await rpcPoolPrices(context, query)
  return data
}

/**
 * Fetch poolprices for a cetain timespan from rpc.
 *
 * @private
 * @param context RpcContext
 * @param query PoolPricesQuery
 * @returns Promise<PoolPrices>
 */
const rpcPoolPrices = async <C extends RpcContext>(
  ctx: C,
  query: PoolPricesQuery,
): Promise<PoolPrices> => {
  const [time, pool, { start, end }] = await Promise.all([
    now(ctx),
    ctx.api.query.swaps.pools(query.pool).then(o => o.unwrap()),
    asBlocks(await now(ctx), query.timespan),
  ])

  const ztg = { Ztg: null }

  let blocks = range(start, end)

  if (query.resolution) {
    const step = ms(query.resolution) / time.period
    blocks = project(blocks, step)
  }

  const assets = pool.assets.toArray().slice(0, -1)

  const prices = await Promise.all(
    assets.map(async asset => {
      const prices = await ctx.api.rpc.swaps.getSpotPrices(query.pool, ztg, asset, blocks)
      return zip(
        blocks,
        prices.map(price => new BigNumber(price.toString())),
      ) as PoolAssetPricesAtBlock
    }),
  )

  return prices
}

/**
 * Fetch poolprices for a cetain timespan from indexer.
 *
 * @private
 * @param context IndexerContext
 * @param query PoolPricesQuery
 * @returns Promise<PoolPrices>
 */
const indexerPoolPrices = async (
  context: IndexerContext,
  query: PoolPricesQuery,
): Promise<PoolPrices> => {
  const { assets } = await context.indexer.assets({
    where: {
      poolId_eq: query.pool,
    },
  })

  const { historicalAssets } = await context.indexer.historicalAssets({
    order: [HistoricalAssetOrderByInput.BlockNumberAsc],
    where: {
      assetId_in: assets.map(id => id.assetId),
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

  let prices: PoolPrices = []

  for (const record of historicalAssets) {
    if (!record.newPrice) continue

    const assetId = JSON.parse(record.assetId)

    if (!IOAssetId.is(assetId)) {
      console.warn('found wrongly formated asset id', assetId)
      continue
    }

    const index = getIndexOf(assetId)

    if (index === null) {
      continue
    }

    prices[index] = [
      ...(prices[index] || []),
      [record.blockNumber as BlockNumber, new BigNumber(record.newPrice * 10 ** 10)],
    ]
  }

  return prices
}

/**
 * Will stream prices for a given pool tailed after a block or date.
 * Will emit the price at each block in the stream as dictated by the resolution passed.
 * When it reaches the end it starts to listen for new blocks and emits an item for every block.
 *
 * @param ctx RpcContext
 * @param query PoolPricesStreamQuery
 * @returns Observable<PoolAssetPricesAtBlock>
 */
export const observePoolPrices$ = <C extends RpcContext>(
  ctx: C,
  query: PoolPricesStreamQuery,
): Observable<PoolAssetPricesAtBlock> => {
  return new Observable(sub => {
    const ztg = { Ztg: null }

    const unsub = Promise.all([
      ctx.api.query.swaps.pools(query.pool).then(o => o.unwrap()),
      now(ctx),
    ]).then(async ([pool, now]) => {
      const assets = pool.assets.toArray().slice(0, -1)

      if (query.from) {
        const head = await rpcPoolPrices(ctx, {
          pool: query.pool,
          resolution: query.resolution,
          timespan: {
            start: asBlock(now, query.from),
            end: now.block,
          },
        })

        head[0].forEach((_, index) => sub.next(head.map(prices => prices[index])))
      }

      return ctx.api.rpc.chain.subscribeFinalizedHeads(async header => {
        const block = header.number.toNumber()
        const prices: PoolAssetPricesAtBlock = await Promise.all(
          assets.map(async asset => {
            const [price] = await ctx.api.rpc.swaps.getSpotPrices(
              query.pool,
              query.assetIn ?? { Ztg: null },
              asset,
              [block],
            )
            return [block, new BigNumber(price.toString())] as AssetPriceAtBlock
          }),
        )
        sub.next(prices)
      })
    })
    return () => {
      unsub.then(unsub => unsub())
      sub.unsubscribe()
    }
  })
}
