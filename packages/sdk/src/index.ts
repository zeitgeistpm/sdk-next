import polly from 'polly-js'
import { ApiPromise, WsProvider } from '@polkadot/api'
import { assert } from '@zeitgeistpm/utility/dist/assert'
import { ApiContext, FullContext, IndexerContext } from './context'
import * as Indexer from '@zeitgeistpm/indexer'
import {
  ApiConfig,
  Config,
  FullConfig,
  IndexerConfig,
  isApiConfig,
  isFullConfig,
  isIndexerConfig,
  isKnownPreset,
  Sdk,
} from './types'
import { options } from '@zeitgeistpm/api/dist'
import { debug } from './debug'
import * as Model from './model'

export * from './context'
export * from './configs'

/**
 * Create an instance of the zeitgeist sdk.
 * Can be configured to have indexer and node rpc api or on or the other.
 *
 * @param config Config - Can be full config containing configuration for the indexer and rpc or node or one or the other.
 * @returns Promise<Sdk<FullContext | ApiContext | IndexerContext>>
 */
export async function create(config: FullConfig): Promise<Sdk<FullContext>>
export async function create(config: IndexerConfig): Promise<Sdk<IndexerContext>>
export async function create(config: ApiConfig): Promise<Sdk<ApiContext>>
export async function create(config: Config) {
  assert(
    isFullConfig(config) || isApiConfig(config) || isIndexerConfig(config),
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
    const [api, indexer] = await Promise.all([
      createApiContext(config),
      createIndexerContext(config),
    ])

    const context: FullContext = {
      ...api,
      ...indexer,
    }

    const model = Model.create(context)

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
    const context = await createIndexerContext(config)
    const model = Model.create(context)

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
    const context = await createApiContext(config)
    const model = Model.create(context)

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
const createApiContext = async (config: ApiConfig): Promise<ApiContext> => {
  debug(`connecting to rpc: ${config.provider}`, config)

  const provider = await polly()
    .logger(err => {
      debug(`rpc connection failed, retrying..`, config, 'warn')
    })
    .waitAndRetry(5)
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

  config.debug && debug(`connected to node rpc`, { ...config, color: '#36a4e3' })

  return {
    api,
    provider,
  }
}

/**
 * Create the indexer context object.
 * @private
 */
const createIndexerContext = async (
  config: IndexerConfig,
): Promise<IndexerContext> => {
  debug(`connecting to indexer: ${config.indexer}`, config)

  const indexer = Indexer.create({ uri: config.indexer })

  const pinged = await polly()
    .logger(err => {
      debug(`indexer connection failed, retrying..`, config, 'warn')
    })
    .waitAndRetry(3)
    .executeForPromise(() => indexer.ping())

  config.debug &&
    debug(`connected to indexer, response time ${pinged}ms`, {
      ...config,
      color: '#52c45e',
    })

  return { indexer }
}
