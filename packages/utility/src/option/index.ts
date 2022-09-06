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

export const map = <A, B>(f: (a: A) => B, option: Option<A>): Option<B> =>
  isNone(option) ? option : some(f(option.value))

export const chain = <A, B>(
  f: (a: A) => Option<B>,
  option: Option<A>,
): Option<B> => (isNone(option) ? option : f(option.value))

export const from = <A>(value: A | null): OptionInterface<A> =>
  option(value ? some(value) : (none() as Option<A>))

export const unwrap = <A>(option: Option<A>): A =>
  unwrapOr<A>(() => {
    throw new Error('')
  }, option)

export const unwrapOr = <A>(or: OrHandler<A>, option: Option<A>): A => {
  if (isSome(option)) return option.value
  else if (isFunction(or)) return or()
  return or
}

export type OptionInterface<A> = Option<A> & {
  unwrap: (option: Option<A>) => A
  unwrapOr: (or: OrHandler<A>) => A
  map: <B>(f: (a: A) => B) => OptionInterface<B>
  chain: <B>(f: (a: A) => Option<B>) => OptionInterface<B>
}

export const option = <A>(_option: Option<A>): OptionInterface<A> => ({
  ..._option,
  unwrap: option => unwrap(option),
  unwrapOr: or => unwrapOr(or, _option),
  map: <B>(f: (a: A) => B) => option(map(f, _option)),
  chain: <B>(f: (a: A) => Option<B>) => option(chain(f, _option)),
})
