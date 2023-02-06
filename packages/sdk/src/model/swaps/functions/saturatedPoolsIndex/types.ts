import { Decimal } from 'decimal.js'
import { Context, IndexerContext, RpcContext } from '../../../../context'
import { MetadataStorage } from '../../../../meta'
import { AssetId } from '../../../../primitives'
import { IndexedMarket, SaturatedRpcMarket } from '../../../markets'

/**
 * An index by pool id for pool assets(prices, metadata categories, pool amounts etc) + total pool liquidity.
 */
export type SaturatedPoolIndex<C extends Context<MS>, MS extends MetadataStorage> = {
  /**
   * Indexed py pool id.
   */
  [poolId: number]: SaturatedPoolEntry<C, MS>
}

export type SaturatedPoolEntry<C extends Context<MS>, MS extends MetadataStorage> = {
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
  liquidity: Decimal
  /**
   * Pool assets expanded data.
   */
  assets: SaturatedPoolEntryAsset[]
}

export type SaturatedPoolEntryAsset = {
  /**
   * Asset id of the asset.
   */
  assetId: AssetId
  /**
   * Amount of asset tokens in pool.
   */
  amount: Decimal
  /**
   * The percentage of the asset size relative to pool.
   */
  percentage: number
  /**
   * The price of asset when fetched.
   */
  price: Decimal
  /**
   * Category metadata relative to pool market metadata.
   */
  category: {
    ticker?: string | null | undefined
    name?: string | null | undefined
    color?: string | null | undefined
  }
}
