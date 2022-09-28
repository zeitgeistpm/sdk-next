import { range, zip } from '@zeitgeistpm/utility/dist/array'
import {
  Context,
  IndexerContext,
  isFullContext,
  isIndexerContext,
  RpcContext,
} from '../../../../context'
import { asBlock, asBlocks, BlockNumber, isBlocks, now } from '../../../time'
import type {
  IndexedPoolPrices,
  PoolPrices,
  PoolPricesQuery,
  PoolPricesStreamQuery,
  RpcPoolPrice,
  RpcPoolPrices,
} from './types'
import { Observable, of } from 'rxjs'

export const poolPrices = async <C extends Context>(
  context: C,
  query: PoolPricesQuery,
): Promise<PoolPrices<C>> => {
  const data =
    isFullContext(context) || isIndexerContext(context)
      ? await indexer(context, query)
      : await rpc(context, query)
  return data as PoolPrices<C>
}

const rpc = async (ctx: RpcContext, query: PoolPricesQuery): Promise<RpcPoolPrices> => {
  const [pool, { start, end }] = await Promise.all([
    ctx.api.query.swaps.pools(query.pool).then(o => o.unwrap()),
    asBlocks(await now(ctx), query.timespan),
  ])

  const ztg = { Ztg: null }

  const blocks = range(start, end)
  const assets = pool.assets.toArray().slice(0, -1)

  const prices = await Promise.all(
    assets.map(async asset => {
      const prices = await ctx.api.rpc.swaps.getSpotPrices(query.pool, ztg, asset, blocks)
      return zip(blocks, prices.toArray()) as RpcPoolPrice
    }),
  )

  return prices
}

const indexer = async (
  context: IndexerContext,
  query: PoolPricesQuery,
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

export const poolPrices$ = <C extends Context>(
  context: C,
  query: PoolPricesStreamQuery,
): Observable<PoolPrices<C>> => {
  const data =
    isFullContext(context) || isIndexerContext(context)
      ? indexedPoolPrices$(context, query)
      : rpcPoolPrices$(context, query)
  return data
}

export const indexedPoolPrices$ = (
  ctx: IndexerContext,
  query: { pool: number; tail: BlockNumber | Date },
) => {
  return new Observable<any>(sub => {})
}

export const rpcPoolPrices$ = (
  ctx: RpcContext,
  query: { pool: number; tail: BlockNumber | Date },
): Observable<RpcPoolPrices> => {
  return new Observable(sub => {
    const ztg = { Ztg: null }

    Promise.all([ctx.api.query.swaps.pools(query.pool).then(o => o.unwrap()), now(ctx)])
      .then(async ([pool, now]) => ({ pool, now }))
      .then(async ({ pool, now }) => {
        const head = await rpc(ctx, {
          pool: query.pool,
          timespan: {
            start: asBlock(now, query.tail),
            end: now.block,
          },
        })

        const assets = pool.assets.toArray().slice(0, -1)
        const prices$ = of(head)

        setInterval(async () => {
          const head = await ctx.api.rpc.chain.getHeader()
          const blocks = [head.number.toNumber()]
          const prices: RpcPoolPrices = await Promise.all(
            assets.map(async asset => {
              const prices = await ctx.api.rpc.swaps.getSpotPrices(query.pool, ztg, asset, blocks)
              return zip(blocks, prices.toArray()) as RpcPoolPrice
            }),
          )
          sub.next(prices)
        }, now.period)

        prices$.subscribe(v => sub.next(v))
      })
  })
}
