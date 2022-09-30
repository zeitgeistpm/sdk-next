import { isNumber } from '@polkadot/util'
import { define } from 'superstruct'

/**
 * MarketId opaque(newtype)
 */
export type MarketId = number & { readonly MarketId: unique symbol }

/**
 * Typeguard for market ids.
 *
 * @param n any
 * @returns  n is MarketId
 */
export const isMarketId = (n: any): n is MarketId => isNumber(n)

/**
 * Io type for validation of market ids.
 */
export const IOMarketId = define<MarketId>('MarketId', isMarketId)
