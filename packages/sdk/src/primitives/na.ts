import { isNotNull } from '@zeitgeistpm/utility/dist/null'

/**
 * Type representing values that are not available.
 */
export type NA = {
  __type: typeof sym
  reason: string
  toString: () => string
}

/**
 * Create a NA value.
 *
 * @param reason string
 * @returns NA
 */
export const na = (reason: string): NA => ({
  __type: sym,
  reason,
  toString: () => `NA(${reason})`,
})

const sym: unique symbol = Symbol()

/**
 * Const symbold representing a not available value.
 */
export const NA: NA = na('Not available.')

/**
 * Get the reason the value is not available.
 *
 * @param na NA
 * @returns string
 */
export const reasonOf = (na: NA) => na.reason

/**
 * Typeguard for NA values.
 *
 * @param value unknown
 * @returns value is NA
 */
export const isNA = (value: unknown): value is NA =>
  typeof value === 'object' &&
  isNotNull(value) &&
  '__type' in value &&
  (value as any)['__type'] === sym

/**
 * Typeguard to check if a value is available
 *
 * @param value T | NA
 * @returns value is T
 */
export const isAvailable = <T>(value: T | NA): value is T => !isNA(value)
