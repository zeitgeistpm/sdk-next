import { MarketStatus } from '@zeitgeistpm/indexer'
import { create, FullContext, isIndexedSdk, mainnet, Sdk } from '@zeitgeistpm/sdk'

const sdk: Sdk<FullContext> = await create(mainnet())

const activeSportsMarkets = await sdk.model.markets.list({
  where: {
    tags_containsAll: ['Sports'],
    status_eq: MarketStatus.Active,
  },
})

const stats = await sdk.indexer.marketStats({
  ids: activeSportsMarkets.map(m => m.marketId.toString()),
})

activeSportsMarkets.forEach((market, index) => {
  const stat = stats.marketStats[index]
  console.log(`${market.marketId}: ${market.question}`, stat)
})

process.exit()
