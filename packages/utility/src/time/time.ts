import { isNumber } from '@polkadot/util'
import ms from 'ms'
import { Duration, isDuration } from './duration'

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
  block: number
  /**
   * Block production time.
   */
  period: number
}

/**
 * Get projected blocknumber of date.
 *
 * @param time ChainTime
 * @param date Date
 * @returns number
 */
export const dateBlock = (time: ChainTime, date: Date): number => {
  const delta = date.getTime() - time.now
  return Math.floor(time.block + delta / time.period)
}

/**
 * Get projected Date of blocknumber.
 *
 * @param time ChainTime
 * @param block number
 * @returns Date
 */
export const blockDate = (time: ChainTime, block: number): Date => {
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
export const asBlock = (time: ChainTime, instant: Date | number | Duration): number =>
  isNumber(instant)
    ? instant
    : isDuration(instant)
    ? dateBlock(time, new Date(Date.now() + ms(instant)))
    : dateBlock(time, instant)
