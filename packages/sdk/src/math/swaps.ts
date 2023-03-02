import { Decimal } from 'decimal.js'
import { BASE } from './base'
import { BigNumber } from './bignumber'

/**
 * Helper to convert a float percentage to a swap fee.
 *
 * @param fee string | number | Decimal - the fee as a float '1' | 1 | new Decimal(1) would be 1% swap fee.
 * @returns Decimal
 */
export const swapFeeFromFloat = (fee: BigNumber): Decimal => {
  const feedecimal = new Decimal(fee)
  return feedecimal.mul(BASE.div(100))
}

/**
 * Calculate the spot price for an asset given the balance in and out and weights.
 * Usefull for clientside calculations when rpc calls are costly or not needed.
 *
 * @note Use sdk.context.api.rpc.swaps.getSpotPrice(s) for higher accuracy and verifiability.
 *
 * @param tokenBalanceIn BigNumber - the balance of the asset swapped into the pool
 * @param tokenWeightIn BigNumber - the weight of in asset
 * @param tokenBalanceOut BigNumber - the balance of the asset swapped out of the pool
 * @param tokenWeightOut BigNumber - the weight of out asset
 * @param swapFee BigNumber - the fee of the swap
 * @returns Decimal
 */
export const calcSpotPrice = (
  tokenBalanceIn: BigNumber,
  tokenWeightIn: BigNumber,
  tokenBalanceOut: BigNumber,
  tokenWeightOut: BigNumber,
  swapFee: BigNumber,
) => {
  const numer = new Decimal(tokenBalanceIn).div(new Decimal(tokenWeightIn))
  const denom = new Decimal(tokenBalanceOut).div(new Decimal(tokenWeightOut))
  const ratio = numer.div(denom)
  const scale = new Decimal(1).div(new Decimal(1).minus(new Decimal(swapFee)))
  const spotPrice = ratio.mul(scale)
  return spotPrice
}

/**
 * Calculate the expected amount of asset X gotten out when swaping an asset Y into a pool.
 *
 * @param tokenBalanceIn BigNumber - amount of 'in' asset in the pool
 * @param tokenWeightIn BigNumber - weight of 'in' asset on the pool
 * @param tokenBalanceOut BigNumber - amount of 'out' asset in the pool
 * @param tokenWeightOut BigNumber - weight of 'out' asset on the pool
 * @param tokenAmountIn BigNumber - amount in for the swap
 * @param swapFee BigNumber - swap fee
 * @returns Decimal
 */
export const calcOutGivenIn = (
  tokenBalanceIn: BigNumber,
  tokenWeightIn: BigNumber,
  tokenBalanceOut: BigNumber,
  tokenWeightOut: BigNumber,
  tokenAmountIn: BigNumber,
  swapFee: BigNumber,
) => {
  const weightRatio = new Decimal(tokenWeightIn).div(new Decimal(tokenWeightOut))
  const adjustedIn = new Decimal(tokenAmountIn).times(
    new Decimal(1).minus(new Decimal(swapFee)),
  )
  const y = new Decimal(tokenBalanceIn).div(new Decimal(tokenBalanceIn).plus(adjustedIn))
  const foo = y.pow(weightRatio)
  const bar = new Decimal(1).minus(foo)
  const tokenAmountOut = new Decimal(tokenBalanceOut).times(bar)
  return tokenAmountOut
}

/**
 * Calculate the expected amount of asset X needed to put in to get a certain amount of asset Y out.
 *
 * @param tokenBalanceIn BigNumber - amount of 'in' asset in the pool
 * @param tokenWeightIn BigNumber - weight of 'in' asset on the pool
 * @param tokenBalanceOut BigNumber - amount of 'out' asset in the pool
 * @param tokenWeightOut BigNumber - weight of 'out' asset on the pool
 * @param tokenAmountIn BigNumber - amount in for the swap
 * @param swapFee BigNumber - swap fee
 * @returns Decimal
 */
export const calcInGivenOut = (
  tokenBalanceIn: BigNumber,
  tokenWeightIn: BigNumber,
  tokenBalanceOut: BigNumber,
  tokenWeightOut: BigNumber,
  tokenAmountOut: BigNumber,
  swapFee: BigNumber,
) => {
  const weightRatio = new Decimal(tokenWeightOut).div(new Decimal(tokenWeightIn))
  const diff = new Decimal(tokenBalanceOut).minus(tokenAmountOut)
  const y = new Decimal(tokenBalanceOut).div(diff)
  const foo = y.pow(weightRatio).minus(new Decimal(1))
  const tokenAmountIn = new Decimal(tokenBalanceIn)
    .times(foo)
    .div(new Decimal(1).minus(new Decimal(swapFee)))
  return tokenAmountIn
}

/**
 *
 * @param lowerBound BigNumber - the lower bound of the scalar market
 * @param upperBound BigNumber - the upper bound of the scalar market
 * @param resolvedNumber BigNumber - the resolved number of the scalar market
 * @param shortAssetAmount BigNumber - the amount of short tokens, usually the users balance for the short token
 * @param longAssetAmount BigNumber - the amount of long tokens, usually the users balance for the long token
 * @returns Decimal
 */
export const calcScalarWinnings = (
  lowerBound: BigNumber,
  upperBound: BigNumber,
  resolvedNumber: BigNumber,
  shortAssetAmount: BigNumber,
  longAssetAmount: BigNumber,
): Decimal => {
  const { longTokenValue, shortTokenValue } = calcScalarResolvedPrices(
    lowerBound,
    upperBound,
    resolvedNumber,
  )
  const longRewards = new Decimal(longAssetAmount).mul(longTokenValue)
  const shortRewards = new Decimal(shortAssetAmount).mul(shortTokenValue)

  return new Decimal(longRewards).plus(shortRewards)
}

/**
 *
 * @param lowerBound BigNumber - the lower bound of the scalar market
 * @param upperBound BigNumber - the upper bound of the scalar market
 * @param resolvedNumber BigNumber - the resolved number of the scalar market
 * @returns
 */
export const calcScalarResolvedPrices = (
  lowerBound: BigNumber,
  upperBound: BigNumber,
  resolvedNumber: BigNumber,
): {
  longTokenValue: Decimal
  shortTokenValue: Decimal
} => {
  const priceRange = new Decimal(upperBound).minus(lowerBound)
  const resolvedNumberAsPercentage = new Decimal(resolvedNumber)
    .minus(lowerBound)
    .div(priceRange)

  const longTokenValue = resolvedNumberAsPercentage
  const shortTokenValue = new Decimal(1).minus(resolvedNumberAsPercentage)

  return { longTokenValue, shortTokenValue }
}
