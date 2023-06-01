import ms from 'ms'
import { isString } from '@polkadot/util'

/**
 * Duration represented as a typed string
 * @example ```ts
 * const twoHours: Duration = "2 hours"
 * ```
 */
export type Duration = `${'-' | ''}${number} ${DurationPeriod}${'s' | ''}`

/**
 * Duration period, ca be second, minutes, hours etc
 */
export type DurationPeriod =
  | 'second'
  | 'Second'
  | 'minute'
  | 'Minute'
  | 'hour'
  | 'Hour'
  | 'day'
  | 'Day'
  | 'week'
  | 'Week'
  | 'month'
  | 'Month'
  | 'year'
  | 'Year'

/**
 * Typeguard for duration strings.
 *
 * @param duration
 * @returns duration is Duration
 */
export const isDuration = (duration: unknown): duration is Duration =>
  Boolean(
    isString(duration) &&
      duration.toLowerCase().match(/[1-9]+ second|minute|hour|day|week|month/),
  )

/**
 * Get duration in milliseconds.
 *
 * @param duration Duration
 * @returns number
 */
export const asMs = (duration: Duration) => ms(duration)
