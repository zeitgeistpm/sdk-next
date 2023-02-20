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

const assets = pool
  .getAssetIds()
  .filter(IOMarketOutcomeAssetId.is.bind(IOMarketOutcomeAssetId))

const ztgToPutIn = ZTG.mul(100)

const totalPoolShares = await pool.getTotalIssuance()

const baseAssetBalance = await pool.getAssetBalance({ Ztg: null })
const ratio = baseAssetBalance.div(ztgToPutIn)

let maxAssetsIn = await Promise.all(
  assets.map(async asset => {
    const assetBalance = await pool.getAssetBalance(asset)
    return assetBalance.div(ratio).toFixed(0, Decimal.ROUND_UP)
  }),
)

maxAssetsIn.push(ztgToPutIn.toFixed(0))

const poolAmmount = totalPoolShares.div(ratio).toFixed(0, Decimal.ROUND_DOWN)

const result = await pool.join({
  signer: getBsrTestingSigner(),
  maxAssetsIn: maxAssetsIn,
  poolAmount: poolAmmount,
})

process.exit()
