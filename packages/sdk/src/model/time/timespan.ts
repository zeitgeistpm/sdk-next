import { isNumber } from '@polkadot/util'
import { BlockNumber } from './block'
import { blockDate, ChainTime, dateBlock } from './time'

/**
 * Union type of timespan dealing with blocknumbers or dates.
 */
export type Timespan = BlockTimespan | DateTimespan

/**
 * A timespan represented as blocks
 */
export type BlockTimespan = {
  /**
   * The start block.
   */
  start: BlockNumber
  /**
   * The end block.
   */
  end: BlockNumber
}

/**
 * A timespan represented as dates.
 */
export type DateTimespan = {
  /**
   * Start date.
   */
  start: Date
  /**
   * End Date.
   */
  end: Date
}

/**
 * Typeguard for BlockTimespan
 *
 * @param timespan Timespan
 * @returns timespan is BlockTimespan
 */
export const isBlocks = (timespan: Timespan): timespan is BlockTimespan =>
  isNumber(timespan.start) && isNumber(timespan.end)

/**
 * Typeguard for DateTimespan
 *
 * @param timespan Timespan
 * @returns timespan is DateTimespan
 */
export const isDates = (timespan: Timespan): timespan is DateTimespan =>
  timespan.start instanceof Date && timespan.end instanceof Date

/**
 * Convert DateTimespan to BlockTimespan
 *
 * @param ctx RpcContext
 * @param timespan DateTimespan
 * @return Promise<BlockTimespan>
 */
export function from(now: ChainTime, timespan: DateTimespan): BlockTimespan
/**
 * Convert BlockTimespan to DateTimespan
 *
 * @param ctx RpcContext
 * @param timespan BlockTimespan
 * @return Promise<DateTimespan>
 */
export function from(now: ChainTime, timespan: BlockTimespan): DateTimespan
export function from(now: ChainTime, timespan: Timespan) {
  return isDates(timespan) ? datesToBlocks(now, timespan) : blocksToDates(now, timespan)
}

/**
 * Convert timespan to blocks.
 *
 * @param ctx RpcContext
 * @param timespan Timespan
 * @returns Promise<BlockTimespan>
 */
export const asBlocks = (now: ChainTime, timespan: Timespan): BlockTimespan =>
  isDates(timespan) ? from(now, timespan) : timespan

/**
 * Convert a timespan of dates to block range.
 *
 * @note Is approximate based on chain block production time and not exact.
 *
 * @param ctx RpcContext
 * @param dates DateTimespan
 * @returns Promise<BlockTimespan>
 */
export const datesToBlocks = (now: ChainTime, dates: DateTimespan): BlockTimespan => {
  return {
    start: dateBlock(now, dates.start),
    end: dateBlock(now, dates.end),
  }
}

/**
 * Convert a timespan of dates to block range.
 *
 * @note Is approximate based on chain block production time and not exact.
 *
 * @param ctx RpcContext
 * @param dates DateTimespan
 * @returns Promise<BlockTimespan>
 */
export const blocksToDates = (now: ChainTime, dates: BlockTimespan): DateTimespan => {
  return {
    start: blockDate(now, dates.start),
    end: blockDate(now, dates.end),
  }
}
