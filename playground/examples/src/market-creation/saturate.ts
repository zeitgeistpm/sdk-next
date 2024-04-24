import {
  batterystation,
  batterystationRpc,
  create,
  CreateMarketParams,
  createStorage,
  RpcContext,
  Sdk,
  swapFeeFromFloat,
  ZTG,
} from '@zeitgeistpm/sdk'
import { Memory } from '@zeitgeistpm/web3.storage'
import { getTestSigner } from '../getSigner'
import Decimal from 'decimal.js'

/**
 * Initialize the SDK in full or rpc mode to be able to submit transactions to the chein.
 */
// const sdk: Sdk<RpcContext> = await create(mainnet())

const sdk: Sdk<RpcContext> = await create({
  provider: 'ws://127.0.0.1:9944',
  storage: createStorage(Memory.storage()),
})

const signer = getTestSigner()

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

const response = (await (await sdk.model.markets.create(params)).saturate()).unwrap()

console.log(response.market.marketId, response)

process.exit(0)
