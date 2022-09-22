import type { CID } from 'ipfs-http-client'
import type { Model } from './model/types'
import {
  Context,
  FullContext,
  IndexerContext,
  isFullContext,
  isIndexerContext,
  isRpcContext,
  RpcContext,
} from './context'
import { MarketMetadata } from './model/market/meta/types'

export * from './context/types'
export * from './config/types'

export type Sdk<C extends Context> = C & {
  /**
   * Enriched zeitgeist models with features for qyerying data on chain and indexer,
   * and for creating transaction flows with for example richer validation to ensure that
   * the markets you have the official standard of metadata so that they show up in the official frontend.
   */
  model: Model<C>
}

export const isFullSdk = (sdk: unknown): sdk is Sdk<FullContext> => isIndexedSdk(sdk) && isRpcSdk(sdk)

export const isIndexedSdk = (sdk: unknown): sdk is Sdk<IndexerContext> =>
  typeof sdk === 'object' && sdk !== null && isIndexerContext(sdk)

export const isRpcSdk = (sdk: unknown): sdk is Sdk<RpcContext> =>
  typeof sdk === 'object' && sdk !== null && isRpcContext(sdk)
