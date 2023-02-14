import { isNull } from '@polkadot/util'
import {
  Context,
  FullContext,
  IndexerContext,
  isIndexerContext,
  isRpcContext,
  RpcContext,
} from './context/types.js'
import { MetadataStorage } from './meta/index.js'
import { Model, model } from './model/index.js'

export * from './config/types.js'
export * from './context/types.js'
export * from './model/types.js'

/**
 * Top level Zeitgeist SDK type.
 */
export type Sdk<C extends Context<MS>, MS extends MetadataStorage = MetadataStorage> = C & {
  /**
   * The context that was used to create the sdk.
   * Used for internal type narrowing to work correctly..
   *
   * @private - pseudo private property
   */
  readonly __context: C
  /**
   * Enriched zeitgeist models with features for qyerying data on chain and indexer,
   * and for creating transaction flows with for example richer validation to ensure that
   * the markets you have the official standard of metadata so that they show up in the official frontend.
   */
  readonly model: Model<C, MS>

  /**
   * Utility for creating a new sdk with rpc features.
   */
  asRpc: C extends RpcContext<MS> | FullContext<MS> ? () => Sdk<RpcContext<MS>, MS> : never
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
    __context: context,
    ...context,
    model: model(context),
  } as Sdk<C, MS>

  if (isRpcContext<MS>(context)) {
    const __context: RpcContext<MS> = {
      api: context.api,
      provider: context.provider,
      storage: context.storage,
    }
    ;(instance as any).asRpc = () => sdk(__context)
  }

  return instance
}

/**
 * Typeguard for full sdk.
 *
 * @param sdk
 * @returns sdk is Sdk<FullContext>
 */
export const isFullSdk = <MS extends MetadataStorage>(
  sdk: unknown,
): sdk is Sdk<FullContext<MS>, MS> => isIndexedSdk(sdk) && isRpcSdk(sdk)

/**
 * Typeguard for indexer sdk.
 *
 * @param sdk
 * @returns sdk is Sdk<IndexerContext>
 */
export const isIndexedSdk = <MS extends MetadataStorage>(
  sdk: any,
): sdk is Sdk<IndexerContext, MS> => !isNull(sdk) && sdk && isIndexerContext(sdk.__context)

/**
 * Typeguard for rpc sdk.
 *
 * @param sdk
 * @returns sdk is Sdk<RpcContext>
 */
export const isRpcSdk = <MS extends MetadataStorage>(
  sdk: any,
): sdk is Sdk<RpcContext<MS>, MS> =>
  Boolean(!isNull(sdk) && isRpcContext<MS>(sdk.__context))
