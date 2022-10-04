import type { Markets } from './markets/types'
import type { Swaps } from './swaps/types'
import { Context } from '../context'
import { MetadataStorage } from 'meta'

export * from './markets/types'
export * from './swaps/types'

/**
 * High level model for interacting with the zeitgeist nodels like markets, assets, liquidity pools etc.
 * Features depends if the sdk is connected to rpc, indexer or both. Some features like submitting transactions
 * require a rpc connection while querying markets etc have more fine graned query filters and ordering when connected
 * to the indexer.
 */
export type Model<C extends Context<MS>, MS extends MetadataStorage> = {
  /**
   * Model for interacting with zeitgeist markets.
   * Will also handle metadata storage if configured to do so.
   * If you connect to the zeitgeist main or testnet, this should be configured automatically over IPFS.
   */
  markets: Markets<C, MS>
  /**
   * Model for interacting with zeitgeist swaps module.
   * Has functionality ti List liqudity pools, join pools with liquidity and swap assets in and out.
   */
  swaps: Swaps<C, MS>
}
