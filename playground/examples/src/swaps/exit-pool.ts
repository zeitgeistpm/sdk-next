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

// total amount of pool shares issued to other users providing liquidity
const totalPoolShares = await pool.getTotalIssuance()

// pool ztg balance
const baseAssetBalance = await pool.getAssetBalance({ Ztg: null })

// CALC minAssetsOut and poolAmount

const result = await pool.exit({
  signer: getBsrTestingSigner(),
  minAssetsOut: [],
  poolAmount: 1,
})

// DESCRIPTION END

process.exit()
