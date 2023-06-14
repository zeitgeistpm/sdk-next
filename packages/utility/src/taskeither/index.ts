import * as Ae from '../aeither'

/**
 * A task that returns an EitherInterface type with syntactic sugar for async unwrapping.
 *
 * @generic L - left type
 * @generic R - right type
 * @generic Args extends ReadonlyArray<unknown>> - args passed to the task
 */
export type TaskEither<L, R, Args extends ReadonlyArray<unknown>> = (
  ...args: Args
) => Ae.IAEither<L, R>

/**
 * Create a TaskEither from an async function.
 *
 * @generic R - right value and return type of function
 * @generic L - left value and the error type of the function if it throws
 * @param fn (...args: Args) => Promise<R>
 * @returns TaskEither<L, R, Args>
 */
export const from = <R, L extends Error = Error, Args extends ReadonlyArray<unknown> = []>(
  fn: (...args: Args) => Promise<R>,
  errorWrapper?: (message: string, error: Error) => L,
): TaskEither<L, R, Args> => {
  return (...args) => {
    return Ae.from(() => fn(...args), errorWrapper)
  }
}
