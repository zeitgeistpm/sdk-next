import { isFunction } from '@polkadot/util'

export type Option<A> = Some<A> | None

export type Some<A> = {
  __tag: 'some'
  value: A
}

export type None = {
  __tag: 'none'
}

export type Or<A> = A | (() => A)

export const isSome = <A>(option: Option<A>): option is Some<A> =>
  option.__tag === 'some'

export const isNone = <A>(option: Option<A>): option is None =>
  option.__tag === 'none'

export const unwrapOr = <A>(option: Option<A>, or: Or<A>): A => {
  if (isSome(option)) return option.value
  else if (isFunction(or)) return or()
  return or
}

export type MonadicOption<A> = Option<A> & {
  unwrapOr: (or: Or<A>) => A
}

export const option = <A>(option: Option<A>): MonadicOption<A> => ({
  ...option,
  unwrapOr: (or: Or<A>) => unwrapOr(option, or),
})

export const some = <A>(value: A): Some<A> => ({
  __tag: 'some',
  value,
})

export const none = (): None => ({
  __tag: 'none',
})
