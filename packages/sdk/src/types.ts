import { Context } from './context'
import type { Model } from './model/types'

export * from './context/types'
export * from './configs/types'

export type Sdk<C extends Context> = C & {
  model: Model<C>
}

export type Config = FullConfig | (ApiConfig | IndexerConfig)

export type BaseConfig = {
  debug?: boolean
}

export type FullConfig = ApiConfig & IndexerConfig

export type ApiConfig = BaseConfig & {
  provider: string | string[]
}

export type IndexerConfig = BaseConfig & {
  indexer: string
}
