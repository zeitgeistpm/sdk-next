/**
 * Type representing values that are not available.
 */
export type NA = symbol

/**
 * Const symbold representing a not available value.
 */
export const NA: NA = Symbol('Not Available')

/**
 * Typeguard for NA values.
 *
 * @param value unknown
 * @returns value is NA
 */
export const isNA = (value: unknown): value is NA => Boolean(value) && value === NA
