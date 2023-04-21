import { isFunction } from '@polkadot/util/is/function'
import { throws } from '../error'
import * as O from '../option'

/**
 * Either type.
 *
 * Can represent either a left or a right value. Used often in
 * error handling where something can either succeede(R) or fail(L).
 *
 * @typeParam L - the left value type
 * @typeParam R - the right value type
 *
 */
export type Either<L, R> = Left<L> | Right<R>

/**
 * Right type
 * @typeParam R - the right value type
 */
export type Right<R> = { right: R }

/**
 * Left type
 * @typeParam L - the left value type
 */
export type Left<L> = { left: L }

/**
 * Right type constructor
 * @typeParam R - the right value type
 */
export const right = <A>(right: A): Right<A> => ({
  right,
})

/**
 * Left type constructor
 * @typeParam L - the left value type
 */
export const left = <A>(left: A): Left<A> => ({
  left,
})

export const isEither = (obj: any): obj is Either<any, any> =>
  typeof obj === 'object' && obj && (isRight(obj) || isLeft(obj))

/**
 * Typeguard for right values
 */
export const isRight = <L, R>(either: Either<L, R>): either is Right<R> => 'right' in either

/**
 * Typeguard for left values
 */
export const isLeft = <L, R>(either: Either<L, R>): either is Left<L> => 'left' in either

/**
 * Unwrap the right value. Throws if the either is a left.
 */
export const unwrap = <L, R>(either: Either<L, R>) => unrightOr<L, R>(throws, either)

/**
 * Unwrap the right value. Throws if the either is a left.
 */
export const unwrapLeft = <L, R>(either: Either<L, R>) => unleftOr<L, R>(throws, either)

/**
 * Maps the right value if present with the mapping function.
 *
 * @example ```typescript
 * map(right(1), num => num + 1) === right(2)
 * map(left("error"), num => num + 1) === left("error")
 * ```
 */
export const map = <L, R, B>(f: (a: R) => B, either: Either<L, R>): Either<L, B> =>
  isLeft(either) ? either : right(f(either.right))

/**
 * Chains eithers, where it returns out a Left if one of the composed functions returns left.
 * Or return the Right value if all succeedes with the composed value from the last chain computation.
 *
 * @example
 * ```typescript
 * const validate = (str: string) =>
 *   str === 'correct' ? right(1) : left(new Error('string has to be "correct"'))
 *
 * chain(validate, right('correct'))
 *   .unrightOr(throws) // -> 1
 *
 * chain(validate, left('error'))
 *   .unrightOr(throws) // -> throws error
 * ```
 * ```
 */
export const bind = <L, R, B>(
  f: (a: R) => Either<L, B> | B,
  either: Either<L, R>,
): Either<L, B> => {
  if (isLeft(either)) {
    return either
  }

  const next = f(either.right)

  if (isEither(next)) {
    return next
  }

  return right(next)
}

/**
 * Unwraps a the right value into an Option<R>
 *
 * @example ```typescript
 * unright(right(1)).unwrapOr(2) === 1
 * unright(left(NaN)).unwrapOr(2) === 2
 * ```
 */
export const unright = <L, R>(either: Either<L, R>) =>
  O.option(isRight(either) ? O.some(either.right) : O.none())

/**
 * Unwraps a the left value into an Option<L>
 *
 * @example ```typescript
 * unleft(right(1)).unwrapOr(2) === 2
 * unleft(left(NaN)).unwrapOr(2) === NaN
 * ```
 */
export const unleft = <L, R>(either: Either<L, R>) =>
  O.option(isLeft(either) ? O.some(either.left) : O.none())

/**
 * @generic P - the input value, in case of Left it will be R and vice versa.
 */
export type OrHandler<P, A> = A | ((value: P) => A)

/**
 * Tries to unwrap the right value or uses the default value or lazy function
 * to produce the correct result.
 *
 * @typeParam L - the left value type
 * @typeParam R - the right value type
 *
 * @example ```typescript
 *   unrightOr(right(1), 2) // -> 1
 *   unrightOr(left(NaN), 2) // -> 2
 * ```
 */
