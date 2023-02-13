import type { IndexerContext, Sdk } from '@zeitgeistpm/sdk'
import { create, mainnetIndexer } from '@zeitgeistpm/sdk'

const sdk: Sdk<IndexerContext> = await create(mainnetIndexer())
