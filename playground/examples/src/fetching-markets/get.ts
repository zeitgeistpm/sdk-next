import { batterystation, create, FullContext, Sdk } from '@zeitgeistpm/sdk'

const sdk: Sdk<FullContext> = await create(batterystation())

const fetchByNumber = async () => {
  const market = await sdk.model.markets.get(34123)
}

const fetchByString = async () => {
  const market = await sdk.model.markets.get('34123')
}

const fetchForPool = async () => {
  const pool = await sdk.model.swaps.getPool('568').then(pool => pool.unwrap()!)
  const market = await sdk.model.markets.get(pool)
}

process.exit()
