import { BigNumber } from 'bignumber.js'
import { Resolution, Timespan } from '../../../time'
import { BlockNumber } from '../../../time/block'

export type PoolPricesQuery = {
  pool: number
  timespan: Timespan
  resolution?: Resolution
}

export type PoolPrices = Array<PoolAssetPricesAtBlock>

export type PoolAssetPricesAtBlock = Array<AssetPriceAtBlock>

export type AssetPriceAtBlock = [BlockNumber, BigNumber]

export type PoolPricesStreamQuery = {
  /**
   * The pool to fetch prices for
   */
  pool: number
  /**
   * The blocknumber or date to tail prices from.
   */
  tail: BlockNumber | Date | Resolution
  /**
   * Projected space between blocks
   */
  resolution?: Resolution
}
