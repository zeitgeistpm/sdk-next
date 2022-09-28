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

/**
 * Project every N item of an array based on a step.
 *
 * @generic A - item type of array
 * @param array A[]
 * @param step number
 * @returns A[]
 */
export const project = <A>(array: A[], step: number): A[] => {
  let acc: A[] = []
  let curr = step
  for (let i = 0; i < array.length; i++) {
    if (curr === step) {
      acc.push(array[i])
      step = 0
    }
    step++
  }
  return acc
}
