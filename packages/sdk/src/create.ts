import type { WsProvider } from '@polkadot/api'
import * as Indexer from '@zeitgeistpm/indexer'
import { options } from '@zeitgeistpm/rpc/dist'
import { assert } from '@zeitgeistpm/utility/dist/assert'
import polly from 'polly-js'
import { isKnownPreset } from './config/known'
import type { FullContext, IndexerContext, RpcContext } from './context'
import { debug } from './debug'
import { MetadataStorage, saturate } from './meta'
import * as Model from './model'
import {
  Config,
  FullConfig,
  IndexerConfig,
  isFullConfig,
  isIndexerConfig,
  isRpcConfig,
  RpcConfig,
  Sdk,
} from './types'

/**
 * Create an instance of the zeitgeist sdk with full features of both indexer and chain rpc.
 *
 * @mode full
 * @note create with different config to enable indexer or rpc features.
 * @param config FullConfig - Rpc and indexer config
 * @returns Promise<Sdk<FullContext>>
 */
export async function create<MS extends MetadataStorage<any, any>>(
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
export async function create<MS extends MetadataStorage<any, any>>(
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
export async function create<MS extends MetadataStorage<any, any>>(
  config: IndexerConfig,
): Promise<Sdk<IndexerContext, MS>>
export async function create<MS extends MetadataStorage<any, any>>(config: Config<MS>) {
  assert(
    isFullConfig<MS>(config) || isRpcConfig<MS>(config) || isIndexerConfig<MS>(config),
    () =>
      new Error(
        `Initialization error. Config needs to specify at least a valid indexer option or api rpc option.`,
      ),
  )

  if (isFullConfig<MS>(config)) {
    const [rpc, indexer] = await Promise.all([createRpcContext(config), createIndexerContext(config)])

    const context: FullContext<MS> = {
      ...rpc,
      ...indexer,
    }

    const model = Model.model<FullContext<MS>, MS>(context)

    return {
      ...context,
      context,
      model,
    }
  } else if (isIndexerConfig<MS>(config)) {
    debug(
      `Using only indexer, no rpc methods or transactions on chain are available to the sdk.`,
      config,
      'warn',
    )
    const context: IndexerContext = await createIndexerContext(config)
    const model = Model.model<IndexerContext, MS>(context)

    return {
      ...context,
      context,
      model,
    }
  } else {
    debug(`Using only rpc, querying data might be more limited and/or slower.`, config, 'warn')
    const context: RpcContext<MS> = await createRpcContext(config)
    const model = Model.model<RpcContext<MS>, MS>(context)

    return {
      ...context,
      context,
      model,
    }
  }
}

/**
 * Create an indexer context that only connects to the rpc api.
 *
 * @param config RpcConfig
 * @returns Promise<RpcContext>
 */
export const createRpcContext = async <MS extends MetadataStorage<any, any>>(
  config: RpcConfig<MS>,
): Promise<RpcContext<MS>> => {
  const { ApiPromise, WsProvider } = await import('@polkadot/api')

  debug(`connecting to rpc: ${config.provider}`, config)

  const provider = await polly()
    .logger(_ => {
      debug(`rpc connection failed, retrying..`, config, 'warn')
    })
    .waitAndRetry(config.connectionRetries ?? 8)
    .executeForPromise<WsProvider>(
      () =>
        new Promise((resolve, reject) => {
          const _provider = new WsProvider(config.provider)
          _provider.on('error', error => {
            reject(error)
          })
          _provider.on('connected', () => {
            resolve(_provider)
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
export const createIndexerContext = async (config: IndexerConfig): Promise<IndexerContext> => {
  debug(`connecting to indexer: ${config.indexer}`, config)

  const indexer = Indexer.create({ uri: config.indexer })

  const pinged = await polly()
    .logger(err => {
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
