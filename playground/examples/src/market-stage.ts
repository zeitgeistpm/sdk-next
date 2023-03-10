import { batterystation, create, mainnet } from '@zeitgeistpm/sdk'
import { isInfinite } from '@zeitgeistpm/sdk'
import ms from 'ms'

async function main() {
  /**
   * Fetching asset indexes works with both rpc and indexer mode.
   */
  const sdk = await create(mainnet())

  const log = async () => {
    const market = (await sdk.model.markets.get({ marketId: 54 })).unwrap()
    const stage = await sdk.model.markets.getStage(market!)
    console.log(stage)
  }

  log()

  setInterval(log, ms('20s'))
}

main().catch(error => {
  console.log('ERROR')
  console.log(error)
})
