import { MarketStatus } from '@zeitgeistpm/indexer'
import { create, FullContext, mainnet, Sdk } from '@zeitgeistpm/sdk'

const sdk: Sdk<FullContext> = await create(mainnet())

const activeSportsMarkets = await sdk.model.markets.list({
  limit: 10,
  where: {
    tags_containsAll: ['Sports'],
    status_eq: MarketStatus.Active,
  },
})

activeSportsMarkets.forEach(market => {
  console.log(`${market.marketId}: ${market.question}`)
})

process.exit()