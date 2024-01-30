import { KeyringPair } from '@polkadot/keyring/types'
import {
  batterystation,
  create,
  CreateMarketParams,
  RpcContext,
  Sdk,
  swapFeeFromFloat,
  ZTG,
} from '@zeitgeistpm/sdk'
import Decimal from 'decimal.js'
import { getBsrTestingSigner } from '../getSigner'

/**
 * Initialize the SDK in full or rpc mode to be able to submit transactions to the chein.
 */
// const sdk: Sdk<RpcContext> = await create(mainnet())

const sdk: Sdk<RpcContext> = await create(batterystation())

/**
 * Get the signer from the wallet extension or other keyring.
 */
const signer: KeyringPair = getBsrTestingSigner()

/**
 * Tags that are usable in production.
 */
const usableTags = [
  'Politics',
  'Crypto',
  'Dotsama',
  'Zeitgeist',
  'Technology',
  'Science',
  'News',
  'Sports',
  'E-Sports',
] as const

/**
 * Params for creating a standalone market without pool.
 */
const params: CreateMarketParams<typeof sdk> = {
  signer,
  baseAsset: { Ztg: null },
  scoringRule: 'Lmsr',
  disputeMechanism: 'Authorized',
  marketType: { Categorical: 2 }, // 2 outcomes have to be the same number as metadata.categories.length
  oracle: signer.address,
  period: { Timestamp: [Date.now(), Date.now() + 60 * 60 * 24 * 1000 * 2] },
  deadlines: {
    disputeDuration: 5000,
    gracePeriod: 200,
    oracleDuration: 500,
  },
  metadata: {
    __meta: 'markets',
    question: 'Will the example work?',
    description: 'Testing the sdk.',
    slug: 'standalone-market-example',
    categories: [
      { name: 'yes', ticker: 'Y' },
      { name: 'no', ticker: 'N' },
    ],
    tags: ['Science'], // !NOTE: see usableTags above
  },
  pool: {
    amount: ZTG.mul(100).toString(), // ammount of base asset in the pool: 100 ZTG,
    swapFee: swapFeeFromFloat(1).toString(), // 1% swap fee,
    spotPrices: [
      new Decimal(0.2).mul(ZTG).toString(), // yes will have 20% prediction,
      new Decimal(0.8).mul(ZTG).toString(), // no will have 80% prediction,
    ],
  },
}

const response = await sdk.model.markets.create(params)

console.log(response)

process.exit()
