import Decimal from 'decimal.js'
import { BASE } from './base'

export const MAX_TOTAL_WEIGHT = BASE.mul(128)

export const MAX_TOTAL_OUTCOMES_WEIGHT = MAX_TOTAL_WEIGHT.div(2)

/**
 * Helper to calculate the weight ratio from a relative vector of integers
 *
 * @param ratio number[] - the relative ratio of the weights
 * @returns string[]
 */
export const weightsFromRelativeRatio = (ratio: number[]): string[] => {
  const total = ratio.reduce((a, b) => a + b, 0)
  return ratio.map(r =>
    new Decimal(r / total).mul(MAX_TOTAL_OUTCOMES_WEIGHT).floor().toString(),
  )
}

/**
 * Helper to calculate an even weight distribution for a given number of assets
 *
 * @param assets number - the number of assets
 * @returns string[]
 */
export const evenWeights = (assets: number) =>
  weightsFromRelativeRatio(Array(assets).fill(1))
