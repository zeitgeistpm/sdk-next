import { async } from 'rxjs'
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
   * Tries to unwrap the right value or uses the default value or lazy function
   * to produce the correct result(or throw error).
   */
  unrightOr: (or: OrHandler<L, R>) => Promise<R>
  /**
   * Tries to unwrap the left value or uses the default value or lazy function
   * to produce the correct result.
   */
  unleftOr: (or: OrHandler<R, L>) => Promise<L>
  /**
   * Maps the right value if present with the mapping function.
   */
  map: <B>(f: (a: R) => B) => IAEither<L, B>
  /**
   * Chains eithers where it returns out a Left if one of the composed functions returns left
   * or the Right value if all succeedes.
   */
  bind: <B>(f: (a: R) => AEither<L, B>) => IAEither<L, B>
} & Promise<R>

/**
 * @generic P - the input value, in case of Left it will be R and vice versa.
 */
export type OrHandler<P, A> = A | ((value: P) => A)

const map = async <L, R, B>(f: (a: R) => B, either: AEither<L, R>): AEither<L, B> => {
  const a = (await either).unwrap()
  return E.either(E.right(f(a)))
}

export const bind = <L, R, B>(
  f: (a: R) => AEither<L, B>,
  either: AEither<L, R>,
): AEither<L, B> => either.then(value => f(value.unwrap()))

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
   * Tries to unwrap the right value or uses the default value or lazy function
   * to produce the correct result(or throw error).
   */
  unrightOr: async or => E.unrightOr(or, await either),
  /**
   * Tries to unwrap the left value or uses the default value or lazy function
   * to produce the correct result.
   */
  unleftOr: async or => E.unleftOr(or, await either),
  /**
   * Maps the right value if present with the mapping function.
   */
  map: <B>(f: (a: R) => B) => aeither<L, B>(map<L, R, B>(f, either)),
  /**
   * Chains eithers where it returns out a Left if one of the composed functions returns left
   * or the Right value if all succeedes.
   */
  bind: <B>(f: (a: R) => AEither<L, B>) => aeither(bind<L, R, B>(f, either)),
  /**
   * Implementation of Promise.then
   */
  then(onResolve, onReject) {
    either.then(value => {
      if (E.isRight(value)) {
        onResolve?.(value.right)
      } else {
        onReject?.(value.left)
      }
    })
    return this as any
  },
  /**
   * Implementation of Promise.catch
   */
  catch(onReject) {
    either.then(value => {
      if (E.isLeft(value)) {
        onReject?.(value.left)
      }
    })
    return this as any
  },
  /**
   * Implementation of Promise.finnally
   */
  finally(onFinally) {
    onFinally?.()
    return this as any
  },
  [Symbol.toStringTag]: `IAEither<L, R>`,
})
