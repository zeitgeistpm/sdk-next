import { isFunction } from '@polkadot/util'

export type Option<A> = Some<A> | None

export type Some<A> = {
  __tag: 'some'
  value: A
}

export type None = {
  __tag: 'none'
}

export const some = <A>(value: A): Some<A> => ({
  __tag: 'some',
  value,
})

export const none = (): None => ({
  __tag: 'none',
})

export type OrHandler<A> = A | (() => A)

export const isSome = <A>(option: Option<A>): option is Some<A> =>
  option.__tag === 'some'

export const isNone = <A>(option: Option<A>): option is None =>
  option.__tag === 'none'

export const map = <A, B>(option: Option<A>, f: (a: A) => B): Option<B> =>
  isNone(option) ? option : some(f(option.value))

export const chain = <A, B>(
  option: Option<A>,
  f: (a: A) => Option<B>,
): Option<B> => (isNone(option) ? option : f(option.value))

export const from = <A>(value?: A | null): OptionInterface<A> =>
  option(value ? some(value) : none())

export const unwrapOr = <A>(option: Option<A>, or: OrHandler<A>): A => {
  if (isSome(option)) return option.value
  else if (isFunction(or)) return or()
  return or
}

export type OptionInterface<A> = Option<A> & {
  unwrapOr: (or: OrHandler<A>) => A
  map: <B>(f: (a: A) => B) => OptionInterface<B>
  chain: <B>(f: (a: A) => Option<B>) => OptionInterface<B>
}

export const option = <A>(_option: Option<A>): OptionInterface<A> => ({
  ..._option,
  unwrapOr: (or: OrHandler<A>) => unwrapOr(_option, or),
  map: <B>(f: (a: A) => B) => option(map(_option, f)),
  chain: <B>(f: (a: A) => Option<B>) => option(chain(_option, f)),
})
