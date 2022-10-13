import { isFunction } from '@polkadot/util/is/function'
import { throws } from '../error'

export type Option<A> = Some<A> | None

export type Some<A> = {
  __option: 'some'
  value: A
}

export type None = {
  __option: 'none'
}

export const some = <A>(value: A): Some<A> => ({
  __option: 'some',
  value,
})

export const none = (): None => ({
  __option: 'none',
})

export type OrHandler<A> = A | (() => A)

export const isSome = <A>(option: Option<A>): option is Some<A> => option.__option === 'some'

export const isNone = <A>(option: Option<A>): option is None => option.__option === 'none'

export const map = <A, B>(f: (a: A) => B, option: Option<A>): Option<B> =>
  isNone(option) ? option : some(f(option.value))

export const chain = <A, B>(f: (a: A) => Option<B>, option: Option<A>): Option<B> =>
  isNone(option) ? option : f(option.value)

export const from = <A>(value: A | null): IOption<A> =>
  option(value ? some(value) : (none() as Option<A>))

export const unwrap = <A>(option: Option<A>): A => unwrapOr<A>(throws as OrHandler<A>, option)

export const unwrapOr = <A>(or: OrHandler<A>, option: Option<A>): A => {
  if (isSome(option)) return option.value
  else if (isFunction(or)) return or()
  return or
}

export type IOption<A> = Option<A> & {
  unwrap: () => A
  unwrapOr: (or: OrHandler<A>) => A
  map: <B>(f: (a: A) => B) => IOption<B>
  chain: <B>(f: (a: A) => Option<B>) => IOption<B>
}

export const option = <A>(_option: Option<A>): IOption<A> => ({
  ..._option,
  unwrap: () => unwrap(_option),
  unwrapOr: or => unwrapOr(or, _option),
  map: <B>(f: (a: A) => B) => option(map(f, _option)),
  chain: <B>(f: (a: A) => Option<B>) => option(chain(f, _option)),
})
