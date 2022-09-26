/**
 * Map over an object and set all key values to undefined type
 * @generic T extends object
 */
export type MappedUndefined<T extends object> = {
  [K in keyof T]: undefined
}

/**
 * Create a type from an objec that can be either whole or all values undefined.
 * Usefull for parameter objects that needs all values set or none of them.
 *
 * @generic T extends object
 */
export type Unpartial<T extends object> = T | MappedUndefined<T>
