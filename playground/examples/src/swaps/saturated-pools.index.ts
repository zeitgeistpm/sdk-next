import { batterystation, create, FullContext, Sdk, ZTG } from '@zeitgeistpm/sdk'
import Decimal from 'decimal.js'
import { getBsrTestingSigner } from '../getSigner'

const sdk: Sdk<FullContext> = await create(batterystation())

const pool = (await sdk.model.swaps.getPool(246)).unwrap()!

/**
 * Fetch asset indexes including prices, amounts and total liquidity for fetched pools.
 */
const assetsIndex = await sdk.model.swaps.saturatedPoolsIndex([pool])

console.log(assetsIndex[246].assets.map(asset => asset))

process.exit()
