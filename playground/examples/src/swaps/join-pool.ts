import {
  batterystation,
  create,
  FullContext,
  IOMarketOutcomeAssetId,
  Sdk,
} from '@zeitgeistpm/sdk'
import { getBsrTestingSigner } from '../getSigner'

const sdk: Sdk<FullContext> = await create(batterystation())

const pool = await sdk.model.swaps
  .getPool({
    marketId: 572,
  })
  .then(pool => pool.unwrap()!)

const assets = pool
  .getAssetIds()
  .filter(IOMarketOutcomeAssetId.is.bind(IOMarketOutcomeAssetId))

const totalPoolShares = await pool.getTotalIssuance()

const poolBalances = await Promise.all(assets.map(asset => pool.getAssetBalance(asset)))

console.log(assets)

throw new Error('Stop')

// const slippage = slippageFromFloat(0.1, 'buying')

// const amountsIn = assets.map(asset =>
//   new Decimal(asset.amount).mul(slippageMul).mul(ZTG).toFixed(0, Decimal.ROUND_UP),
// )

pool.join({
  signer: getBsrTestingSigner(),
  maxAssetsIn: [],
  poolAmount: 1,
})

process.exit()
