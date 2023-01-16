export type Infinity = typeof Infinity & { _opaque: typeof InfinitySym }

declare const InfinitySym: unique symbol

export const infinity = Infinity as Infinity

export const isInfinity = (number: number): number is Infinity => number === Infinity
