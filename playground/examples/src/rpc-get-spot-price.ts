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
    '0x02072f158822700d6c657fcd1fff8fb53d26f11219e68527e5d7c77b7ca6537b',
    true,
  )

  console.log(prices)
}

main().catch(error => {
  console.log('ERROR')
  console.log(error)
})
