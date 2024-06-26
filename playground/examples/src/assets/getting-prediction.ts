import {
  calcSpotPrice,
  create,
  FullContext,
  getIndexOf,
  getScalarBounds,
  IOMarketOutcomeAssetId,
  mainnet,
  Market,
  Sdk,
} from '@zeitgeistpm/sdk'

const sdk: Sdk<FullContext> = await create(mainnet())

const marketId = 63

const market: Market<FullContext> = await sdk.model.markets
  .get({ marketId })
  .then(market => market.unwrap()!)

const pool = await sdk.model.swaps.getPool({ marketId }).then(pool => pool.unwrap()!)

const assets = pool
  .getAssetIds()
  .filter(IOMarketOutcomeAssetId.is.bind(IOMarketOutcomeAssetId))

const poolBaseAssetBalance = await pool.getAssetBalance({ Ztg: null })
const poolBaseAssetWeight = await pool.getAssetWeight({ Ztg: null }).unwrap()!

const assetPrices = await Promise.all(
  assets.map(async asset => {
    const assetBalance = await pool.getAssetBalance(asset)
    const assetWeight = pool.getAssetWeight(asset).unwrap()!
    const category = market.categories?.[getIndexOf(asset)]

    const price = calcSpotPrice(
      poolBaseAssetBalance,
      poolBaseAssetWeight,
      assetBalance,
      assetWeight,
      0,
    )

    return {
      name: category?.name ?? asset.toString(),
      price,
    }
  }),
)

const predictedPrice = assetPrices.sort((a, b) => (a.price.gt(b.price) ? -1 : 1)).at(0)!

if (market.marketType.scalar) {
  const [lower, upper] = getScalarBounds(market).unwrap()!
  const predictedValue = upper.minus(lower).mul(predictedPrice.price).plus(lower)

  console.log(
    `${market.question}`,
    `The prediction is ${predictedPrice.name} at ${predictedValue.toFixed(2)}`,
  )
} else {
  console.log(
    `${market.question}`,
    `The prediction is ${predictedPrice.name} at ${predictedPrice.price.toString()}`,
  )
}

process.exit(0)
