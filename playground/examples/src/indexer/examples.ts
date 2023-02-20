import { MarketOrderByInput, MarketStatus } from '@zeitgeistpm/indexer'
import { batterystationIndexer, create, IndexerContext, Sdk } from '@zeitgeistpm/sdk'

const sdk: Sdk<IndexerContext> = await create(batterystationIndexer())

const { markets } = await sdk.indexer.markets({
  offset: 0,
  limit: 10,
  order: MarketOrderByInput.CreationDesc,
  where: {
    status_eq: MarketStatus.Active,
    tags_containsAll: ['dev', 'sports'],
    OR: [
      {
        creator_eq: 'some address',
      },
      {
        creator_eq: 'or this address',
      },
    ],
  },
})

process.exit()
