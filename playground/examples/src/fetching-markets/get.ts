import { batterystation, create, FullContext, Sdk } from '@zeitgeistpm/sdk'

const sdk: Sdk<FullContext> = await create(batterystation())

const market = await sdk.model.markets.get('568')

console.log(market.unwrap())

process.exit()
