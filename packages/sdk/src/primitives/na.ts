/**
 * Type representing values that are not available.
 */
export type NA = {
  __type: typeof sym
  reason: string
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
})

const sym: unique symbol = Symbol()

/**
 * Const symbold representing a not available value.
 */
export const NA: NA = na('Not available.')

/**
 * Typeguard for NA values.
 *
 * @param value unknown
 * @returns value is NA
 */
export const isNA = (value: unknown): value is NA => Boolean(value) && value === NA

/**
 * Typeguard to check if a value is available
 *
 * @param value T | NA
 * @returns value is T
 */
export const isAvailable = <T>(value: T | NA): value is T => value !== NA
