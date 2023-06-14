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
export const from = <L, R>(
  f: () => Promise<R>,
  errorWrapper?: (message: string, error: Error) => L,
): IAEither<L, R> => {
  return aeither(
    new Promise(async resolve => {
      try {
        const value: R = await f()
        resolve(E.either(E.right(value)))
      } catch (error: any) {
        resolve(E.either(E.left(errorWrapper ? errorWrapper(error.message, error) : error)))
      }
    }),
  )
}
/**
 * Tries to unwrap the right value into a promised right value. Throws error if value is left.
 * @throws Error
 *
 * @returns Promise<R>
 */
export const unwrap = async <L, R>(either: AEither<L, R>): Promise<R> =>
  E.unrightOr<L, R>(throws, await either)

/**
 * Tries to unwrap the left value into a promised left value. Throws error if value is right.
 * @throws Error
 *
 * @returns Promise<L>
 */
export const unwrapLeft = async <L, R>(either: AEither<L, R>): Promise<L> =>
  E.unleftOr<L, R>(throws, await either)

/**
 * Unwraps a the right value into an optional value ignoring lefts by returning `none`
 *
 * @returns Promise<O.IOption<R>>
 */
export const unright = async <L, R>(either: AEither<L, R>): Promise<O.IOption<R>> =>
  E.unright<L, R>(await either)

/**
 * Unwraps a the left value into an optional value ignoring rights by returning `none`
 *
 * @returns Promise<O.IOption<L>>
 */
export const unleft = async <L, R>(either: AEither<L, R>): Promise<O.IOption<L>> =>
  E.unleft<L, R>(await either)

/**
 * Tries to unwrap the right value or uses the default value or lazy function
 * to produce the correct result(or throw error).
 *
 * @returns Promise<R>
 */
export const unrightOr = async <L, R, B = R>(
  or: OrHandler<L, R | B>,
  either: AEither<L, R>,
): Promise<R | B> => E.unrightOr<L, R, B>(or, await either)

/**
 * Tries to unwrap the left value or uses the default value or lazy function
 * to produce the correct result.
 *
 * @returns Promise<L>
 */
export const unleftOr = async <L, R, B = L>(
  or: OrHandler<R, L | B>,
  either: AEither<L, R>,
): Promise<L | B> => E.unleftOr<L, R, B>(or, await either)

/**
 * Maps the right value if present with the mapping function.
 *
 * @returns IAEither<L, B>
 */
export const map = async <L, R, B>(f: (a: R) => B, either: AEither<L, R>): AEither<L, B> =>
  E.either(E.right(f(E.unwrap(await either))))

/**
 * Chains eithers where it returns out a Left if one of the composed functions returns left
 * or the Right value if all succeedes.
 *
 * @returns IAEither<L, B>
 */
export const bind = async <L, R, B>(
  f: (a: R) => AEither<L, B> | Promise<B>,
  either: AEither<L, R>,
): AEither<L, B> => {
  try {
    return E.either(E.right((await f(E.unwrap(await either))) as B))
  } catch (error) {
    return E.either(E.left(error as L))
  }
}

/**
 * Alias for unrightOr
 */
export const unwrapOr = unrightOr

/**
 * Interface over AEither to call methods directly on Either objects that implements it.
 */
export type IAEither<L, R> = {
  /**
   * Tries to unwrap the right value into a promised right value. Throws error if value is left.
   * @throws Error
   *
   * @returns Promise<R>
   */
  unwrap: () => Promise<R>
  /**
   * Tries to unwrap the right value or uses the default value or lazy function
   * to produce the correct result(or throw error).
   */
  unwrapOr: <B>(or: OrHandler<L, R | B>) => Promise<R | B>
  /**
   * Tries to unwrap the left value into a promised left value. Throws error if value is right.
   * @throws Error
   *
   * @returns Promise<L>
   */
  unwrapLeft: () => Promise<L>
  /**
   * Unwraps a the right value into an optional value ignoring lefts by returning `none`
   *
   * @returns Promise<O.IOption<R>>
   */
  unright: () => Promise<O.IOption<R>>
  /**
   * Unwraps a the left value into an optional value ignoring rights by returning `none`
   *
   * @returns Promise<O.IOption<L>>
   */
  unleft: () => Promise<O.IOption<L>>
  /**
   * Tries to unwrap the right value or uses the default value or lazy function
   * to produce the correct result(or throw error).
   *
   * @returns Promise<R>
   */
  unrightOr: <B>(or: OrHandler<L, R | B>) => Promise<R | B>
  /**
   * Tries to unwrap the left value or uses the default value or lazy function
   * to produce the correct result.
   *
   * @returns Promise<L>
   */
  unleftOr: <B>(or: OrHandler<R, L | B>) => Promise<L | B>
  /**
   * Maps the right value if present with the mapping function.
   *
   * @returns IAEither<L, B>
   */
  map: <B>(f: (a: R) => B) => IAEither<L, B>
  /**
   * Chains eithers where it returns out a Left if one of the composed functions returns left
   * or the Right value if all succeedes.
   *
   * @returns IAEither<L, B>
   */
  bind: <B>(f: (a: R) => AEither<L, B> | Promise<B>) => IAEither<L, B>
  /**
   * Return the raw either async.
   *
   * @returns Promise<E.IEither<L, R>>
   */
  asEither: () => Promise<E.IEither<L, R>>
  /**
   * Boolean check if value is right
   *
   * @returns Promise<false | E.IEither<L, R>>
   */
  isRight: () => Promise<null | E.IEither<L, R>>
  /**
   * Boolean check if value is left
   *
   * @returns Promise<false | E.IEither<L, R>>
   */
  isLeft: () => Promise<null | E.IEither<L, R>>
} & Promise<R>

/**
 * Or handler for async either values.
 *
 * @generic P - the input value, in case of Left it will be R and vice versa.
 */
export type OrHandler<P, A> = A | ((value: P) => A)

/**
 * Bind methods to a AEither object for utility and "syntactic" sugar over async eithers..
 *
 * @param _either AEither<L, R>
 * @returns IAEither<L, R>
 */
export const aeither = <L, R>(_either: AEither<L, R>): IAEither<L, R> => ({
  unwrap: async () => unwrap(_either),
  unwrapOr: <B>(or: OrHandler<L, R | B>) => unrightOr<L, R, B>(or, _either),
  unwrapLeft: async () => unwrapLeft(_either),
  unright: async () => unright(_either),
  unleft: async () => unleft(_either),
  unrightOr: <B>(or: OrHandler<L, R | B>) => unrightOr<L, R, B>(or, _either),
  unleftOr: <B>(or: OrHandler<R, L | B>) => unleftOr<L, R, B>(or, _either),
  map: <B>(f: (a: R) => B) => aeither<L, B>(map<L, R, B>(f, _either)),
  bind: <B>(f: (a: R) => AEither<L, B> | Promise<B>) => aeither(bind<L, R, B>(f, _either)),
  asEither: async () => E.either(await _either),
  isRight: async () => (await _either).isRight(),
  isLeft: async () => (await _either).isLeft(),
  then(onResolve, onReject) {
    _either.then(value => {
      if (E.isRight(value)) {
        onResolve?.(value.right)
      } else {
        onReject?.(value.left)
      }
    })
    return this as any
  },
  catch(onReject) {
    _either.then(value => {
      if (E.isLeft(value)) {
        onReject?.(value.left)
      }
    })
    return this as any
  },
  finally(onFinally) {
    onFinally?.()
    return this as any
  },
  [Symbol.toStringTag]: `IAEither<L, R>`,
})
