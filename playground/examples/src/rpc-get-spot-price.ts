import {
  batterystation,
  batterystationIndexer,
  batterystationRpc,
  create,
  mainnetIndexer,
  mainnetRpc,
} from '@zeitgeistpm/sdk'

const ZTG = '10000000000'

async function main() {
  /**
   * Fetching asset indexes works with both rpc and indexer mode.
   */
  const sdk = await create(batterystationRpc())

  const prices = await sdk.context.api.rpc.swaps.getSpotPrice(
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
