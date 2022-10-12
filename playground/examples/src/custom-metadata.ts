import { create, CreateStandaloneMarketParams, createStorage } from '@zeitgeistpm/sdk'
import { IPFS } from '@zeitgeistpm/web3.storage'
import { Keyring } from '@polkadot/keyring'

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

  const keyring = new Keyring({ ss58Format: 73, type: 'sr25519' })
  const signer = keyring.addFromUri('//Alice', { name: 'Alice default' })

  const params: CreateStandaloneMarketParams<typeof sdk.context> = {
    signer,
    creationType: 'Permissionless',
    disputeMechanism: { Authorized: signer.address },
    marketType: { Categorical: 2 },
    oracle: signer.address,
    period: { Timestamp: [Date.now(), Date.now() + 60 * 60 * 24 * 1000 * 2] },
    deadlines: {
      disputeDuration: 2000,
      gracePeriod: 200,
      oracleDuration: 500,
    },
    metadata: {
      __meta: 'markets',
      foo: 'bar',
      descriptions: 'some description',
    },
  }

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
   * We can start observing for pool on market before it is created.
   */
  sdk.model.swaps.getPool.$({ marketId: saturatedMarket.marketId }).subscribe(pool => {
    console.log('emitted pool', pool?.toHuman())
  })

  /**
   * Deploy the pool.
   */
  const weight = (1 / 2) * 10 * 10 ** 10
  await market.deploySwapPoolAndAdditionalLiquidity({
    amount: 300 * 10 ** 10,
    swapFee: 1000,
    weights: [weight, weight],
    signer: signer,
  })
}

main().catch(error => {
  console.log('ERROR')
  console.log(error)
})
