import type { FullContext, Sdk } from '@zeitgeistpm/sdk'
import { create, mainnet } from '@zeitgeistpm/sdk'

const sdk: Sdk<FullContext> = await create(mainnet())

const market = (await sdk.model.markets.get({ marketId: 1 })).unwrap()!
