import { create, CreateStandaloneMarketParams, createStorage } from '@zeitgeistpm/sdk'
import { IPFS } from '@zeitgeistpm/web3.storage'

async function main() {
  /**
   * Custom type for the market metadata
   */
  type CustomMarketMetadata = {
    __meta: 'markets'
    foo: 'bar'
    descriptions: string
  }

  /**
   * Here we are creating a sdk with a custom storage provider and metadata type.
   */
  const sdk = await create({
    provider: 'ws://127.0.0.1:9944',
    storage: createStorage<CustomMarketMetadata>(
      IPFS.storage({
        node: { url: 'http://ipfs.zeitgeist.pm:5001', pin: false },
      }),
    ),
  })

  /**
   * Params for market creating witg strong metadata typing.
   */
  const params = {
    metadata: {
      __meta: 'markets',
      foo: 'bar',
      descriptions: 'some description',
    },
  } as CreateStandaloneMarketParams<typeof sdk.context>

  /**
   * Create market.
   */
  const response = await sdk.model.markets.create(params)

  /**
   * Fetch created market from events on finalized block and saturate the metadata.
   * @note in this case the metadat is already in scope so saturating is redundant, but shown as an example.
   */
  const { market } = response.saturateAndUnwrap()
  const saturatedMarket = await market.saturateAndUnwrap()

  /**
   * Saturated markets have the metadata provided according to the custom typing.
   */
  saturatedMarket.foo === 'bar'
  saturatedMarket.descriptions === 'some description'
}

main()
