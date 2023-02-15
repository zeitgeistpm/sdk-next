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
const outcomeAssetIndex = market?.categories?.findIndex(
  category => category?.name === 'Yes',
)
const outcomeAsset = marketAssets.find(asset => getIndexOf(asset) === outcomeAssetIndex)!

const baseAssetBalance = await getAssetBalance(sdk, pool, baseAsset)
const outcomeAssetBalance = await getAssetBalance(sdk, pool, outcomeAsset)
const baseAssetWeight = getAssetWeight(pool, baseAsset).unwrap()!
const outcomeAssetWeight = getAssetWeight(pool, outcomeAsset).unwrap()!

const amountToBuy = ZTG.mul(20).toString()
const swapFee = getSwapFee(pool).unwrap()!

const slippage = 0.1

const maxAssetAmountIn = calcInGivenOut(
  baseAssetBalance,
  baseAssetWeight,
  outcomeAssetBalance,
  outcomeAssetWeight,
  amountToBuy,
  swapFee.div(ZTG).toNumber(),
).mul(slippage / 100 + 1)

const signer: KeyringPair = getBsrTestingSigner()

const submitableResult = await pool.swapExactAmountOut({
  assetIn: { Ztg: null },
  assetAmountOut: amountToBuy,
  assetOut: outcomeAsset,
  signer,
  maxAssetAmountIn: maxAssetAmountIn.toFixed(0),
})

console.log(submitableResult)

process.exit()
