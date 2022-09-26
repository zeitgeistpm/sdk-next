import { isNumber } from '@polkadot/util'
import { RpcContext } from '../../context'

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
export const isBlockTimespan = (timespan: Timespan): timespan is BlockTimespan =>
  timespan.start instanceof Date && timespan.end instanceof Date

/**
 * Typeguard for DateTimespan
 *
 * @param timespan Timespan
 * @returns timespan is DateTimespan
 */
export const isDateTimespan = (timespan: Timespan): timespan is DateTimespan =>
  isNumber(timespan.start) && isNumber(timespan.end)

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
  return isDateTimespan(timespan) ? datesToBlocks(ctx, timespan) : blocksToDates(ctx, timespan)
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
export const datesToBlocks = async (ctx: RpcContext, dates: DateTimespan): Promise<BlockTimespan> => {
  const [now, head] = await Promise.all([
    ctx.api.query.timestamp.now().then(now => now.toNumber()),
    ctx.api.rpc.chain.getHeader(),
  ])

  const blockTime = ctx.api.consts.timestamp.minimumPeriod.toNumber() * 2
  const currentBlock = head.number.toNumber()

  const deltaStart = dates.start.getTime() - now
  const deltaEnd = dates.end.getTime() - now

  const start = Math.floor(currentBlock + deltaStart / blockTime)
  const end = Math.ceil(currentBlock + deltaEnd / blockTime)

  return {
    start,
    end,
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
  const [now, head] = await Promise.all([
    ctx.api.query.timestamp.now().then(now => now.toNumber()),
    ctx.api.rpc.chain.getHeader(),
  ])

  // !TODO: sleep now..

  return {
    start: new Date(),
    end: new Date(),
  }
}
