import { create, mainnet } from '@zeitgeistpm/sdk'
import { delay } from '@zeitgeistpm/utility/dist/async'

async function main() {
  /**
   * Fetching asset indexes works with both rpc and indexer mode.
   */
  const sdk = await create(mainnet())

  const cid = await sdk.storage.data.put('hello world')
  await delay(2000)

  const data = (await sdk.storage.data.get(cid)).unwrap()

  console.log(data)
}

main().catch(error => {
  console.log('ERROR')
  console.log(error)
})
