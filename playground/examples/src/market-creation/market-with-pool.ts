import { KeyringPair } from '@polkadot/keyring/types'
import {
  CreateMarketParams,
  FullContext,
  Sdk,
  batterystation,
  create,
  createStorage,
} from '@zeitgeistpm/sdk'
import { Memory, IPFSApi } from '@zeitgeistpm/web3.storage'
import { getBsrTestingSigner } from '../getSigner'

/**
 * Initialize the SDK in full or rpc mode to be able to submit transactions to the chein.
 */
// const sdk: Sdk<RpcContext> = await create(mainnet())

const storage = IPFSApi.storage()

const sdk: Sdk<FullContext> = await create({
  ...batterystation(),
  storage: createStorage(storage),
})

/**
 * Get the signer from the wallet extension or other keyring.
 */
const signer: KeyringPair = getBsrTestingSigner()
// const cwd = process.cwd()
// const imagePath = Path.join(cwd, './playground/examples/src/market-creation/img.png')
// const imageBlob = new Blob([FS.readFileSync(imagePath)])

/**
 * Params for creating a standalone market without pool.
 */
const params: CreateMarketParams<FullContext> = {
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

try {
  /**
   * Create market transaction and send it.
   */
  const response = await sdk.model.markets.create(params)

  /**
   * Fetch created market from events on finalized block and saturate the metadata.
   * @note in this case the metadata is already in scope so saturating is redundant, but shown as an example.
   */
  const { market } = response.saturate().unwrap()
  const { question, description } = await market.saturate()

  console.log(`Market created with id: ${market.marketId}`)
  console.log(`Question: ${question}`)
  console.log(`Description: ${description}`)
} catch (e) {
  console.error(e)
} finally {
  process.exit(0)
}
