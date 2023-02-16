import { MarketStatus } from '@zeitgeistpm/indexer'
import {
  create,
  FullContext,
  getIndexOf,
  IOMarketOutcomeAssetId,
  mainnet,
  MarketOutcomeAssetId,
  parseAssetId,
  Sdk,
  ZTG,
} from '@zeitgeistpm/sdk'
import { isNotNull } from '@zeitgeistpm/utility/dist/null'

const sdk: Sdk<FullContext> = await create(mainnet())

/**
 * We fetch all active sports markets.
 */
const activeSportsMarkets = await sdk.model.markets.list({
  limit: 10,
  where: {
    tags_containsAll: ['Sports'],
    status_eq: MarketStatus.Active,
  },
})

for (const market of activeSportsMarkets) {
  /**
   * We fetch the pool for each market.
   */
  const pool = await sdk.model.swaps
    .getPool({ marketId: market.marketId })
    .then(pool => pool.unwrap()!)

  /**
   * Massage the outcome assets so that they are all valid outcome assets.
   * We dont care about the base asset or pool shares here.
   */
  const assetIds: MarketOutcomeAssetId[] = market.outcomeAssets
    .filter(isNotNull)
    .map(raw => parseAssetId(raw).unwrap())
    .filter(IOMarketOutcomeAssetId.is.bind(IOMarketOutcomeAssetId))

  /**
   * We fetch the balances for each outcome asset.
   * We also use the getIndexOf helper to corealte the asset id to the market category.
   */
  const assetsData = await Promise.all(
    assetIds.map(async assetId => {
      const balance = await pool.getAssetBalance(assetId)
      const category = market.categories?.[getIndexOf(assetId)]
      return { balance, category }
    }),
  )

  /**
   * Print the balances for each outcome asset of the market.
   */
  console.log(`${market.marketId}: ${market.question}`)
  for (const { category, balance } of assetsData) {
    console.log(`  ${category?.name}: ${balance.div(ZTG).toFixed(2)} ${category?.ticker}`)
  }

  console.log('--------------------------------')
}

process.exit()
