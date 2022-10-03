import { OperatorFunction } from 'rxjs'
import { scan } from 'rxjs/operators'

/**
 * Partially constructs an object from multiple concurrent sources.
 *
 * @returns OperatorFunction<T, T>
 */
export const assign = <T>(): OperatorFunction<Partial<T>, Partial<T>> => {
  return scan((a: Partial<T>, b: Partial<T>) => ({
    ...a,
    ...b,
  }))
}
