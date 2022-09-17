import polly from 'polly-js'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { assert } from '@zeitgeistpm/utility/dist/assert'
import { RpcContext, FullContext, IndexerContext } from './context'
import * as Indexer from '@zeitgeistpm/indexer'
import {
  RpcConfig,
  Config,
  FullConfig,
  IndexerConfig,
  isRpcConfig,
  isFullConfig,
  isIndexerConfig,
  Sdk,
} from './types'
import { options } from '@zeitgeistpm/rpc/dist'
import { debug } from './debug'
import * as Model from './model'
import { isKnownPreset } from './config/known'

export * from './context'
export * from './config'
export * from './types'

/**
 * Create an instance of the zeitgeist sdk with full features of both indexer and chain rpc.
 *
 * @mode full
 * @note create with different config to enable indexer or rpc features.
 * @param config FullConfig - Rpc and indexer config
 * @returns Promise<Sdk<FullContext>>
 */
export async function create(config: FullConfig): Promise<Sdk<FullContext>>

/**
 * Create an instance of the zeitgeist sdk with only indexer features.
 *
 * @mode indexer
 * @note create with different config to enable indexer or rpc features.
 * @param config IndexerConfig - Config for the indexer
 * @returns Promise<Sdk<IndexerContext>>
 */
export async function create(config: IndexerConfig): Promise<Sdk<IndexerContext>>

/**
 * Create an instance of the zeitgeist sdk with only rpc features.
 *
 * @mode rpc
 * @note create with different config to enable indexer or rpc features.
 * @param config RpcConfig - Config for the rpc node
 * @returns Promise<Sdk<RpcContext>>
 */
export async function create(config: RpcConfig): Promise<Sdk<RpcContext>>

export async function create(config: Config) {
  assert(
    isFullConfig(config) || isRpcConfig(config) || isIndexerConfig(config),
    () =>
      new Error(
        `Initialization error. Config needs to specify at least a valid indexer option or api rpc option.`,
      ),
  )

  if (isKnownPreset(config)) {
    debug(`Using known preset ${config.preset}`, config)
  } else {
    debug(
      `Using unknown rpc and/or indexer, make sure the indexer and rpc is working on the same chain.`,
      config,
      'warn',
    )
  }

  if (isFullConfig(config)) {
    const [rpc, indexer] = await Promise.all([
      rpcContext(config),
      indexerContext(config),
    ])

    const context: FullContext = {
      ...rpc,
      ...indexer,
    }

    const model = Model.model(context)

    return {
      ...context,
      model,
    }
  } else if (isIndexerConfig(config)) {
    debug(
      `Using only indexer, no rpc methods or transactions on chain are available to the sdk.`,
      config,
      'warn',
    )
    const context: IndexerContext = await indexerContext(config)
    const model = Model.model(context)

    return {
      ...context,
      model,
    }
  } else {
    debug(
      `Using only rpc, querying data might be more limited and/or slower.`,
      config,
      'warn',
    )
    const context: RpcContext = await rpcContext(config)
    const model = Model.model(context)

    return {
      ...context,
      model,
    }
  }
}

/**
 * Create the api context object.
 * @private
 */
const rpcContext = async (config: RpcConfig): Promise<RpcContext> => {
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
    storage: config.storage,
  }
}

/**
 * Create the indexer context object.
 * @private
 */
const indexerContext = async (config: IndexerConfig): Promise<IndexerContext> => {
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
