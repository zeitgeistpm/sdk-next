import { Decimal } from 'decimal.js'

/**
 * Acceptable bignumber represantation types.
 */
export type BigNumber = string | number | Decimal

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
