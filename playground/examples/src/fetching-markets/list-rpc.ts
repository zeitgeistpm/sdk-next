import { create, mainnetRpc, MarketList, RpcContext, Sdk } from '@zeitgeistpm/sdk'
import { isNotNull } from '@zeitgeistpm/utility/dist/null'

const sdk: Sdk<RpcContext> = await create(mainnetRpc())

const all: MarketList<RpcContext> = await sdk.model.markets.list()

const activeSportsMarkets = (
  await Promise.all(
    all.map(async market => {
      if (!market.status.isActive) {
        return null
      }

      /**
       * Saturation is a process that fetches metadata for a market from external storage(IPFS)
       */
      const marketWithMetadata = await market.saturate()

      /**
       * Saturated markets have access to the metadata like tags, categories, question, etc.
       */
      if (marketWithMetadata.tags?.includes('Sports')) {
        return marketWithMetadata
      }

      return null
    }),
  )
).filter(isNotNull)

activeSportsMarkets.forEach(market => {
  console.log(`${market.marketId}: ${market.question}`)
})

process.exit()
