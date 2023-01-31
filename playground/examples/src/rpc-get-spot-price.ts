import { batterystation, create } from '@zeitgeistpm/sdk'

const ZTG = '10000000000'

async function main() {
  /**
   * Fetching asset indexes works with both rpc and indexer mode.
   */
  const sdk = await create(batterystation())

  const prices = await sdk.api.rpc.swaps.getSpotPrice(
    66,
    { Ztg: null },
    { CategoricalOutcome: [372, 0] },
    null,
    true,
  )

  console.log(prices)
}

main().catch(error => {
  console.log('ERROR')
  console.log(error)
})
