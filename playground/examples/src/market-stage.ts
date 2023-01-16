import { Init } from '@polkadot/api/base/Init'
import { batterystation, create } from '@zeitgeistpm/sdk'
import ms from 'ms'

async function main() {
  /**
   * Fetching asset indexes works with both rpc and indexer mode.
   */
  const sdk = await create(batterystation())

  /**
   * Fetch a set of pools.
   */
  const market = (await sdk.model.markets.get({ marketId: 367 })).unwrap()

  const stage = await sdk.model.markets.getStage(market!)

  console.log(stage.type, ms(stage.remainingTime ?? Infinity))
}

main().catch(error => {
  console.log('ERROR')
  console.log(error)
})
