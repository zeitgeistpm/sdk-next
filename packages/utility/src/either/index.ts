import { isFunction } from '@polkadot/util/is/function'
import { throws } from '../error'
import * as O from '../option'

/**
 * Either type.
 *
 * Can represent either a left or a right value. Used often in
 * error handling where something can either succeede(R) or fail(L).
 */
export type Either<L, R> = Left<L> | Right<R>
export type Right<R> = { right: R }
export type Left<L> = { left: L }

/**
 * Create a Right with value.
 */
export const right = <A>(right: A): Right<A> => ({
  right,
})

/**
 * Create a Left with value.
 */
export const left = <A>(left: A): Left<A> => ({
  left,
})

/**
 * Typeguard for right values
 */
export const isRight = <L, R>(either: Either<L, R>): either is Right<R> => 'right' in either

/**
 * Typeguard for left values
 */
export const isLeft = <L, R>(either: Either<L, R>): either is Left<L> => 'left' in either

/**
 * Maps the right value if present with the mapping function.
 *
 * @example ```typescript
 * map(right(1), num => num + 1) === right(2)
 * map(left("error"), num => num + 1) === left("error")
 * ```
 */
export const map = <L, R, B>(f: (a: R) => B, either: Either<L, R>): Either<L, B> =>
  isLeft(either) ? either : { right: f(either.right) }

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
export const chain = <L, R, B>(f: (a: R) => Either<L, B>, either: Either<L, R>): Either<L, B> =>
  isLeft(either) ? either : f(either.right)

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
 * @example ```typescript
 *   unrightOr(right(1), 2) // -> 1
 *   unrightOr(left(NaN), 2) // -> 2
 * ```
 */
export const unrightOr = <L, R>(or: OrHandler<L, R>, either: Either<L, R>): R =>
  isRight(either) ? either.right : isFunction(or) ? or(either.left) : or

/**
 * Tries to unwrap the left value or uses the default value or lazy function
 * to produce the correct result.
 *
 * @example ```typescript
 *   unleftOr(right(1), 2) // -> 2
 *   unleftOr(left(NaN), 2) // -> NaN
 * ```
 */
export const unleftOr = <L, R>(or: OrHandler<R, L>, either: Either<L, R>): L =>
  isLeft(either) ? either.left : isFunction(or) ? or(either.right) : or

export type EitherInterface<L, R> = Either<L, R> & {
  unwrap: () => R
  /**
   * Unwraps a the right value into an Option<R>
   *
   * @example ```typescript
   * either(right(1)).unright().unwrapOr(2) === 1
   * either(left(NaN)).unright().unwrapOr(2) === 2
   * ```
   */
  unright: () => O.OptionInterface<R>
  /**
   * Unwraps a the left value into an Option<L>
   *
   * @example ```typescript
   * either(right(1)).unleft().unwrapOr(2) === 2
   * either(left(NaN)).unleft().unwrapOr(2) === NaN
   * ```
   */
  unleft: () => O.OptionInterface<L>
  /**
   * Tries to unwrap the right value or uses the default value or lazy function
   * to produce the correct result(or throw error).
   *
   * @example ```typescript
   *   either(right(1)).rightOr(2) // -> 1
   *   either(left(NaN)).rightOr(2) // -> 2
   * ```
   */
  unrightOr: (or: OrHandler<L, R>) => R
  /**
   * Tries to unwrap the left value or uses the default value or lazy function
   * to produce the correct result.
   *
   * @example ```typescript
   *   either(right(1)).unleftOr(2) // -> 2
   *   either(left(NaN)).unleftOr(2) // -> NaN
   * ```
   */
  unleftOr: (or: OrHandler<R, L>) => L
  /**
   * Maps the right value if present with the mapping function.
   *
   * @example ```typescript
   * either(right(1)).map(num => num + 1) === right(2)
   * ```
   */
  map: <B>(f: (a: R) => B) => EitherInterface<L, B>
  /**
   * Chains eithers where it returns out a Left if one of the composed functions returns left
   * or the Right value if all succeedes.
   *
   * @example
   * ```typescript
   * const validate = (str: string) =>
   *   str === 'correct' ? right(1) : left(new Error('string has to be "correct"'))
   *
   * either(right('correct'))
   *   .chain(validate)
   *   .unrightOr(throws) // -> 1
   *
   * either(left('error'))
   *   .chain(validate)
   *   .unrightOr(throws) // -> throws error
   * ```
   */
  chain: <B>(f: (a: R) => Either<L, B>) => EitherInterface<L, B>
}

/**
 * Bind methods to a Either object for utility and "syntactic" sugar.
 *
 * @param _either Either<L, R>
 * @returns EitherInterface<L, R>
 */
export const either = <L, R>(_either: Either<L, R>): EitherInterface<L, R> => ({
  ..._either,
  unwrap: () => unrightOr<L, R>(throws, _either),
  unright: () => unright(_either),
  unleft: () => unleft(_either),
  unrightOr: (or: OrHandler<L, R>) => unrightOr(or, _either),
  unleftOr: (or: OrHandler<R, L>) => unleftOr(or, _either),
  map: <B>(f: (a: R) => B) => either(map(f, _either)),
  chain: <B>(f: (a: R) => Either<L, B>) => either(chain(f, _either)),
})

/**
 * Tries a function and converts the caught error to Left or returned value to Right.
 *
 * @param fn () => R - function to try catch
 * @returns Either<Error, R>
 */
export const tryCatch = <Error, R>(fn: () => R): Either<Error, R> => {
  try {
    return right(fn())
  } catch (error) {
    return left(error as Error)
  }
}
