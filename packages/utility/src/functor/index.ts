export type Functor<F, P> = F extends (...args: any[]) => any ? F & P : never

export const functor = <F extends (...args: any[]) => any, P>(fun: F, props: P): Functor<F, P> =>
  Object.assign(fun, props) as Functor<F, P>
