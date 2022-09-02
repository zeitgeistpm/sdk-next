import { isFunction } from '@polkadot/util'
import { MonadicOption, none, option, some } from './option'

export type Either<L, R> = Left<L> | Right<R>

export type Left<L> = { left: L }
export type Right<R> = { right: R }

export const left = <A>(left: A): Left<A> => ({
  left,
})

export const right = <A>(right: A): Right<A> => ({
  right,
})

export const isLeft = <L, R>(either: Either<L, R>): either is Left<L> =>
  'left' in either

export const isRight = <L, R>(either: Either<L, R>): either is Right<R> =>
  'right' in either

export const unleft = <L, R>(either: Either<L, R>) =>
  option(isLeft(either) ? some(either.left) : none())

export const unright = <L, R>(either: Either<L, R>) =>
  option(isRight(either) ? some(either.right) : none())

export type Or<P, A> = A | ((value: P) => A)

export const unrightOr = <L, R>(either: Either<L, R>, or: Or<L, R>): R =>
  isRight(either) ? either.right : isFunction(or) ? or(either.left) : or

export const unleftOr = <L, R>(either: Either<L, R>, or: Or<R, L>): L =>
  isLeft(either) ? either.left : isFunction(or) ? or(either.right) : or

export type MonadicEither<L, R> = Either<L, R> & {
  unleft: () => MonadicOption<L>
  unright: () => MonadicOption<R>
  unrightOr: (or: Or<L, R>) => R
  unleftOr: (or: Or<R, L>) => L
}

export const either = <L, R>(either: Either<L, R>): MonadicEither<L, R> => ({
  ...either,
  unleft: () => unleft(either),
  unright: () => unright(either),
  unrightOr: (or: Or<L, R>) => unrightOr(either, or),
  unleftOr: (or: Or<R, L>) => unleftOr(either, or),
})

export const tryCatch = <Error, R>(fn: () => R) => {
  try {
    return right(fn())
  } catch (error) {
    return left(error as Error)
  }
}
