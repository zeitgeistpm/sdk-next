import * as E from '../either'
import { throws } from '../error'
import * as O from '../option'

/**
 * Async Either type.
 */
export type AEither<L, R> = Promise<E.IEither<L, R>>

/**
 * Convert a promise to an async either.
 *
 * @generic L - left type
 * @generic R - right type
 * @param promise Promise<R>
 * @returns AEither<L, R>
 */
export const from = <L, R>(promise: Promise<R>): AEither<L, R> => {
  return new Promise(async (resolve, reject) => {
    try {
      const value: R = await promise
      resolve(E.either(E.right(value)))
    } catch (error) {
      reject(E.either(E.left(error as L)))
    }
  })
}

/**
 * Interface over AEither to call methods directly on Either objects that implements it.
 */
export type IAEither<L, R> = {
  /**
   * Tries to unwrap the right value into a promised right value. Throws error if value is left.
   * @throws Error
   */
  unwrap: () => Promise<R>
  /**
   * Unwraps a the right value into an Promise<O.IOption<R>>
   */
  unright: () => Promise<O.IOption<R>>
  /**
   * Unwraps a the left value into an Promise<O.IOption<L>>
   */
  unleft: () => Promise<O.IOption<L>>
  /**
   * Maps the right value if present with the mapping function.
   */
  map: <B>(f: (a: R) => B) => AEither<L, B>
  /**
   * Chains eithers where it returns out a Left if one of the composed functions returns left
   * or the Right value if all succeedes.
   */
  bind: <B>(f: (a: R) => AEither<L, B>) => AEither<L, B>
}

/**
 * Bind methods to a AEither object for utility and "syntactic" sugar over async eithers..
 *
 * @param either AEither<L, R>
 * @returns IAEither<L, R>
 */
export const aeither = <L, R>(either: AEither<L, R>): IAEither<L, R> => ({
  /**
   * Tries to unwrap the right value into a promised right value. Throws error if value is left.
   * @throws Error
   */
  unwrap: async () => E.unrightOr<L, R>(throws, await either),
  /**
   * Unwraps a the right value into an Promise<O.IOption<R>>
   */
  unright: async () => E.unright<L, R>(await either),
  /**
   * Unwraps a the left value into an Promise<O.IOption<L>>
   */
  unleft: async () => E.unleft<L, R>(await either),
  /**
   * Maps the right value if present with the mapping function.
   */
  map: async <B>(f: (a: R) => B) => E.either(E.map<L, R, B>(f, await either)),
  /**
   * Chains eithers where it returns out a Left if one of the composed functions returns left
   * or the Right value if all succeedes.
   */
  bind: async <B>(f: (a: R) => AEither<L, B>) => {
    const value = await either
    return E.either(E.isRight(value) ? await f(value.right) : value)
  },
})
