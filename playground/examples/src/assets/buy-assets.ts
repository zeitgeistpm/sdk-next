import { KeyringPair } from '@polkadot/keyring/types'
import { batterystation, slippageFromFloat } from '@zeitgeistpm/sdk'
import {
  AssetId,
  calcInGivenOut,
  create,
  FullContext,
  getIndexOf,
  mainnet,
  Market,
  Pool,
  Sdk,
  ZTG,
  ZtgAssetId,
} from '@zeitgeistpm/sdk'
import { getBsrTestingSigner } from '../getSigner'

const sdk: Sdk<FullContext> = await create(batterystation())

const marketId = 190

const market: Market<FullContext> = await sdk.model.markets
  .get({ marketId })
  .then(market => market.unwrap()!)

const pool: Pool<FullContext> = await sdk.model.swaps
  .getPool({ marketId })
  .then(pool => pool.unwrap()!)

const marketAssets: AssetId[] = pool.getAssetIds()

const baseAsset: ZtgAssetId = { Ztg: null }
const outcomeAssetIndex = market?.categories?.findIndex(
  category => category?.name === 'Yes',
)
const outcomeAsset = marketAssets.find(asset => getIndexOf(asset) === outcomeAssetIndex)!

const [baseAssetBalance, outcomeAssetBalance] = await Promise.all([
  pool.getAssetBalance(baseAsset),
  pool.getAssetBalance(outcomeAsset),
])

const baseAssetWeight = pool.getAssetWeight(baseAsset).unwrap()!
const outcomeAssetWeight = pool.getAssetWeight(outcomeAsset).unwrap()!

const amountToBuy = ZTG.mul(20).toString()
const swapFee = pool.getSwapFee()

const slippage = slippageFromFloat(0.1, 'buying')

const maxAssetAmountIn = calcInGivenOut(
  baseAssetBalance,
  baseAssetWeight,
  outcomeAssetBalance,
  outcomeAssetWeight,
  amountToBuy,
  swapFee.div(ZTG).toNumber(),
).mul(slippage)

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
