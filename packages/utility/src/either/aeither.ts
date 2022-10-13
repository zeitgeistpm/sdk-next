import { throws } from '../error'
import * as O from '../option'
import { IEither, unleft, unright, unrightOr } from './index'

/**
 * Async Either type.
 */
export type AEither<L, R> = Promise<IEither<L, R>>

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
}

/**
 * Bind methods to a AEither object for utility and "syntactic" sugar over async eithers..
 *
 * @param either AEither<L, R>
 * @returns IAEither<L, R>
 */
export const aeither = <L, R>(either: AEither<L, R>): IAEither<L, R> => ({
  unwrap: async () => unrightOr<L, R>(throws, await either),
  unright: async () => unright<L, R>(await either),
  unleft: async () => unleft<L, R>(await either),
})
