import { u128 } from '@polkadot/types'
import { ZeitgeistPrimitivesAsset } from '@polkadot/types/lookup'
import { range, zip } from '@zeitgeistpm/utility/dist/array'
import { IndexerContext, RpcContext } from '../../../../context'
import { asBlocks } from '../../../time'
import { PricesQuery } from './types'

export const rpcPrices = async (ctx: RpcContext, query: PricesQuery) => {
  const [pool, { start, end }] = await Promise.all([
    ctx.api.query.swaps.pools(query.pool).then(o => o.unwrap()),
    asBlocks(ctx, query.timespan),
  ])

  const ztg = { Ztg: null }

  const assets = pool.assets.toArray().slice(0, -1)
  const blocks = range(start, end)

  const prices: [ZeitgeistPrimitivesAsset, [number, u128][]][] = await Promise.all(
    assets.map(async asset => {
      const prices = await ctx.api.rpc.swaps.getSpotPrices(query.pool, ztg, asset, blocks)
      return [asset, zip(blocks, prices.toArray())]
    }),
  )

  return prices
}

export const indexedPrices = async (context: IndexerContext, query: PricesQuery) => {
  //!TODO: use indexed historicalAssets
}
