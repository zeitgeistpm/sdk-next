import type { KeyringPair } from '@polkadot/keyring/types'
import * as SDK from '@zeitgeistpm/sdk'

async function main(signer: KeyringPair) {
  /**
   * Here we are creating a sdk with a custom storage provider and metadata type.
   *
   * @note use SDK.mainnetRpc() for mainnet
   */
  const sdk = await SDK.create(SDK.batterystationRpc())

  /**
   * Params for creating a standalone market without pool.
   */
  const params: SDK.CreateStandaloneMarketParams<typeof sdk> = {
    baseAsset: { Ztg: null },
    signer,
    scoringRule: 'Cpmm',
    creationType: 'Permissionless',
    disputeMechanism: 'Authorized',
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
      question: 'Will it receive a pool?',
      description: 'Market with no start pool',
      slug: 'market-with-no-start-pool',
      categories: [
        { name: 'yes', ticker: 'Y' },
        { name: 'no', ticker: 'N' },
      ],
      tags: ['dev'],
    },
  }

  /**
   * Create market transaction and send it.
   */
  const response = await sdk.model.markets.create(params)

  /**
   * Fetch created market from events on finalized block and saturate the metadata.
   * @note in this case the metadata is already in scope so saturating is redundant, but shown as an example.
   */
  const { market } = response.saturate().unwrap()
  const saturatedMarket = await market.saturate().unwrap()

  console.log('market created', saturatedMarket)
  console.log('--------------')
}
