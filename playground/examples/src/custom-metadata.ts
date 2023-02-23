import {
  batterystation,
  create,
  CreateStandaloneMarketParams,
  MetadataStorage,
} from '@zeitgeistpm/sdk'
import { getBsrTestingSigner } from './getSigner'

/**
 * Custom type for the market metadata
 */
type CustomMarketMetadata = {
  __meta: 'markets'
  customValue: string
}

/**
 * Here we are creating a sdk with a custom storage provider and metadata type.
 */
const sdk = await create(batterystation<MetadataStorage<CustomMarketMetadata>>())

/**
 * Params for market creating witg strong metadata typing.
 */

const signer = getBsrTestingSigner()

const params: CreateStandaloneMarketParams<typeof sdk> = {
  signer,
  baseAsset: { Ztg: null },
  creationType: 'Permissionless',
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
    customValue: 'custom text value',
  },
}

const market = (await sdk.model.markets.get(585)).unwrap()!

// Question, slug etc are indexed so can be accessed directly
console.log(market.question)

// the custom value have to be fetched from IPFS
const metadata = await market.fetchMetadata().unwrap()
console.log(metadata.customValue)