export const unrightOr = <L, R, B = R>(
  or: OrHandler<L, R | B>,
  either: Either<L, R | B>,
): R | B => (isRight(either) ? either.right : isFunction(or) ? or(either.left) : or)

/**
 * Tries to unwrap the left value or uses the default value or lazy function
 * to produce the correct result.
 *
 * @typeParam L - the left value type
 * @typeParam R - the right value type
 *
 * @example ```typescript
 *   unleftOr(right(1), 2) // -> 2
 *   unleftOr(left(NaN), 2) // -> NaN
 * ```
 */
export const unleftOr = <L, R, B = L>(
  or: OrHandler<R, L | B>,
  either: Either<L | B, R>,
): L | B => (isLeft(either) ? either.left : isFunction(or) ? or(either.right) : or)

/**
 * Alias for unrightOr
 */
export const unwrapOr = unrightOr

/**
 * Interface over either to call either methods directly on Either objects that implements it.
 *
 * @typeParam L - the left value type
 * @typeParam R - the right value type
 */
export type IEither<L, R> = Either<L, R> & {
  /**
   * Tries to unwrap the right value. Throws error if value is left.
   * @throws Error
   */
  unwrap: () => R
  /**
   * Tries to unwrap the right value or uses the default value or lazy function
   * to produce the correct result(or throw error).
   */
  unwrapOr: <B>(or: OrHandler<L, R | B>) => R | B
  /**
   * Tries to unwrap the left value. Throws error if value is right.
   * @throws Error
   */
  unwrapLeft: () => L
  /**
   * Unwraps a the right value into an Option<R>
   */
  unright: () => O.IOption<R>
  /**
   * Unwraps a the left value into an Option<L>
   */
  unleft: () => O.IOption<L>
  /**
   * Tries to unwrap the right value or uses the default value or lazy function
   * to produce the correct result(or throw error).
   */
  unrightOr: <B>(or: OrHandler<L, R | B>) => R | B
  /**
   * Tries to unwrap the left value or uses the default value or lazy function
   * to produce the correct result.
   */
  unleftOr: (or: OrHandler<R, L>) => L
  /**
   * Maps the right value if present with the mapping function.
   */
  map: <B>(f: (a: R) => B) => IEither<L, B>
  /**
   * Chains eithers where it returns out a Left if one of the composed functions returns left
   * or the Right value if all succeedes.
   */
  bind: <B>(f: (a: R) => Either<L, B> | B) => IEither<L, B>
  /**
   * Boolean check if value is right
   *
   * @returns boolean & E.IEither<L, R>
   */
  isRight: () => null | IEither<L, R>
  /**
   * Boolean check if value is left
   *
   * @returns boolean & E.IEither<L, R>
   */
  isLeft: () => null | IEither<L, R>
}

/**
 * Bind methods to a Either object for utility and "syntactic" sugar.
 *
 * @param _either Either<L, R>
 * @returns EitherInterface<L, R>
 */
export const either = <L, R>(_either: Either<L, R>): IEither<L, R> => ({
  ..._either,
  unwrap: () => unwrap(_either),
  unwrapOr: <B>(or: OrHandler<L, R | B>) => unrightOr<L, R, B>(or, _either),
  unwrapLeft: () => unwrapLeft(_either),
  unright: () => unright(_either),
  unleft: () => unleft(_either),
  unrightOr: <B>(or: OrHandler<L, R | B>) => unrightOr<L, R, B>(or, _either),
  unleftOr: <B>(or: OrHandler<R, L | B>) => unleftOr<L, R, B>(or, _either),
  map: <B>(f: (a: R) => B) => either(map(f, _either)),
  bind: <B>(f: (a: R) => Either<L, B> | B) => either(bind(f, _either)),
  isRight: () => (isRight(_either) ? either<L, R>(_either) : null),
  isLeft: () => (isLeft(_either) ? either<L, R>(_either) : null),
})

/**
 * Tries a function and converts the caught error to Left or returned value to Right.
 *
 * @param fn () => R - function to try catch
 * @returns Either<Error, R>
 */
export const tryCatch = <Error, R>(fn: () => R): IEither<Error, R> => {
  try {
    return either(right(fn()))
  } catch (error) {
    return either(left(error as Error))
  }
}
