import { BTreeMap } from '@polkadot/types'
import { Codec } from '@polkadot/types/types'
import { isNotNull } from '@zeitgeistpm/utility/dist/null'
import BigNumber from 'bignumber.js/bignumber.js'
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
import { AssetIndex, AssetIndexAssetEntry } from './types'

export * from './types'

/**
 * Get an asset index for a list of pools from either rpc or indexer.
 *
 * @param context C
 * @param pools Pool<C, M
 * @returns Promise<AssetIndex>
 */
export const assetsIndex = async <C extends Context<MS>, MS extends MetadataStorage>(
  context: C,
  pools: Pool<C, MS>[],
): Promise<AssetIndex<C, MS>> => {
  if (isIndexerContext<MS>(context)) {
    return indexerAssetsIndex<typeof context, MS>(context, pools)
  } else if (isRpcContext<MS>(context)) {
    return rpcAssetsIndex<typeof context, MS>(context, pools)
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
export const indexerAssetsIndex = async <
  C extends IndexerContext,
  MS extends MetadataStorage,
>(
  ctx: C,
  pools: Pool<C, MS>[],
): Promise<AssetIndex<C, MS>> => {
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

        const assets: AssetIndexAssetEntry[] = pool.weights
          .filter(isNotNull)
          .map(weight => {
            const assetId = AssetId.fromString(weight.assetId).unwrap()!
            const assetIndex = AssetId.getIndexOf(assetId)!

            const percentage = Math.round(
              new BigNumber(weight.len)
                .dividedBy(pool.totalWeight)
                .multipliedBy(100)
                .toNumber(),
            )

            if (AssetId.IOZtgAssetId.is(assetId)) {
              return {
                amount: new BigNumber(pool.ztgQty),
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
            const category = poolMarket.categories![assetIndex] ?? {
              name: 'ztg',
              ticker: 'ZTG',
            }

            return {
              amount: new BigNumber(asset.amountInPool),
              price: new BigNumber(asset.price ?? 0).multipliedBy(ZTG),
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
            new BigNumber(asset.price.div(ZTG)).multipliedBy(new BigNumber(asset.amount)),
          )
        }, new BigNumber(0))

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
export const rpcAssetsIndex = async <C extends RpcContext<MS>, MS extends MetadataStorage>(
  ctx: C,
  pools: Pool<C, MS>[],
): Promise<AssetIndex<C, MS>> => {
  const byPool = await Promise.all(
    pools.map(async pool => {
      const outcomeAssets = pool.assets.filter(a => !a.isZtg)
      const swapPrct = new BigNumber(pool.swapFee.unwrap().toNumber()).dividedBy(100000000)
      const weights = pool.weights.unwrap()

      const accountId = await pool.accountId().unwrap()

      const [market, prices, tokens, ztgBalance] = await Promise.all([
        ctx.api.query.marketCommons
          .markets(pool.marketId)
          .then(m => rpcMarket(ctx, pool.marketId, m.unwrap()).saturate()),
        Promise.all(
          pool.assets.map(asset =>
            ctx.api.rpc.swaps.getSpotPrice(pool.poolId, { Ztg: null }, asset),
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
          new BigNumber(price.toNumber()).div(ZTG).multipliedBy(amountInPool.toNumber()),
        )
      }, new BigNumber(0))

      liquidity = liquidity.minus(liquidity.dividedBy(100).multipliedBy(swapPrct))

      const totalWeight = pool.assets.reduce((total, asset) => {
        const weight = new BigNumber(mapget(weights, asset)?.toNumber() ?? 0)
        return total.plus(weight)
      }, new BigNumber(0))

      const assets: AssetIndexAssetEntry[] = pool.assets.map((asset, index) => {
        return {
          amount: new BigNumber(accounts[index].toNumber()),
          price: new BigNumber(prices[index].toNumber()),
          assetId: AssetId.fromPrimitive(asset),
          category: market.categories?.[index] || {
            name: 'ztg',
            ticker: 'ZTG',
          },
          percentage: new BigNumber(mapget(weights, asset)?.toNumber() ?? 0)
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

/**
 * Get a value from a BTreeMap for a key.
 *
 * @note fix for BTreeMap.get as it seems broken.
 * @param map BTreeMap<K, V>
 * @param key K
 * @returns  V | null
 */
const mapget = <K extends Codec, V extends Codec>(map: BTreeMap<K, V>, key: K) => {
  for (const [_k, value] of map.entries()) {
    if (key.eq(_k)) {
      return value
    }
  }
  return null
}
