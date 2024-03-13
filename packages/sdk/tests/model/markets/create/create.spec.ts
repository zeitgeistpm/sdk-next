import { spawn, ChildProcessWithoutNullStreams } from 'node:child_process'
import * as path from 'node:path'
import { Memory } from '@zeitgeistpm/web3.storage'
import { Keyring } from '@polkadot/api'
import { stringToU8a, u8aToHex } from '@polkadot/util'
import { waitReady } from '@polkadot/wasm-crypto'
import { mnemonicGenerate } from '@polkadot/util-crypto'
import * as Zeitgeist from '../../../../src'

import { describe, expect, it, beforeAll, afterAll } from 'vitest'
import { initChopsticks } from '../../../initChopsticks'

describe(
  'creat market',
  async () => {
    let chopsticks: ChildProcessWithoutNullStreams

    let sdk: Zeitgeist.Sdk<Zeitgeist.RpcContext>

    const keyring = new Keyring({ ss58Format: 73, type: 'sr25519' })

    const signer = keyring.addFromMnemonic(
      'sick actor between bamboo hedgehog uncle staff juice reveal friend kit priority',
    )

    const alice = keyring.addFromUri('//Alice', { name: 'Alice default' })

    beforeAll(async () => {
      await waitReady()

      const { port, process } = await initChopsticks()

      chopsticks = process

      sdk = await Zeitgeist.create({
        provider: `ws://127.0.0.1:${port}`,
        storage: Zeitgeist.createStorage(Memory.storage()),
      })

      await sdk.api.tx.balances
        .transfer(alice.address, Zeitgeist.ZTG.mul(9).toString())
        .signAndSend(alice)
    }, 30 * 1000)

    afterAll(async () => {
      chopsticks.kill()
    })

    it(
      'should create a market',
      async () => {
        const params: Zeitgeist.CreateMarketParams<Zeitgeist.RpcContext> = {
          waitForFinalization: false,
          baseAsset: { Ztg: null },
          signer,
          disputeMechanism: 'Authorized',
          marketType: { Categorical: 2 },
          oracle: signer.address,
          period: { Timestamp: [Date.now(), Date.now() + 60 * 60 * 24 * 1000 * 2] },
          deadlines: {
            disputeDuration: 5000,
            gracePeriod: 200,
            oracleDuration: 500,
          },
          creationType: 'Advised',
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
