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
