import { MetadataStorage } from 'meta'
import {
  Context,
  FullContext,
  IndexerContext,
  isIndexerContext,
  isRpcContext,
  RpcContext,
} from './context'
import type { Model } from './model/types'

export * from './config/types'
export * from './context/types'

/**
 * Top level Zeitgeist SDK type.
 */
export type Sdk<C extends Context<M>, M extends MetadataStorage> = C & {
  /**
   * Enriched zeitgeist models with features for qyerying data on chain and indexer,
   * and for creating transaction flows with for example richer validation to ensure that
   * the markets you have the official standard of metadata so that they show up in the official frontend.
   */
  model: Model<C, M>
}

/**
 * Typeguard for full sdk
 * @param sdk
 * @returns sdk is Sdk<FullContext>
 */
export const isFullSdk = <M extends MetadataStorage>(sdk: unknown): sdk is Sdk<FullContext<M>, M> =>
  isIndexedSdk(sdk) && isRpcSdk(sdk)

/**
 * Typeguard for indexer sdk
 * @param sdk
 * @returns sdk is Sdk<IndexerContext>
 */
export const isIndexedSdk = <M extends MetadataStorage>(
  sdk: unknown,
): sdk is Sdk<IndexerContext<M>, M> =>
  typeof sdk === 'object' && sdk !== null && isIndexerContext(sdk)

/**
 * Typeguard for rpc sdk
 * @param sdk
 * @returns sdk is Sdk<RpcContext>
 */
export const isRpcSdk = <M extends MetadataStorage>(sdk: unknown): sdk is Sdk<RpcContext<M>, M> =>
  typeof sdk === 'object' && sdk !== null && isRpcContext(sdk)
