import { BTreeMap, u128 } from '@polkadot/types'
import { ZeitgeistPrimitivesAsset, ZeitgeistPrimitivesPool } from '@polkadot/types/lookup'
import { calcSpotPrice } from '@zeitgeistpm/utility/dist/math'
import { isNotNull } from '@zeitgeistpm/utility/dist/null'
import * as O from '@zeitgeistpm/utility/dist/option'
import BN from 'bn.js'
import BigNumber from 'bignumber.js'
import {
  Context,
  IndexerContext,
  isIndexerContext,
  isRpcContext,
  RpcContext,
} from '../../../../context'
import { MetadataStorage } from '../../../../meta'
import * as AssetId from '../../../../primitives/assetid'
import { rpcMarket } from '../../../markets'
import { Pool } from '../../pool'
import { AssetIndex } from './types'

export * from './types'

export const assetsIndex = async <C extends Context<MS>, MS extends MetadataStorage>(
  context: C,
  pools: Pool<C, MS>[],
): Promise<AssetIndex> => {
  if (isIndexerContext<MS>(context)) {
    return indexerAssetsIndex<typeof context, MS>(context, pools)
  } else if (isRpcContext<MS>(context)) {
    return rpcAssetsIndex<typeof context, MS>(context, pools)
  }
  throw new Error('Unreachable context.')
}

const indexerAssetsIndex = async <C extends IndexerContext, MS extends MetadataStorage>(
  ctx: C,
  pools: Pool<C, MS>[],
): Promise<AssetIndex> => {
  const ids = pools.map(p => p.poolId)
  const [{ markets: marketsForPools }, { assets: assetsForPools }] = await Promise.all([
    ctx.indexer.markets({
      where: {
        poolId_in: ids,
      },
    }),
    ctx.indexer.assets({
      where: {
        poolId_in: ids,
      },
    }),
  ])

  const byPool = (
    await Promise.all(
      pools.map(async pool => {
        const poolMarket = marketsForPools.find(m => m.poolId === pool.poolId)
        const poolAssets = assetsForPools.filter(a => a.poolId === pool.poolId)

        if (!poolMarket || poolAssets.length === 0) return null

        const assets = pool.weights
          .filter(isNotNull)
          .map(weight => {
            const assetIdO = AssetId.fromString(weight.assetId)

            if (O.isNone(assetIdO)) {
              return null
            }

            const assetId = assetIdO.value
            const assetIndex = AssetId.getIndexOf(assetId)

            if (!assetIndex) return null

            const asset = poolAssets[assetIndex]
            const category = poolMarket.categories![assetIndex] ?? {
              name: 'ztg',
              ticker: 'ZTG',
            }

            const percentage = Math.round(
              new BigNumber(weight.len)
                .dividedBy(pool.totalWeight)
                .multipliedBy(100)
                .toNumber(),
            )

            if (AssetId.IOZtgAssetId.is(assetId)) {
              return {
                amount: pool.ztgQty,
                assetId,
                category,
                percentage,
                price: new BigNumber(10 ** 10),
              }
            }

            return {
              amount: new BigNumber(asset.amountInPool),
              category,
              assetId,
              price: new BigNumber(asset.price ?? 0),
              percentage,
            }
          })
          .filter(isNotNull)

        const liquidity = assets.reduce((total, asset) => {
          if (!asset.price || !asset.amount) {
            return new BigNumber(0)
          }
          return total.plus(
            new BigNumber(asset.price).multipliedBy(new BigNumber(asset.amount)),
          )
        }, new BigNumber(0))

        return { poolId: pool.poolId, liquidity, assets }
      }),
    )
  ).filter(isNotNull)

  return byPool.reduce<AssetIndex>(
    (index, { poolId, liquidity, assets }) => ({
      ...index,
      [poolId]: { liquidity, assets },
    }),
    {},
  )
}

const rpcAssetsIndex = async <C extends RpcContext<MS>, MS extends MetadataStorage>(
  ctx: C,
  pools: Pool<C, MS>[],
): Promise<AssetIndex> => {
  const byPool = await Promise.all(
    pools.map(async pool => {
      const weights = pool.weights.unwrap()
      const ztgAssetIndex = pool.assets.findIndex(i => i.isZtg)
      const ztgAsset = pool.assets[ztgAssetIndex]
      const outcomeAssets = pool.assets.filter(a => !a.isZtg)
      const swapPrct = new BigNumber(pool.swapFee.unwrap().toNumber()).dividedBy(100000000)

      const accountId = await pool.accountId().unwrap()

      const [market, prices] = await Promise.all([
        ctx.api.query.marketCommons
          .markets(pool.marketId)
          .then(m => rpcMarket(ctx, pool.marketId, m.unwrap()).saturate()),
        Promise.all(
          pool.assets.map(asset =>
            ctx.api.rpc.swaps.getSpotPrice(pool.poolId, { Ztg: null }, asset),
          ),
        ),
      ])

      const [tokens, ztgBalance] = await Promise.all([
        ctx.api.query.tokens.accounts.multi(outcomeAssets.map(asset => [accountId, asset])),
        ctx.api.query.system.account(accountId).then(({ data }) => data.free),
      ])

      const accounts = [...tokens.map(t => t.free), ztgBalance]

      let liquidity = pool.assets.reduce((total, asset, index) => {
        const price = prices[index]
        const amountInPool = accounts[index]
        return total.plus(
          new BigNumber(price.toNumber())
            .div(10 ** 10)
            .multipliedBy(amountInPool.toNumber()),
        )
      }, new BigNumber(0))

      liquidity = liquidity.minus(liquidity.dividedBy(100).multipliedBy(swapPrct))

      const totalWeight = pool.assets.reduce((total, asset) => {
        const weight = weightOfAsset(pool, asset)
        return total.plus(weight?.toNumber() ?? 0)
      }, new BigNumber(0))

      const assets = pool.assets.map((asset, index) => {
        return {
          amount: new BigNumber(accounts[index].toNumber()),
          assetId: AssetId.fromPrimitive(asset),
          category: market.categories?.[index] || {
            name: 'ztg',
            ticker: 'ZTG',
          },
          percentage: weightOfAsset(pool, asset).dividedBy(totalWeight).toNumber(),
          price: new BigNumber(prices[index].toNumber()),
        }
      })

      return { poolId: pool.poolId, liquidity, assets }
    }),
  )

  return byPool.reduce<AssetIndex>(
    (index, { poolId, liquidity, assets }) => ({
      ...index,
      [poolId]: { liquidity, assets },
    }),
    {},
  )
}

const weightOfAsset = (
  pool: ZeitgeistPrimitivesPool,
  find: ZeitgeistPrimitivesAsset,
): BigNumber => {
  for (const [asset, weight] of pool.weights.unwrap().entries()) {
    if (find.eq(asset)) {
      return new BigNumber(weight.toNumber())
    }
  }
  return new BigNumber(0)
}

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
