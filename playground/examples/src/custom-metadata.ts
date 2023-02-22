import {
  batterystation,
  batterystationRpc,
  create,
  CreateStandaloneMarketParams,
  createStorage,
  FullContext,
  MarketMetadata,
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
type CustomMarketMetadata = MarketMetadata & {
  __meta: 'markets'
  customValue: string
}

/**
 * Here we are creating a sdk with a custom storage provider and metadata type.
 */
const sdk = await create(batterystation<MetadataStorage<CustomMarketMetadata>>())

const market = (await sdk.model.markets.get(585)).unwrap()!
const metadata = await market.fetchMetadata().unwrap()

console.log(`${market.question}, ${metadata.customValue}`)

/**
 * Params for market creating witg strong metadata typing.
 */

// const signer = getBsrTestingSigner()

// const params: CreateStandaloneMarketParams<typeof sdk> = {
//   signer,
//   baseAsset: { Ztg: null },
//   creationType: 'Permissionless',
//   disputeMechanism: 'Authorized',
//   marketType: { Categorical: 2 },
//   oracle: signer.address,
//   period: { Timestamp: [Date.now(), Date.now() + 60 * 60 * 24 * 1000 * 2] },
//   deadlines: {
//     disputeDuration: 5000,
//     gracePeriod: 200,
//     oracleDuration: 500,
//   },
//   metadata: {
//     __meta: 'markets',
//     customValue: 'custom text value',
//   },
// }

// /**
//  * Create market.
//  *
//  * Fetch created market from events on finalized block and saturate the metadata.
//  * @note in this case the metadat is already in scope so saturating is redundant, but shown as an example.
//  */

// try {
//   const response = await sdk.model.markets.create(params)
//   const { market } = await response.saturate().unwrap()

//   console.log(`Market created with market id: ${market.marketId}`)

//   const fetchedMarket = (await sdk.model.markets.get(market.marketId)).unwrap()!

//   const saturatedFetchedMarket = await fetchedMarket.saturate().unwrap()

//   console.log(saturatedFetchedMarket)
// } catch (error) {
//   console.log(error)
// }
