import Decimal from 'decimal.js'

export type SlippageType = 'buying' | 'selling'

/**
 * Calculates the slippage from a float percentage represtend as a number, string or Decimal
 *
 * @param slippage number | Decimal | string - the slippage represented as a float percentage. '1' being 1%
 * @param type SlippageType - buying or selling
 * @returns Decimal
 */
export const slippageFromFloat = (
  slippage: number | Decimal | string,
  type: SlippageType,
): Decimal => {
  if (type === 'buying') {
    return new Decimal(slippage).div(100).plus(1)
  } else {
    return new Decimal(1).minus(slippage).div(100)
  }
}
