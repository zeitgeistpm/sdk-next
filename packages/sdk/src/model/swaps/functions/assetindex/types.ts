import BigNumber from 'bignumber.js'
import { Context, IndexerContext, RpcContext } from '../../../../context'
import { MetadataStorage } from '../../../../meta'
import { AssetId } from '../../../../primitives'
import { IndexedMarket, Market, SaturatedRpcMarket } from '../../../markets'

/**
 * An index by pool id for pool assets(prices, metadata categories, pool amounts etc) + total pool liquidity.
 */
export type AssetIndex<C extends Context<MS>, MS extends MetadataStorage> = {
  /**
   * Indexed py pool id.
   */
  [poolId: number]: AssetIndexEntry<C, MS>
}

export type AssetIndexEntry<C extends Context<MS>, MS extends MetadataStorage> = {
  /**
   * The market the pool belongs to.
   */
  market: C extends IndexerContext
    ? IndexedMarket<C, MS>
    : C extends RpcContext<MS>
    ? SaturatedRpcMarket<C, MS>
    : never
  /**
   * Total pool liquidity in ZTG
   */
  liquidity: BigNumber
  /**
   * Pool assets expanded data.
   */
  assets: AssetIndexAssetEntry[]
}

export type AssetIndexAssetEntry = {
  /**
   * Asset id of the asset.
   */
  assetId: AssetId
  /**
   * Amount of asset tokens in pool.
   */
  amount: BigNumber
  /**
   * The percentage of the asset size relative to pool.
   */
  percentage: number
  /**
   * The price of asset when fetched.
   */
  price: BigNumber
  /**
   * Category metadata relative to pool market metadata.
   */
  category: {
    ticker?: string | null | undefined
    name?: string | null | undefined
    color?: string | null | undefined
  }
}
