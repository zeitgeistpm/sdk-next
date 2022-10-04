import { create, createStorage } from '@zeitgeistpm/sdk'
import {
  CreateMarketWithPoolParams,
  CreateStandaloneMarketParams,
} from '@zeitgeistpm/sdk/dist/model/types'
import { IPFS } from '@zeitgeistpm/web3.storage'

type CustomMarketMetadata = { description: string }

const storage = createStorage<CustomMarketMetadata>(
  IPFS.storage({
    node: { url: 'http://ipfs.zeitgeist.pm:5001', pin: false },
  }),
)

async function main() {
  const sdk = await create({
    provider: 'ws://127.0.0.1:9944',
    storage: storage,
  })

  const params = {
    metadata: {
      description: 'som description',
    },
  } as CreateMarketWithPoolParams<typeof sdk.storage>

  const response = await sdk.model.markets.create(params)

  const { market, pool } = response.extract().unwrap()
  const metadata = (await market.fetchMetadata()).unwrap()

  metadata.description === 'some description'
}

main()
