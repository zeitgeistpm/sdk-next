import { create, createStorage, CreateMarketWithPoolParams } from '@zeitgeistpm/sdk'
import { IPFS } from '@zeitgeistpm/web3.storage'

type CustomMarketMetadata = { __meta: 'markets'; description: string }

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
      __meta: 'markets',
      description: 'some description',
    },
  } as CreateMarketWithPoolParams<typeof sdk>

  const response = await sdk.model.markets.create(params)

  const { market, pool } = response.saturate().unwrap()
  const saturatedMarket = (await market.saturate()).unwrap()

  saturatedMarket.description === 'some description'
}

main()
