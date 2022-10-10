import { create, CreateStandaloneMarketParams, createStorage } from '@zeitgeistpm/sdk'
import { IPFS } from '@zeitgeistpm/web3.storage'

async function main() {
  type CustomMarketMetadata = {
    __meta: 'markets'
    foo: 'bar'
    descriptions: string
  }

  const sdk = await create({
    provider: 'ws://127.0.0.1:9944',
    storage: createStorage<CustomMarketMetadata>(
      IPFS.storage({
        node: { url: 'http://ipfs.zeitgeist.pm:5001', pin: false },
      }),
    ),
  })

  const params = {
    metadata: {
      __meta: 'markets',
      foo: 'bar',
      descriptions: 'some description',
    },
  } as CreateStandaloneMarketParams<typeof sdk.context>

  const response = await sdk.model.markets.create(params)

  const { market, pool } = response.saturateAndUnwrap()
  const saturatedMarket = await market.saturateAndUnwrap()

  saturatedMarket.foo === 'bar'
  saturatedMarket.descriptions === 'some description'
}

main()
