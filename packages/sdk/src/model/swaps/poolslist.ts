import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import BigNumber from 'bignumber.js'
import {
  Context,
  IndexerContext,
  isIndexerContext,
  isRpcContext,
  RpcContext,
} from '../../context'
import { MetadataStorage } from '../../meta'
import { rpcMarket } from '../../model/markets'
import * as AssetId from '../../primitives/assetid'
import { Pool, SaturatedPool, SaturatedPoolProperties } from './pool'

/**
 * List of Pools.
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to fetch the marketlist for.
 */
export type PoolList<C extends Context<MS>, MS extends MetadataStorage> = Pool<C, MS>[]

// const indexerSaturate = async <C extends IndexerContext, MS extends MetadataStorage>(
//   ctx: C,
//   pools: Pool<C, MS>[],
// ): Promise<SaturatedPool<C, MS>[]> => {
//   const poolIds = pools.map(p => p.poolId)
//   const [{ markets }, { assets }] = await Promise.all([
//     ctx.indexer.markets({
//       where: {
//         poolId_in: poolIds,
//       },
//     }),
//     ctx.indexer.assets({
//       where: {
//         poolId_in: poolIds,
//       },
//     }),
//   ])

//   const saturatedPools = pools.map(pool => {
//     const market = markets.find(m => m.poolId === pool.poolId)
//     const assetForPool = assets.find(asset => asset.poolId === pool.poolId)

//     if (!market) return null
//     if (!assetForPool) return null

//     const assetss = pool.weights.map(weight => {
//       if (!weight) return null
//       const assetId = AssetId.from(JSON.parse(weight.assetId))
//       const category = 'ztg'
//       const percentage = Math.round((Number(weight.len) / Number(pool.totalWeight)) * 100)
//       const isZtg = assetId.hasOwnProperty('ztg')
//       if (isZtg) {
//         return {
//           amountInPool: pool.ztgQty,
//           assetId,
//           category,
//           percentage,
//           poolId: pool.poolId,
//           price: 1,
//         }
//       }

//       return {
//         ...assetForPool,
//         assetId,
//         percentage,
//         category,
//       }
//     })
//   })

//   return saturatedPools as any
// }

// const rpcSaturate = async <C extends RpcContext<MS>, MS extends MetadataStorage>(
//   ctx: C,
//   pools: Pool<C, MS>[],
// ): Promise<SaturatedPool<C, MS>[]> => {
//   return Promise.all(
//     pools.map(async pool => {
//       const assets = pool.assets.filter(asset => !asset.isZtg)

//       const [market, accountId, prices] = await Promise.all([
//         ctx.api.query.marketCommons
//           .markets(pool.marketId)
//           .then(m => rpcMarket(ctx, pool.marketId, m.unwrap()).saturate()),
//         pool.accountId().unwrap(),
//         Promise.all(
//           assets.map(asset =>
//             ctx.api.rpc.swaps
//               .getSpotPrice(pool.poolId, { Ztg: null }, asset)
//               .then(price => price.toNumber()),
//           ),
//         ),
//       ])

//       const accounts = await ctx.api.query.tokens.accounts.multi(
//         assets.map(asset => [accountId, asset]),
//       )

//       const liquidity = assets.reduce((total, asset, index) => {
//         const price = prices[index]
//         const amountInPool = accounts[index]
//         return total.plus(new BigNumber(price).multipliedBy(amountInPool.free.toNumber()))
//       }, new BigNumber(0))

//       const totalWeight = pool.assets.reduce((total, n) => {
//         return total.plus(n.toNumber())
//       }, new BigNumber(0))

//       const details = assets.map((asset, index) => {
//         return {
//           amount: accounts[index].free.toNumber(),
//           assetId: AssetId.from(asset),
//           category: market.categories![index],
//           percentage: new BigNumber(pool.weights.unwrap().get(asset)?.toNumber() ?? 0)
//             .dividedBy(totalWeight.toNumber())
//             .toNumber(),
//           poolId: pool.poolId,
//           price: prices[index],
//         }
//       })

//       return saturated
//     }),
//   )
// }
