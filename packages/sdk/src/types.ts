import { Context } from './context'
import type { Model } from './model/types'

export * from './context/types'
export * from './config/types'
export * from './keyring/types'

export type Sdk<C extends Context> = C & {
  /**
   * Enriched zeitgeist models with features for qyerying data on chain and indexer,
   * and for creating transaction flows with for example richer validation to ensure that
   * the markets you have the official standard of metadata so that they show up in the official frontend.
   */
  model: Model<C>
}
