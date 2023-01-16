import { batterystation, create } from '@zeitgeistpm/sdk'
import ms from 'ms'

async function main() {
  /**
   * Fetching asset indexes works with both rpc and indexer mode.
   */
  const sdk = await create(batterystation())

  const market = (await sdk.model.markets.get({ marketId: 543 })).unwrap()
  const stage = await sdk.model.markets.getStage(market!)
  console.log(stage.type, ms(stage.remainingTime ?? Infinity))

  setInterval(async () => {
    const market = (await sdk.model.markets.get({ marketId: 543 })).unwrap()
    const stage = await sdk.model.markets.getStage(market!)
    console.log(stage.type, ms(stage.remainingTime ?? Infinity))
  }, ms('1m'))
}

main().catch(error => {
  console.log('ERROR')
  console.log(error)
})
