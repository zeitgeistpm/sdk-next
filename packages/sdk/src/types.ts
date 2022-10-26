import { MetadataStorage } from './meta/index.js'
import {
  Context,
  FullContext,
  IndexerContext,
  isIndexerContext,
  isRpcContext,
  RpcContext,
} from './context/types.js'
import { Model, model } from './model/index.js'
import { isNull } from '@polkadot/util'

export * from './config/types.js'
export * from './context/types.js'
export * from './model/types.js'

/**
 * Top level Zeitgeist SDK type.
 */
export type Sdk<C extends Context<MS>, MS extends MetadataStorage = MetadataStorage> = {
  /**
   * The context for the sdk, can be indexed, rpc or both.
   * If the context has indexer capabilities they will be prefered when fetching data.
   * To force rpc usage use sdk.asRpc()
   */
  readonly context: C
  /**
   * Enriched zeitgeist models with features for qyerying data on chain and indexer,
   * and for creating transaction flows with for example richer validation to ensure that
   * the markets you have the official standard of metadata so that they show up in the official frontend.
   */
  readonly model: Model<C, MS>
  /**
   * Force the sdk to use rpc if available.
   */
  asRpc: C extends RpcContext<MS> ? () => Sdk<C, MS> : never
  /**
   * Force the sdk to use indexer if available.
   */
  asIndexer: C extends IndexerContext ? () => Sdk<C, MS> : never
}

/**
 * Utility for creating a new SDK.
 *
 * @generic C extends Context<MS>
 * @generic MS extends MetadataStorage = MetadataStorage
 * @param context C
 * @returns Sdk<C, MS>
 */
export const sdk = <C extends Context<MS>, MS extends MetadataStorage = MetadataStorage>(
  context: C,
): Sdk<C, MS> => {
  let instance = {
    context,
    model: model(context),
  } as Sdk<C, MS>

  if (isRpcContext(context)) {
    ;(instance as Sdk<RpcContext<MS>, MS>).asRpc = () =>
      sdk<RpcContext<MS>, MS>({
        api: context.api,
        storage: context.storage,
        provider: context.provider,
      })
  }

  if (isIndexerContext(context)) {
    ;(instance as Sdk<IndexerContext, MS>).asIndexer = () =>
      sdk<IndexerContext, MS>({
        indexer: context.indexer,
      })
  }

  return instance
}

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
  sdk: any,
): sdk is Sdk<IndexerContext, MS> =>
  !isNull(sdk) && 'context' in sdk && isIndexerContext(sdk.context)

/**
 * Typeguard for rpc sdk
 * @param sdk
 * @returns sdk is Sdk<RpcContext>
 */
export const isRpcSdk = <MS extends MetadataStorage>(
  sdk: any,
): sdk is Sdk<RpcContext<MS>, MS> =>
  Boolean(!isNull(sdk) && 'context' in sdk && isRpcContext<MS>(sdk.context))
