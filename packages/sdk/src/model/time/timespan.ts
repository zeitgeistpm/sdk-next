import { isNumber } from '@polkadot/util'
import { RpcContext } from '../../context'
import { blockDate, dateBlock, time } from './time'

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
  start: number
  /**
   * The end block.
   */
  end: number
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
export async function from(ctx: RpcContext, timespan: DateTimespan): Promise<BlockTimespan>
/**
 * Convert BlockTimespan to DateTimespan
 *
 * @param ctx RpcContext
 * @param timespan BlockTimespan
 * @return Promise<DateTimespan>
 */
export async function from(ctx: RpcContext, timespan: BlockTimespan): Promise<DateTimespan>
export async function from(ctx: RpcContext, timespan: Timespan) {
  return isDates(timespan) ? datesToBlocks(ctx, timespan) : blocksToDates(ctx, timespan)
}

/**
 * Convert timespan to blocks.
 *
 * @param ctx RpcContext
 * @param timespan Timespan
 * @returns Promise<BlockTimespan>
 */
export const asBlocks = async (ctx: RpcContext, timespan: Timespan): Promise<BlockTimespan> =>
  isDates(timespan) ? from(ctx, timespan) : timespan

/**
 * Convert a timespan of dates to block range.
 *
 * @note Is approximate based on chain block production time and not exact.
 *
 * @param ctx RpcContext
 * @param dates DateTimespan
 * @returns Promise<BlockTimespan>
 */
export const datesToBlocks = async (ctx: RpcContext, dates: DateTimespan): Promise<BlockTimespan> => {
  const chaintime = await time(ctx)
  return {
    start: dateBlock(chaintime, dates.start),
    end: dateBlock(chaintime, dates.end),
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
export const blocksToDates = async (ctx: RpcContext, dates: BlockTimespan): Promise<DateTimespan> => {
  const chaintime = await time(ctx)
  return {
    start: blockDate(chaintime, dates.start),
    end: blockDate(chaintime, dates.end),
  }
}
