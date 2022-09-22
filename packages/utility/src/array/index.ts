/**
 * Unpack the item type of an array.
 */
export type Unpacked<T> = T extends (infer U)[] ? U : T
