import { KeyringPair } from '@polkadot/keyring/types'
import {
  AssetId,
  calcInGivenOut,
  create,
  FullContext,
  getAssetBalance,
  getAssetIds,
  getAssetWeight,
  getIndexOf,
  getSwapFee,
  mainnet,
  Market,
  Pool,
  Sdk,
  ZTG,
  ZtgAssetId,
} from '@zeitgeistpm/sdk'
import { getBsrTestingSigner } from '../getSigner'

const sdk: Sdk<FullContext> = await create(mainnet())

const marketId = 1

const market: Market<FullContext> = await sdk.model.markets
  .get({ marketId })
  .then(market => market.unwrap()!)

const pool: Pool<FullContext> = await sdk.model.swaps
  .getPool({ marketId })
  .then(pool => pool.unwrap()!)

const marketAssets: AssetId[] = getAssetIds(pool)

const baseAsset: ZtgAssetId = { Ztg: null }
const yesOutcomeIndex = market?.categories?.findIndex(category => category?.name === 'Yes')
const yesAsset = marketAssets.find(asset => getIndexOf(asset) === yesOutcomeIndex)!

const poolBaseAssetBalance = await getAssetBalance(sdk, pool, baseAsset)
const poolAssetBalance = await getAssetBalance(sdk, pool, yesAsset)
const baseAssetWeight = getAssetWeight(pool, baseAsset).unwrap()!
const assetWeight = getAssetWeight(pool, yesAsset).unwrap()!

const amountToBuy = ZTG.mul(20).toString()
const swapFee = getSwapFee(pool).unwrap()!

const slippage = 0.1

const maxAssetAmountIn = calcInGivenOut(
  poolBaseAssetBalance,
  baseAssetWeight,
  poolAssetBalance,
  assetWeight,
  amountToBuy,
  swapFee.div(ZTG).toNumber(),
).mul(slippage / 100 + 1)

const signer: KeyringPair = getBsrTestingSigner()

const submitableResult = await pool.swapExactAmountOut({
  assetIn: { Ztg: null },
  assetAmountOut: amountToBuy,
  assetOut: yesAsset,
  signer,
  maxAssetAmountIn: maxAssetAmountIn.toFixed(0),
})

console.log(submitableResult)

process.exit()
