import { BigNumber } from 'bignumber.js'

export type BN = string | number | BigNumber

export const calcRelativeDiff = (expected: BN, actual: BN) => {
  return new BigNumber(expected).minus(new BigNumber(actual)).div(expected).abs()
}

export const calcSpotPrice = (
  tokenBalanceIn: BN,
  tokenWeightIn: BN,
  tokenBalanceOut: BN,
  tokenWeightOut: BN,
  swapFee: BN,
) => {
  const numer = new BigNumber(tokenBalanceIn).div(new BigNumber(tokenWeightIn))
  const denom = new BigNumber(tokenBalanceOut).div(new BigNumber(tokenWeightOut))
  const ratio = numer.div(denom)
  const scale = new BigNumber(1).div(new BigNumber(1).minus(new BigNumber(swapFee)))
  const spotPrice = ratio.multipliedBy(scale)
  return spotPrice
}

export const calcOutGivenIn = (
  tokenBalanceIn: BN, // amount of 'in' asset in the pool
  tokenWeightIn: BN, // weight of 'in' asset on the pool
  tokenBalanceOut: BN, // amount of 'out' asset in the pool
  tokenWeightOut: BN, // weight of 'out' asset on the pool
  tokenAmountIn: BN, // amount in for the swap
  swapFee: BN,
) => {
  const weightRatio = new BigNumber(tokenWeightIn).div(new BigNumber(tokenWeightOut))
  const adjustedIn = new BigNumber(tokenAmountIn).times(
    new BigNumber(1).minus(new BigNumber(swapFee)),
  )
  const y = new BigNumber(tokenBalanceIn).div(
    new BigNumber(tokenBalanceIn).plus(adjustedIn),
  )
  const foo = y.pow(weightRatio)
  const bar = new BigNumber(1).minus(foo)
  const tokenAmountOut = new BigNumber(tokenBalanceOut).times(bar)
  return tokenAmountOut
}

export const calcInGivenOut = (
  tokenBalanceIn: BN,
  tokenWeightIn: BN,
  tokenBalanceOut: BN,
  tokenWeightOut: BN,
  tokenAmountOut: BN,
  swapFee: BN,
) => {
  const weightRatio = new BigNumber(tokenWeightOut).div(new BigNumber(tokenWeightIn))
  const diff = new BigNumber(tokenBalanceOut).minus(tokenAmountOut)
  const y = new BigNumber(tokenBalanceOut).div(diff)
  const foo = y.pow(weightRatio).minus(new BigNumber(1))
  const tokenAmountIn = new BigNumber(tokenBalanceIn)
    .times(foo)
    .div(new BigNumber(1).minus(new BigNumber(swapFee)))
  return tokenAmountIn
}

export const calcPoolOutGivenSingleIn = (
  tokenBalanceIn: BN,
  tokenWeightIn: BN,
  poolSupply: BN,
  totalWeight: BN,
  tokenAmountIn: BN,
  swapFee: BN,
) => {
  const normalizedWeight = new BigNumber(tokenWeightIn).div(new BigNumber(totalWeight))
  const zaz = new BigNumber(1)
    .minus(new BigNumber(normalizedWeight))
    .multipliedBy(new BigNumber(swapFee))
  const tokenAmountInAfterFee = new BigNumber(tokenAmountIn).multipliedBy(
    new BigNumber(1).minus(zaz),
  )
  const newTokenBalanceIn = new BigNumber(tokenBalanceIn).plus(tokenAmountInAfterFee)
  const tokenInRatio = newTokenBalanceIn.div(new BigNumber(tokenBalanceIn))
  const poolRatio = tokenInRatio.pow(normalizedWeight)
  const newPoolSupply = poolRatio.multipliedBy(new BigNumber(poolSupply))
  const poolAmountOut = newPoolSupply.minus(new BigNumber(poolSupply))
  return poolAmountOut
}

export const calcSingleInGivenPoolOut = (
  tokenBalanceIn: BN,
  tokenWeightIn: BN,
  poolSupply: BN,
  totalWeight: BN,
  poolAmountOut: BN,
  swapFee: BN,
) => {
  const normalizedWeight = new BigNumber(tokenWeightIn).div(new BigNumber(totalWeight))
  const newPoolSupply = new BigNumber(poolSupply).plus(new BigNumber(poolAmountOut))
  const poolRatio = newPoolSupply.div(new BigNumber(poolSupply))
  const boo = new BigNumber(1).div(normalizedWeight)
  const tokenInRatio = poolRatio.pow(boo)
  const newTokenBalanceIn = tokenInRatio.multipliedBy(new BigNumber(tokenBalanceIn))
  const tokenAmountInAfterFee = newTokenBalanceIn.minus(new BigNumber(tokenBalanceIn))
  const zar = new BigNumber(1).minus(normalizedWeight).multipliedBy(new BigNumber(swapFee))
  const tokenAmountIn = tokenAmountInAfterFee.div(new BigNumber(1).minus(zar))
  return tokenAmountIn
}

export const calcSingleOutGivenPoolIn = (
  tokenBalanceOut: BN,
  tokenWeightOut: BN,
  poolSupply: BN,
  totalWeight: BN,
  poolAmountIn: BN,
  swapFee: BN,
) => {
  const normalizedWeight = new BigNumber(tokenWeightOut).div(new BigNumber(totalWeight))
  const poolAmountAfterExitFee = new BigNumber(poolAmountIn).multipliedBy(
    new BigNumber(1).minus(0),
  )
  const newPoolSupply = new BigNumber(poolSupply).minus(poolAmountAfterExitFee)
  const poolRatio = newPoolSupply.div(new BigNumber(poolSupply))

  const tokenOutRAtio = poolRatio.pow(new BigNumber(1).div(normalizedWeight))
  const newTokenBalanceOut = tokenOutRAtio.multipliedBy(new BigNumber(tokenBalanceOut))

  const tokenAmountBeforeSwapFee = new BigNumber(tokenBalanceOut).minus(newTokenBalanceOut)

  const zaz = new BigNumber(swapFee).multipliedBy(new BigNumber(1).minus(normalizedWeight))
  const tokenAmountOut = tokenAmountBeforeSwapFee.multipliedBy(new BigNumber(1).minus(zaz))
  return tokenAmountOut
}

export const calcPoolTokensByRatio = (ratio: BigNumber, totalShares: BigNumber) => {
  return new BigNumber(ratio).multipliedBy(totalShares)
}
