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

export const upperFirstObjectKeys = (obj: Record<any, any>) => {
  return Object.keys(obj).reduce((acc, key) => {
    return {
      ...acc,
      [upperFirst(key)]: obj[key],
    }
  }, {})
}
