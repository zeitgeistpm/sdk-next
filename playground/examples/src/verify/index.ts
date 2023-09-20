import { MarketId, MetadataVerification, create, mainnet } from '@zeitgeistpm/sdk'

const sdk = await create(mainnet())

const markets = await sdk.model.markets.list()

for (const { marketId } of markets) {
  const result = await Promise.race<MetadataVerification | string>([
    sdk.model.markets.verifyMetadata(marketId as MarketId).then(r => r),
    new Promise(resolve => {
      setTimeout(() => resolve('timeout'), 500)
    }),
  ])
  console.log(`${marketId}: ${JSON.stringify(result)}`)
}
