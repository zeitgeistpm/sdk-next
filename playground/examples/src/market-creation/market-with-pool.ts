import { KeyringPair } from '@polkadot/keyring/types'
import {
  create,
  CreateMarketWithPoolParams,
  localhostRpc,
  RpcContext,
  Sdk,
  ZTG,
  evenWeights,
  swapFeeFromFloat,
} from '@zeitgeistpm/sdk'
import { getTestSigner } from '../getSigner'

/**
 * Initialize the SDK in full or rpc mode to be able to submit transactions to the chein.
 */
// const sdk: Sdk<RpcContext> = await create(mainnet())

const sdk: Sdk<RpcContext> = await create(localhostRpc())

/**
 * Get the signer from the wallet extension or other keyring.
 */
const signer: KeyringPair = getTestSigner()

/**
 * Params for creating a standalone market without pool.
 */
const params: CreateMarketWithPoolParams<typeof sdk> = {
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
  metadata: {
    __meta: 'markets',
    question: 'Will the example work?',
    description: 'Testing the sdk.',
    slug: 'standalone-market-example',
    categories: [
      { name: 'yes', ticker: 'Y' },
      { name: 'no', ticker: 'N' },
    ],
    tags: ['dev'],
  },
  pool: {
    amount: ZTG.mul(300).toString(),
    swapFee: swapFeeFromFloat(1).toString(),
    weights: evenWeights(2),
  },
}

try {
  /**
   * Create market transaction and send it.
   */
  const response = await sdk.model.markets.create(params)

  /**
   * Fetch created market from events on finalized block and saturate the metadata.
   * @note in this case the metadata is already in scope so saturating is redundant, but shown as an example.
   */
  const { market, pool } = response.saturate().unwrap()

  console.log(`Market created with id: ${market.marketId}`)
  console.log(`Pool created with id: ${pool.poolId}`)
} catch (e) {
  console.error(e)
} finally {
  process.exit(0)
}
