import type { WsProvider } from '@polkadot/api'
import * as Indexer from '@zeitgeistpm/indexer'
import { assert } from '@zeitgeistpm/utility/dist/assert'
import { assign } from '@zeitgeistpm/utility/dist/observable'
import polly from 'polly-js'
import { from, Observable, of } from 'rxjs'
import { mergeMap, shareReplay } from 'rxjs/operators'
import type { FullContext, IndexerContext, RpcContext } from './context/types'
import { debug } from './debug'
import { MetadataStorage, saturate } from './meta'
import {
  asIndexerConfig,
  asRpcConfig,
  Config,
  Context,
  FullConfig,
  IndexerConfig,
  isFullConfig,
  isIndexerConfig,
  isRpcConfig,
  RpcConfig,
  sdk,
  Sdk,
  teardown,
} from './types'

/**
 * Create an instance of the zeitgeist sdk with full features of both indexer and chain rpc.
 *
 * @mode full
 * @note create with different config to enable indexer or rpc features.
 * @param config FullConfig - Rpc and indexer config
 * @returns Promise<Sdk<FullContext>>
 */
export async function create<MS extends MetadataStorage<any>>(
  config: FullConfig<MS>,
): Promise<Sdk<FullContext<MS>, MS>>
/**
 * Create an instance of the zeitgeist sdk with only rpc features.
 *
 * @mode rpc
 * @note create with different config to enable indexer or rpc features.
 * @param config RpcConfig - Config for the rpc node
 * @returns Promise<Sdk<RpcContext>>
 */
export async function create<MS extends MetadataStorage<any>>(
  config: RpcConfig<MS>,
): Promise<Sdk<RpcContext<MS>, MS>>
/**
 * Create an instance of the zeitgeist sdk with only indexer features.
 *
 * @mode indexer
 * @note create with different config to enable indexer or rpc features.
 * @param config IndexerConfig - Config for the indexer
 * @returns Promise<Sdk<IndexerContext>>
 */
export async function create<MS extends MetadataStorage<any>>(
  config: IndexerConfig,
): Promise<Sdk<IndexerContext, MS>>
export async function create<MS extends MetadataStorage<any>>(config: Config<MS>) {
  assert(
    isFullConfig(config) || isRpcConfig(config) || isIndexerConfig(config),
    () =>
      new Error(
        `Initialization error. Config needs to specify at least a valid indexer option or api rpc option.`,
      ),
  )

  if (isFullConfig(config)) {
    debug(
      `Using rpc and indexer enabled sdk, indexed data will be prefered when indexer loads.`,
      config,
      'debug',
    )
    return sdk(await createFullContext(config))
  } else if (isIndexerConfig(config)) {
    debug(
      `Using only indexer, no rpc methods or transactions on chain are available to the sdk.`,
      config,
      'warn',
    )
    return sdk(await createIndexerContext(config))
  } else {
    debug(
      `Using only rpc, querying data might be more limited and/or slower.`,
      config,
      'warn',
    )
    return sdk(await createRpcContext(config))
  }
}

/**
 * Initialize the indexer and/or rpc concurrently and emit partially applied intances of the Sdk.
 * Useful when initializing in a UI context where displaying data from the indexer as
 * fast as possible is a priority.
 *
 * Creates a shared observable that replays last emitted sdk instace to late subscribers,
 * and disconnectes the rpc provider when all subscribers unsubscribe.
 *
 * @note If config is indexer and rpc, indexer sdk will emit first.
 *
 * @param config FullConfig
 * @returns Observable<Sdk<Context<MS>, MS>>
 */
export const create$ = <MS extends MetadataStorage = MetadataStorage>(
  config: Config<MS>,
): Observable<Sdk<Context<MS>, MS>> => {
  const config$ = isFullConfig(config)
    ? of(asIndexerConfig(config), asRpcConfig(config))
    : of(config)

  const context$ = config$.pipe(
    mergeMap(config => {
      if (isIndexerConfig(config)) {
        return from(createIndexerContext(config))
      }
      return from(createRpcContext(config))
    }),
    assign(),
  )

  const sdk$: Observable<Sdk<Context<MS>, MS>> = context$.pipe(
    mergeMap(
      context =>
        new Observable<Sdk<Context<MS>, MS>>(subscription => {
          subscription.add(() => teardown(context))
          subscription.next(sdk(context))
        }),
    ),
  )

  return sdk$.pipe(shareReplay({ bufferSize: 1, refCount: true }))
}

/**
 * Create a full context with both rpc and indexer capabilities.
 *
 * @param config RpcConfig
 * @returns Promise<FullContext>
 */
export const createFullContext = async <MS extends MetadataStorage<any>>(
  config: FullConfig<MS>,
): Promise<FullContext<MS>> => {
  const [rpc, indexer] = await Promise.all([
    createRpcContext(config),
    createIndexerContext(config),
  ])
  return {
    ...rpc,
    ...indexer,
  }
}

/**
 * Create an indexer context that only connects to the rpc api.
 *
 * @param config RpcConfig
 * @returns Promise<RpcContext>
 */
export const createRpcContext = async <MS extends MetadataStorage<any>>(
  config: RpcConfig<MS>,
): Promise<RpcContext<MS>> => {
  const { ApiPromise, WsProvider } = await import('@polkadot/api')
  const { options } = await import('@zeitgeistpm/rpc')

  debug(`connecting to rpc: ${config.provider}`, config)

  const provider = await polly()
    .logger(_ => {
      debug(`rpc connection failed, retrying..`, config, 'warn')
    })
    .waitAndRetry(config.connectionRetries ?? 8)
    .executeForPromise<WsProvider>(
      () =>
        new Promise((resolve, reject) => {
          const provider = new WsProvider(config.provider)
          provider.on('error', error => {
            reject(error)
          })
          provider.on('connected', () => {
            resolve(provider)
          })
        }),
    )

  const api = await ApiPromise.create({ ...options({ provider }) })

  debug(`connected to node rpc`, { ...config, color: '#36a4e3' })

  return {
    api,
    provider,
    storage: saturate<MS>(config.storage),
  }
}

/**
 * Create an indexer context that only connects to the gql indexer.
 *
 * @param config IndexerConfig
 * @returns Promise<IndexerContext>
 */
export const createIndexerContext = async (
  config: IndexerConfig,
): Promise<IndexerContext> => {
  debug(`connecting to indexer: ${config.indexer}`, config)

  const indexer = Indexer.create({ uri: config.indexer })

  const pinged = await polly()
    .logger(_ => {
      debug(`indexer connection failed, retrying..`, config, 'warn')
    })
    .waitAndRetry(config.connectionRetries ?? 8)
    .executeForPromise(() => indexer.ping())

  debug(`connected to indexer, response time ${pinged}ms`, {
    ...config,
    color: '#52c45e',
  })

  return { indexer }
}

export default create
