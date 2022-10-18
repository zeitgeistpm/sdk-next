import BigNumber from 'bignumber.js'
import { CategoryMetadata } from '../../../../meta'
import { AssetId } from '../../../../primitives'

/**
 * An index by pool id for pool assets(prices, metadata categories, pool amounts etc) + total pool liquidity.
 */
export type AssetIndex = {
  /**
   * Indexed py pool id.
   */
  [poolId: number]: {
    /**
     * Total pool liquidity in ZTG
     */
    liquidity: BigNumber
    /**
     * Pool assets expanded data.
     */
    assets: Array<{
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
    }>
  }
}
