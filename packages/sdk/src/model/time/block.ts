import { isNumber } from '@polkadot/util'
/**
 * BlockNumber opaque(newtype)
 */
export type BlockNumber = number & { readonly BlockNumber: unique symbol }

export const isBlockNumber = (n: any): n is BlockNumber => isNumber(n)
