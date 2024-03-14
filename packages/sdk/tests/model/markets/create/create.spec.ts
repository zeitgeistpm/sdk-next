import { Keyring } from '@polkadot/api'
import { waitReady } from '@polkadot/wasm-crypto'
import { Memory } from '@zeitgeistpm/web3.storage'
import * as Zeitgeist from '../../../../src'
import { afterAll, describe, it } from 'vitest'
import { initChopsticks } from '../../../util/initChopsticks'

describe(
  'creat market',
  async () => {
    await waitReady()

    const keyring = new Keyring({ ss58Format: 73, type: 'sr25519' })
    const alice = keyring.addFromUri('//Alice', { name: 'Alice default' })

    const { port, process: chopsticks } = await initChopsticks()

    const sdk = await Zeitgeist.create({
      provider: `ws://127.0.0.1:${port}`,
      storage: Zeitgeist.createStorage(Memory.storage()),
    })

    afterAll(async () => {
      chopsticks.kill()
    })

    it(
      'should create a market',
      async () => {
        const params: Zeitgeist.CreateMarketParams<Zeitgeist.RpcContext> = {
          waitForFinalization: false,
          baseAsset: { Ztg: null },
          signer: alice,
          disputeMechanism: 'Authorized',
          marketType: { Categorical: 2 },
          oracle: alice.address,
          period: { Timestamp: [Date.now(), Date.now() + 60 * 60 * 24 * 1000 * 2] },
          deadlines: {
            disputeDuration: 5000,
            gracePeriod: 200,
            oracleDuration: 500,
          },
          creationType: 'Permissionless',
          scoringRule: 'Lmsr',
          metadata: {
            __meta: 'markets',
            question: 'Testing advised markets',
            description: 'Description for testing advised markets',
            slug: 'ipfs-api-test',
            categories: [
              { name: 'yes', ticker: 'Y' },
              { name: 'no', ticker: 'N' },
            ],
            tags: ['dev'],
          },
        }

        const response = await sdk.model.markets.create(params)

        const { market } = response.saturate().unwrap()
        const { question, description } = await market.saturate()

        console.log(`Market created with id: ${market.marketId}`)
        console.log(`Question: ${question}`)
        console.log(`Description: ${description}`)
      },
      {
        timeout: 120 * 1000,
      },
    )
  },
  {
    timeout: 60 * 1000,
  },
)
