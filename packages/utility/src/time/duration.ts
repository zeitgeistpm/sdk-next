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
  | 'minute'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'year'

/**
 * Typeguard for duration strings.
 *
 * @param duration
 * @returns duration is Duration
 */
export const isDuration = (duration: unknown): duration is Duration =>
  Boolean(isString(duration) && duration.match(/[1-9]+ second|minute|hour|day|week|month/))
