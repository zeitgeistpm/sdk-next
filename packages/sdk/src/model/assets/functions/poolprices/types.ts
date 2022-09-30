import { BigNumber } from 'bignumber.js'
import { Resolution, Timespan } from '../../../time'
import { BlockNumber } from '../../../time/block'

export type PoolPricesQuery = {
  /**
   * The pool to fetch prices for
   */
  pool: number
  /**
   * The timespan to fetch prices for, can be either blocks or dates
   */
  timespan: Timespan
  /**
   * Projected space between blocks.
   * @example ```ts
   * // Will fetch all prices between the start and end with the stepping time between prices of 1 hour.
   * sdk.model.assets.poolPrices({resolution: '1 hour', timespan: {start, end} marketId})
   * ```
   */
  resolution?: Resolution
}

/**
 * Time series of pool prices at a block for assets by index in a pool.
 */
export type PoolPrices = Array<PoolAssetPricesAtBlock>

/**
 * Discrete prices for all assets by index in a pool at a certain block.
 */
export type PoolAssetPricesAtBlock = Array<AssetPriceAtBlock>

/**
 * Discrete price for a asset at a certain block.
 */
export type AssetPriceAtBlock = [BlockNumber, BigNumber]

/**
 * Streaming query paramaters.
 */
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
   * Projected space between blocks.
   * @example ```ts
   * // Will stream price by the hour for the last day. Stream of 24 items.
   * sdk.model.assets.poolPrices.$({tail: '-24 hour', resolution: '1 hour', marketId})
   * ```
   */
  resolution?: Resolution
}
