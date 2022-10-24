import { SwapsAsset } from '@zeitgeistpm/augment-api'
import { BigNumber } from 'bignumber.js'
import { BlockNumber } from '../../../../primitives/blocknumber'
import { Duration, Timespan } from '../../../time'

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
  resolution?: Duration
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
export type AssetPriceAtBlock = [block: BlockNumber, price: BigNumber]

/**
 * Streaming query paramaters.
 */
export type PoolPricesStreamQuery = {
  /**
   * The pool to fetch prices for
   */
  pool: number
  /**
   * The asset in to check prices for. Defaults to ZTG.
   */
  assetIn?:
    | SwapsAsset
    | { CategoricalOutcome: any }
    | { ScalarOutcome: any }
    | { CombinatorialOutcome: any }
    | { PoolShare: any }
    | { Ztg: any }
  /**
   * The blocknumber or date to tail prices from.
   */
  from?: BlockNumber | Date | Duration
  /**
   * Projected space between blocks.
   * @example ```ts
   * // Will stream price by the hour for the last day. Stream of 24 items.
   * sdk.model.assets.poolPrices.$({tail: '-24 hour', resolution: '1 hour', marketId})
   * ```
   */
  resolution?: Duration
}
