import { calcSpotPrice, weightsFromRelativeRatio, ZTG } from '@zeitgeistpm/sdk'
import Decimal from 'decimal.js'

const priceA = 2
const priceB = 9

const weights = weightsFromRelativeRatio([priceA, priceB])

const pricea = calcSpotPrice(
  10000,
  new Decimal(weights[1]).add(weights[0]),
  10000,
  weights[0],
  0,
)

const priceb = calcSpotPrice(
  10000,
  new Decimal(weights[1]).add(weights[0]),
  10000,
  weights[1],
  0,
)

console.log(pricea.add(priceb).toNumber())
