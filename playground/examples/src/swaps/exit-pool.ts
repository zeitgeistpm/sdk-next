import { batterystation, create, FullContext, Sdk, ZTG } from '@zeitgeistpm/sdk'
import Decimal from 'decimal.js'
import { getBsrTestingSigner } from '../getSigner'

const sdk: Sdk<FullContext> = await create(batterystation())

const pool = await sdk.model.swaps
  .getPool({
    marketId: 372,
  })
  .then(pool => pool.unwrap()!)

const signer = getBsrTestingSigner()

const userPoolShares = new Decimal(
  await sdk.api.query.tokens
    .accounts(signer.address, {
      PoolShare: pool.poolId,
    })
    .then(({ free }) => free.toString()),
)

const totalPoolShares = await pool.getTotalIssuance()
const ratio = totalPoolShares.div(userPoolShares)

const assets = pool.getAssetIds()

const exitFee = new Decimal(sdk.api.consts.swaps.exitFee.toString()).div(ZTG)
const exitFeeMul = new Decimal(1).minus(exitFee)

const minAssetsOut = await Promise.all(
  assets.map(async asset => {
    const assetBalance = await pool.getAssetBalance(asset)
    return assetBalance.div(ratio).mul(exitFeeMul).toFixed(0, Decimal.ROUND_DOWN)
  }),
)

const result = await pool.exit({
  signer: getBsrTestingSigner(),
  minAssetsOut: minAssetsOut,
  poolAmount: userPoolShares.toFixed(0, Decimal.ROUND_DOWN),
})

process.exit()
