import { upperFirst } from 'lodash-es'

/**
 * Map over an object and set all key values to undefined type
 * @generic T extends object
 */
export type MappedUndefined<T extends object> = {
  [K in keyof T]?: undefined
}

/**
 * Create a type from an objec that can be either whole or all values undefined.
 * Usefull for parameter objects that needs all values set or none of them.
 *
 * @generic T extends object
 */
export type Unpartial<T extends object> = MappedUndefined<T> | T

/**
 * Uppercase the first letter of all object keyes
 *
 * @note This is a shallow operation
 *
 * @param obj Record<any, any>
 * @returns Record<any, any>
 */
export const upperFirstObjectKeys = (obj: Record<any, any>) => {
  return Object.keys(obj).reduce((acc, key) => {
    return {
      ...acc,
      [upperFirst(key)]: obj[key],
    }
  }, {})
}
