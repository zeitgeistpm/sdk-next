import { create, createStorage } from '@zeitgeistpm/sdk'
import { CreateStandaloneMarketParams } from '@zeitgeistpm/sdk/dist/model/types'
import { IPFS } from '@zeitgeistpm/web3.storage'

type CustomMarket = { description: string }

const storage = createStorage<CustomMarket>(
  IPFS.storage({
    node: { url: 'http://ipfs.zeitgeist.pm:5001' },
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
  } as CreateStandaloneMarketParams<typeof storage>

  const response = await sdk.model.markets.create(params)

  const { market } = response.extract().unright().unwrap()
}

main()
