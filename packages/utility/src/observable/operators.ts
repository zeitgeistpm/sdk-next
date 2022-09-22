import { OperatorFunction } from 'rxjs'
import { scan } from 'rxjs/operators'

/**
 * Partially constructs an object from multiple concurrent sources.
 *
 * @returns OperatorFunction<T, T>
 */
export const assign = <T>(): OperatorFunction<T, T> => {
  return scan((a: T, b: T) => ({
    ...a,
    ...b,
  }))
}
