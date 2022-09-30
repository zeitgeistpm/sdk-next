import { isNumber } from '@polkadot/util'

/**
 * BlockNumber opaque(newtype)
 */
export type BlockNumber = number & { readonly BlockNumber: unique symbol }

/**
 * Typeguard for block nunbers.
 *
 * @param n any
 * @returns  n is BlockNumber
 */
export const isBlockNumber = (n: any): n is BlockNumber => isNumber(n)
