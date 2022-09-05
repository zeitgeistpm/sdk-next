import { Either, left, right } from '../either'
import { Task } from '../task'

export type TaskEither<L, R, Args extends ReadonlyArray<unknown>> = Task<
  Either<L, R>,
  Args
>

export const from = <R, Args extends ReadonlyArray<unknown>>(
  fn: (...args: Args) => Promise<R>,
): TaskEither<Error, R, Args> => {
  return async (...args) => {
    try {
      return right(await fn(...args))
    } catch (error) {
      return left(error as Error)
    }
  }
}
