import { isFunction } from '@polkadot/util'
import { OptionInterface, none, option, some } from './option'

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

export const map = <L, R, B>(
  either: Either<L, R>,
  f: (a: R) => B,
): Either<L, B> => (isLeft(either) ? either : { right: f(either.right) })

export const unleft = <L, R>(either: Either<L, R>) =>
  option(isLeft(either) ? some(either.left) : none())

export const unright = <L, R>(either: Either<L, R>) =>
  option(isRight(either) ? some(either.right) : none())

export type OrHandler<P, A> = A | ((value: P) => A)

export const unrightOr = <L, R>(either: Either<L, R>, or: OrHandler<L, R>): R =>
  isRight(either) ? either.right : isFunction(or) ? or(either.left) : or

export const unleftOr = <L, R>(either: Either<L, R>, or: OrHandler<R, L>): L =>
  isLeft(either) ? either.left : isFunction(or) ? or(either.right) : or

export type EitherInterface<L, R> = Either<L, R> & {
  unleft: () => OptionInterface<L>
  unright: () => OptionInterface<R>
  unrightOr: (or: OrHandler<L, R>) => R
  unleftOr: (or: OrHandler<R, L>) => L
  map: <B>(f: (a: R) => B) => Either<L, B>
}

export const either = <L, R>(either: Either<L, R>): EitherInterface<L, R> => ({
  ...either,
  unleft: () => unleft(either),
  unright: () => unright(either),
  unrightOr: (or: OrHandler<L, R>) => unrightOr(either, or),
  unleftOr: (or: OrHandler<R, L>) => unleftOr(either, or),
  map: <B>(f: (a: R) => B) => map(either, f),
})

export const tryCatch = <Error, R>(fn: () => R) => {
  try {
    return right(fn())
  } catch (error) {
    return left(error as Error)
  }
}
