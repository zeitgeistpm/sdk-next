import { batterystation, create } from '@zeitgeistpm/sdk'
import { isInfinite } from '@zeitgeistpm/sdk'
import ms from 'ms'

async function main() {
  /**
   * Fetching asset indexes works with both rpc and indexer mode.
   */
  const sdk = await create(batterystation())

  const log = async () => {
    const market = (await sdk.model.markets.get({ marketId: 543 })).unwrap()
    const stage = await sdk.model.markets.getStage(market!)
    console.log(
      market!.marketId,
      stage.type,
      isInfinite(stage) ? 'infinte' : ms(stage.remainingTime ?? Infinity),
    )
  }

  log()

  setInterval(log, ms('20s'))
}

main().catch(error => {
  console.log('ERROR')
  console.log(error)
})
