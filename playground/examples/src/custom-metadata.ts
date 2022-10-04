import { create, createStorage } from '@zeitgeistpm/sdk'
import { CreateStandaloneMarketParams } from '@zeitgeistpm/sdk/dist/model/types'
import { isRight } from '@zeitgeistpm/utility/dist/either'
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

  const response = await sdk.model.markets.create({
    metadata: {
      description: 'som description',
    },
  })

  const m = response.extract()
  if (isRight(m)) {
    m.right.market.expand
  }
}

main()
