import { AEither, IAEither, aeither } from '../either/aeither'
import { either, IEither, left, right, unleft, unright, unrightOr } from '../either'
import { throws } from '../error'

/**
 * A task that returns an EitherInterface type with syntactic sugar for async unwrapping.
 *
 * @generic L - left type
 * @generic R - right type
 * @generic Args extends ReadonlyArray<unknown>> - args passed to the task
 */
export type TaskEither<L, R, Args extends ReadonlyArray<unknown>> = (
  ...args: Args
) => Promise<IEither<L, R>> & IAEither<L, R>

/**
 * Create a TaskEither from an async function.
 *
 * @generic R - right value and return type of function
 * @generic L - left value and the error type of the function if it throws
 * @param fn (...args: Args) => Promise<R>
 * @returns TaskEither<L, R, Args>
 */
export const from = <R, L = Error, Args extends ReadonlyArray<unknown> = []>(
  fn: (...args: Args) => Promise<R>,
): TaskEither<L, R, Args> => {
  return (...args) => {
    const inner: AEither<L, R> = new Promise(async (resolve, reject) => {
      try {
        const value: R = await fn(...args)
        resolve(either(right(value)))
      } catch (error) {
        reject(either(left(error as L)))
      }
    })

    return Object.assign(inner, aeither(inner))
  }
}
