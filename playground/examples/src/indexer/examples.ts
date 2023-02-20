import { MarketOrderByInput, MarketStatus } from '@zeitgeistpm/indexer'
import {
  batterystation,
  batterystationIndexer,
  create,
  FullContext,
  IndexerContext,
  Sdk,
} from '@zeitgeistpm/sdk'

const sdk: Sdk<IndexerContext> = await create(batterystationIndexer())

const markets = sdk.indexer.markets({
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
