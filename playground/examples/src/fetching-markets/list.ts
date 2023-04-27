import { MarketStatus } from '@zeitgeistpm/indexer'
import { create, FullContext, isIndexedSdk, mainnet, Sdk } from '@zeitgeistpm/sdk'

const sdk: Sdk<FullContext> = await create(mainnet())

const activeSportsMarkets = await sdk.model.markets.list({
  where: {
    tags_containsAll: ['Sports'],
    status_eq: MarketStatus.Active,
  },
})

activeSportsMarkets.forEach(market => {
  console.log(`${market.marketId}: ${market.question}`)
})

if (isIndexedSdk(sdk)) {
  const stats = await sdk.indexer.marketStats({
    ids: ['190'],
  })

  stats.marketStats.forEach(stat => {
    stat.liquidity
    stat.participants
  })
}

process.exit()
