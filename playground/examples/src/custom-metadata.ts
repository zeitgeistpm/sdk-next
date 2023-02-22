import {
  batterystation,
  create,
  CreateStandaloneMarketParams,
  createStorage,
  MetadataStorage,
  RpcContext,
  Sdk,
  ZeitgeistIpfs,
} from '@zeitgeistpm/sdk'
import { IPFS } from '@zeitgeistpm/web3.storage'
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
const sdk = await create({
  ...batterystation(),
  storage: ZeitgeistIpfs<MetadataStorage<CustomMarketMetadata>>(),
})

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
    disputeDuration: 2000,
    gracePeriod: 200,
    oracleDuration: 500,
  },
  metadata: {
    __meta: 'markets',
    customValue: 'some description',
  },
}

/**
 * Create market.
 *
 * Fetch created market from events on finalized block and saturate the metadata.
 * @note in this case the metadat is already in scope so saturating is redundant, but shown as an example.
 */

const response = await sdk.model.markets.create(params)
