import { isNotNull } from '@zeitgeistpm/utility/dist/null'
import { mapget } from '@zeitgeistpm/utility/dist/btreemap'
import { Decimal } from 'decimal.js'
import {
  Context,
  IndexerContext,
  isIndexerContext,
  isRpcContext,
  RpcContext,
} from '../../../../context'
import { MetadataStorage } from '../../../../meta'
import * as AssetId from '../../../../primitives/assetid'
import { ZTG } from '../../../../primitives/ztg'
import { rpcMarket } from '../../../markets'
import { Pool } from '../../pool'
import { SaturatedPoolIndex, SaturatedPoolEntryAsset } from './types'

export * from './types'

/**
 * Get an asset index for a list of pools from either rpc or indexer.
 *
 * @param context C
 * @param pools Pool<C, M
 * @returns Promise<AssetIndex>
 */
export const saturatedPoolsIndex = async <
  C extends Context<MS>,
  MS extends MetadataStorage,
>(
  context: C,
  pools: Pool<C, MS>[],
): Promise<SaturatedPoolIndex<C, MS>> => {
  if (isIndexerContext<MS>(context)) {
    return indexer<typeof context, MS>(context, pools)
  } else if (isRpcContext<MS>(context)) {
    return rpc<typeof context, MS>(context, pools)
  }
  throw new Error('Unreachable context.')
}

/**
 * Get an assets index for a list of pools from the indexer.
 *
 * @param ctx IndexerContext
 * @param pools Pool<C, M
 * @returns Promise<AssetIndex>
 */
export const indexer = async <C extends IndexerContext, MS extends MetadataStorage>(
  ctx: C,
  pools: Pool<C, MS>[],
): Promise<SaturatedPoolIndex<C, MS>> => {
  const ids = pools.map(p => p.poolId)

  const [{ markets: marketsForPools }, { assets: assetsForPools }] = await Promise.all([
    ctx.indexer.markets({
      where: {
        pool: {
          poolId_in: ids,
        },
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
        const poolMarket = marketsForPools.find(m => m.pool?.poolId === pool.poolId)
        const poolAssets = assetsForPools.filter(a => a.poolId === pool.poolId)

        if (pool?.poolId === 167) {
          console.log(poolAssets)
        }

        if (!poolMarket || poolAssets.length === 0) return null

        const assets: SaturatedPoolEntryAsset[] = pool.weights
          .filter(isNotNull)
          .map(weight => {
            const assetId = AssetId.fromString(weight.assetId).unwrap()!
            const assetIndex = AssetId.getIndexOf(assetId)!

            const percentage = Math.round(
              new Decimal(weight.len).dividedBy(pool.totalWeight).mul(100).toNumber(),
            )

            if (AssetId.IOZtgAssetId.is(assetId)) {
              return {
                amount: new Decimal(pool.ztgQty),
                price: ZTG,
                assetId,
                category: {
                  ticker: 'ZTG',
                  name: 'ztg',
                },
                percentage,
              }
            }

            const asset = poolAssets.find(a => a.assetId === weight.assetId)!

            const category = !poolMarket.categories
              ? {
                  name: `unknown[${assetIndex}]`,
                  ticker: `UNKN-${assetIndex}`,
                }
              : poolMarket.categories?.[assetIndex] ?? {
                  name: 'ztg',
                  ticker: 'ZTG',
                }

            return {
              amount: new Decimal(asset.amountInPool),
              price: new Decimal(asset.price ?? 0).mul(ZTG),
              category,
              assetId,
              percentage,
            }
          })
          .filter(isNotNull)

        const liquidity = assets.reduce((total, asset) => {
          if (!asset.price || !asset.amount) {
            return total
          }
          return total.plus(
            new Decimal(asset.price.div(ZTG)).mul(new Decimal(asset.amount)),
          )
        }, new Decimal(0))

        return { poolId: pool.poolId, market: poolMarket, liquidity, assets }
      }),
    )
  ).filter(isNotNull)

  return byPool.reduce(
    (index, { poolId, market, liquidity, assets }) => ({
      ...index,
      [poolId]: { liquidity, market, assets },
    }),
    {},
  )
}

/**
 * Get an asset index for a list of pools from node rpc.
 *
 * @param ctx RpcContext<MS>
 * @param pools Pool<C, M
 * @returns Promise<AssetIndex>
 */
export const rpc = async <C extends RpcContext<MS>, MS extends MetadataStorage>(
  ctx: C,
  pools: Pool<C, MS>[],
): Promise<SaturatedPoolIndex<C, MS>> => {
  const byPool = await Promise.all(
    pools.map(async pool => {
      const outcomeAssets = pool.assets.filter(a => !a.isZtg)
      const swapPrct = new Decimal(pool.swapFee.unwrap().toNumber()).dividedBy(100000000)
      const weights = pool.weights.unwrap()

      const accountId = await pool.accountId().unwrap()

      const [market, prices, tokens, ztgBalance] = await Promise.all([
        ctx.api.query.marketCommons
          .markets(pool.marketId)
          .then(m => rpcMarket(ctx, pool.marketId, m.unwrap()).saturate()),
        Promise.all(
          pool.assets.map(asset =>
            ctx.api.rpc.swaps.getSpotPrice(pool.poolId, { Ztg: null }, asset, null, false),
          ),
        ),
        ctx.api.query.tokens.accounts.multi(outcomeAssets.map(asset => [accountId, asset])),
        ctx.api.query.system.account(accountId).then(({ data }) => data.free),
      ])

      const accounts = [...tokens.map(t => t.free), ztgBalance]

      let liquidity = pool.assets.reduce((total, asset, index) => {
        const price = prices[index]
        const amountInPool = accounts[index]
        return total.plus(
          new Decimal(price.toNumber()).div(ZTG).mul(amountInPool.toNumber()),
        )
      }, new Decimal(0))

      liquidity = liquidity.minus(liquidity.dividedBy(100).mul(swapPrct))

      const totalWeight = pool.assets.reduce((total, asset) => {
        const weight = new Decimal(mapget(weights, asset)?.toNumber() ?? 0)
        return total.plus(weight)
      }, new Decimal(0))

      const assets: SaturatedPoolEntryAsset[] = pool.assets.map((asset, index) => {
        return {
          amount: new Decimal(accounts[index].toNumber()),
          price: new Decimal(prices[index].toNumber()),
          assetId: AssetId.fromPrimitive(asset),
          category: market.categories?.[index] || {
            name: 'ztg',
            ticker: 'ZTG',
          },
          percentage: new Decimal(mapget(weights, asset)?.toNumber() ?? 0)
            .dividedBy(totalWeight)
            .toNumber(),
        }
      })

      return { poolId: pool.poolId, market, liquidity, assets }
    }),
  )

  return byPool.reduce(
    (index, { poolId, market, liquidity, assets }) => ({
      ...index,
      [poolId]: { market, liquidity, assets },
    }),
    {},
  )
}
