import { ApiPromise, WsProvider } from '@polkadot/api'
import { assert } from '@zeitgeistpm/utility/dist/assert'
import { ApiContext, IndexerContext } from './context'
import * as Indexer from '@zeitgeistpm/indexer'
import {
  ApiConfig,
  Config,
  FullConfig,
  IndexerConfig,
  isFullConfig,
  isIndexerConfig,
  Sdk,
} from './types'
import { options } from '@zeitgeistpm/api/dist'

export * from './context'
export * from './configs'

export async function create(config: FullConfig): Promise<Sdk<FullConfig>>
export async function create(config: ApiConfig): Promise<Sdk<ApiConfig>>
export async function create(config: IndexerConfig): Promise<Sdk<IndexerConfig>>
export async function create(config: Config) {
  assert(
    isFullConfig(config) || isIndexerConfig(config) || isIndexerConfig(config),
    () =>
      new Error(
        `@zeitgeistpm/sdk: Initialization error. Config needs to specify at least a valid indexer option or api rpc option.`,
      ),
  )

  if (isFullConfig(config)) {
    return {
      ...(await createApiContext(config)),
      ...(await createIndexerContext(config)),
    }
  } else if (isIndexerConfig(config)) {
    return createIndexerContext(config)
  } else {
    return createApiContext(config)
  }
}

const createApiContext = async (config: ApiConfig): Promise<ApiContext> => {
  const provider = new WsProvider(config.provider)
  const api = await ApiPromise.create({ ...options({ provider }) })
  return {
    api,
    provider,
  }
}

const createIndexerContext = async (
  config: IndexerConfig,
): Promise<IndexerContext> => {
  return {
    indexer: Indexer.create({ uri: config.indexer }),
  }
}
