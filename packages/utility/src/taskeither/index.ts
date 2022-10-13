import * as Ae from '../aeither'
import * as E from '../either'

/**
 * A task that returns an EitherInterface type with syntactic sugar for async unwrapping.
 *
 * @generic L - left type
 * @generic R - right type
 * @generic Args extends ReadonlyArray<unknown>> - args passed to the task
 */
export type TaskEither<L, R, Args extends ReadonlyArray<unknown>> = (
  ...args: Args
) => Promise<E.IEither<L, R>> & Ae.IAEither<L, R>

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
    const either: Ae.AEither<L, R> = Ae.from(fn(...args))
    return Object.assign(either, Ae.aeither(either))
  }
}
