/**
 * Typeguard for not null values.
 * Usefull when filtering arrays or observables.
 *
 * @generic T - type of the value
 * @param value T
 * @returns value is T
 */
export const isNotNull = <T>(value: T | null): value is T => value !== null
