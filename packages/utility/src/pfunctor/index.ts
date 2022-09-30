/**
 * Function with added properties.
 *
 * @generic F extends (...args: any[]) => any - function to augment
 * @generic P - properties to augments function with.
 */
export type PFunctor<F, P> = F extends (...args: any[]) => any ? F & P : never

/**
 * Augment a function with properties.
 *
 * @generic F extends (...args: any[]) => any - function to augment
 * @generic P - properties to augments function with.
 * @param f F
 * @param props P
 * @returns Functor<F, P>
 */
export const pfunctor = <F extends (...args: any[]) => any, P>(f: F, props: P): PFunctor<F, P> =>
  Object.assign(f, props) as PFunctor<F, P>
