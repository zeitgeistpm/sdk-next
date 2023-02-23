import {
  batterystation,
  create,
  FullContext,
  IOMarketOutcomeAssetId,
  Sdk,
  slippageFromFloat,
  ZTG,
} from '@zeitgeistpm/sdk'
import Decimal from 'decimal.js'
import { getBsrTestingSigner } from '../getSigner'

const sdk: Sdk<FullContext> = await create(batterystation())

const pool = await sdk.model.swaps
  .getPool({
    marketId: 372,
  })
  .then(pool => pool.unwrap()!)

// total amount of pool shares issued to other users providing liquidity
const totalPoolShares = await pool.getTotalIssuance()

// pool ztg balance
const baseAssetBalance = await pool.getAssetBalance({ Ztg: null })

// amount of ZTG to add to the pool
const ztgToPutIn = ZTG.mul(100)

// ratio between the amount of ztg in the pool and the amount ztg the user wants to add to the pool
// this ratio must be the same for all assets so that adding liqudity doesn't change the current prices
const ratio = baseAssetBalance.div(ztgToPutIn)

const outcomeAssets = pool
  .getAssetIds()
  .filter(IOMarketOutcomeAssetId.is.bind(IOMarketOutcomeAssetId))

const assetsMaxIn = await Promise.all(
  outcomeAssets.map(async asset => {
    const assetBalance = await pool.getAssetBalance(asset)
    return assetBalance.div(ratio).toFixed(0, Decimal.ROUND_UP)
  }),
)

const baseAssetMaxIn = ztgToPutIn.toFixed(0)

// calculate the amount of pool shares the user should receive based on the percentage of the pool they will own after the extrinsic is executed
const poolAmmount = totalPoolShares.div(ratio).toFixed(0, Decimal.ROUND_DOWN)

const submittableResult = await pool.join({
  signer: getBsrTestingSigner(),
  poolAmount: poolAmmount, // amount of pool shares the user should receive
  maxAssetsIn: [...assetsMaxIn, baseAssetMaxIn], // maximum amounts of assets the user is willing to pay
})

process.exit()
