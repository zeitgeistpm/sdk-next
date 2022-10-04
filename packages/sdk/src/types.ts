import { MetadataStorage } from './meta'
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
export * from './model/types'

/**
 * Top level Zeitgeist SDK type.
 */
export type Sdk<C extends Context<MS>, MS extends MetadataStorage<any, any>> = {
  /**
   * Enriched zeitgeist models with features for qyerying data on chain and indexer,
   * and for creating transaction flows with for example richer validation to ensure that
   * the markets you have the official standard of metadata so that they show up in the official frontend.
   */
  model: Model<C, MS>
} & C

/**
 * Typeguard for full sdk
 * @param sdk
 * @returns sdk is Sdk<FullContext>
 */
export const isFullSdk = <MS extends MetadataStorage>(
  sdk: unknown,
): sdk is Sdk<FullContext<MS>, MS> => isIndexedSdk(sdk) && isRpcSdk(sdk)

/**
 * Typeguard for indexer sdk
 * @param sdk
 * @returns sdk is Sdk<IndexerContext>
 */
export const isIndexedSdk = <MS extends MetadataStorage>(
  sdk: unknown,
): sdk is Sdk<IndexerContext, MS> => typeof sdk === 'object' && sdk !== null && isIndexerContext(sdk)

/**
 * Typeguard for rpc sdk
 * @param sdk
 * @returns sdk is Sdk<RpcContext>
 */
export const isRpcSdk = <MS extends MetadataStorage>(sdk: unknown): sdk is Sdk<RpcContext<MS>, MS> =>
  typeof sdk === 'object' && sdk !== null && isRpcContext(sdk)
