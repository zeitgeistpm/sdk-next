import { Keyring } from '@polkadot/keyring'
import { create, CreateStandaloneMarketParams, createStorage } from '@zeitgeistpm/sdk'
import { isNotNull } from '@zeitgeistpm/utility/dist/null'
import { IPFS } from '@zeitgeistpm/web3.storage'
import { filter, switchMap } from 'rxjs/operators'

async function main() {
  /**
   * Here we are creating a sdk with a custom storage provider and metadata type.
   */
  const sdk = await create({
    provider: 'ws://127.0.0.1:9944',
    storage: createStorage(
      IPFS.storage({
        node: { url: 'http://ipfs.zeitgeist.pm:5001', pin: false },
      }),
    ),
  })

  const keyring = new Keyring({ ss58Format: 73, type: 'sr25519' })
  const signer = keyring.addFromUri('//Alice', { name: 'Alice default' })

  /**
   * Params for creating a standalone market without pool.
   */
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

  /**
   * We can start observing for pool on market before it is created.
   */
  const pool$ = sdk.model.swaps.getPool
    .$({ marketId: saturatedMarket.marketId })
    .pipe(filter(isNotNull))

  /**
   * Observe prices on pool as soon as pool is deployed
   */
  const prices$ = pool$.pipe(
    switchMap(pool => sdk.model.swaps.poolPrices.$({ pool: pool.poolId })),
  )

  /**
   * Observe and log prices for market associated to the correct metadata category.
   */
  prices$.subscribe(prices => {
    saturatedMarket.categories?.map((category, index) => {
      const [block, price] = prices[index]
      console.log(
        `token [${category?.ticker}], price ${
          price.toNumber() / 10 ** 10
        }ZTG, at block[${block}]`,
      )
    })
  })

  /**
   * Deploy the pool.
   */
  const weight = (1 / 2) * 10 * 10 ** 10

  const pool = await market.deploySwapPoolAndAdditionalLiquidity({
    amount: 300 * 10 ** 10,
    swapFee: 1000,
    weights: [weight, weight],
    signer: signer,
  })

  const poolJoinresult = await pool.join({} as any).unright()

  poolJoinresult.unwrap

  console.log('pool deployed', pool.toHuman())
  console.log('--------------')
}

main().catch(error => {
  console.log('ERROR')
  console.log(error)
})
