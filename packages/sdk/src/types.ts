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
import { isNull } from '@polkadot/util'

export * from './config/types'
export * from './context/types'
export * from './model/types'

/**
 * Top level Zeitgeist SDK type.
 */
export type Sdk<C extends Context<MS>, MS extends MetadataStorage = MetadataStorage> = C & {
  /**
   * Enriched zeitgeist models with features for qyerying data on chain and indexer,
   * and for creating transaction flows with for example richer validation to ensure that
   * the markets you have the official standard of metadata so that they show up in the official frontend.
   */
  readonly model: Model<C, MS>
}

/**
 * Typeguard for full sdk
 * @param sdk
 * @returns sdk is Sdk<FullContext>
 */
export const isFullSdk = <MS extends MetadataStorage>(sdk: any): sdk is Sdk<FullContext<MS>, MS> =>
  isIndexedSdk(sdk) && isRpcSdk(sdk)

/**
 * Typeguard for indexer sdk
 * @param sdk
 * @returns sdk is Sdk<IndexerContext>
 */
export const isIndexedSdk = <MS extends MetadataStorage>(sdk: any): sdk is Sdk<IndexerContext, MS> =>
  !isNull(sdk) && isIndexerContext(sdk)

/**
 * Typeguard for rpc sdk
 * @param sdk
 * @returns sdk is Sdk<RpcContext>
 */
export const isRpcSdk = <MS extends MetadataStorage>(sdk: unknown): sdk is Sdk<RpcContext<MS>, MS> =>
  Boolean(!isNull(sdk) && isRpcContext<MS>(sdk))

const c = {} as Sdk<Context<MetadataStorage>, MetadataStorage>

if (isRpcSdk(c)) {
  c
}
