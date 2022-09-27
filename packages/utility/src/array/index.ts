/**
 * Unpack the item type of an array.
 */
export type Unpacked<T> = T extends (infer U)[] ? U : T

/**
 * Create a range.
 *
 * @param start number
 * @param end number
 * @returns number[]
 */
export const range = (start: number, end: number) => [
  ...Array.from({ length: end - start }, (_, k) => k + start),
  end,
]

/**
 * Zip two arrays.
 *
 * @generic A - item type of fst placement array
 * @generic B - item type of snd placement array
 * @param as A[]
 * @param bs B[]
 * @returns [A, B][]
 */
export const zip = <A, B>(as: A[], bs: B[]): [A, B][] => as.map((a, i) => [a, bs[i]])
