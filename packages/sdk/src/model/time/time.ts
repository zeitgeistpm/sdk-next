import { RpcContext } from '../../context'
import ms from 'ms'
import { BlockNumber, isBlockNumber } from './block'
import { isResolution, Resolution } from './resolution'

/**
 * Chain time data.
 */
export type ChainTime = {
  /**
   * Current on chain timestamp.
   */
  now: number
  /**
   * Current finalized block.
   */
  block: BlockNumber
  /**
   * Block production time.
   */
  period: number
}

/**
 * Get current chain time.
 *
 * @param ctx RpcContext
 * @returns Promise<ChainTime>
 */
export const now = async (ctx: RpcContext): Promise<ChainTime> => {
  const [now, head] = await Promise.all([
    ctx.api.query.timestamp.now().then(now => now.toNumber()),
    ctx.api.rpc.chain.getHeader(),
  ])

  const block = head.number.toNumber() as BlockNumber
  const period = ctx.api.consts.timestamp.minimumPeriod.toNumber() * 2

  return {
    now,
    block,
    period,
  }
}

/**
 * Get projected blocknumber of date.
 *
 * @param time ChainTime
 * @param date Date
 * @returns number
 */
export const dateBlock = (time: ChainTime, date: Date): BlockNumber => {
  const delta = date.getTime() - time.now
  return Math.floor(time.block + delta / time.period) as BlockNumber
}

/**
 * Get projected Date of blocknumber.
 *
 * @param time ChainTime
 * @param block number
 * @returns Date
 */
export const blockDate = (time: ChainTime, block: BlockNumber | number): Date => {
  const delta = block - time.block
  return new Date(time.now + delta * time.period)
}

/**
 * Get instant as blocknumber.
 *
 * @param time ChainTime
 * @param instant Date | BlockNumber
 * @returns BlockNumber
 */
export const asBlock = (time: ChainTime, instant: Date | BlockNumber | Resolution): BlockNumber =>
  isBlockNumber(instant)
    ? instant
    : isResolution(instant)
    ? dateBlock(time, new Date(Date.now() + ms(instant)))
    : dateBlock(time, instant)
