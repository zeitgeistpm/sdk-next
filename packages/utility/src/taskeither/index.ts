import { either, EitherInterface, left, right } from '../either'
import { Task } from '../task'

export type TaskEither<L, R, Args extends ReadonlyArray<unknown>> = Task<
  EitherInterface<L, R>,
  Args
>

export const from = <R, Args extends ReadonlyArray<unknown>>(
  fn: (...args: Args) => Promise<R>,
): TaskEither<Error, R, Args> => {
  return async (...args) => {
    try {
      const value: R = await fn(...args)
      return either(right(value))
    } catch (error) {
      return either(left(error as Error))
    }
  }
}
