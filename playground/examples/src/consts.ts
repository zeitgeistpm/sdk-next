import type { FullContext, Sdk } from '@zeitgeistpm/sdk'
import { create, mainnet } from '@zeitgeistpm/sdk'

const sdk: Sdk<FullContext> = await create(mainnet())

console.log(sdk.api.consts.swaps.minLiquidity.toNumber())
