import type { Markets } from './market/types'
import { Context } from '../context'

export * from './market/types'

/**
 * High level model for interacting with the zeitgeist nodels like markets, assets, liquidity pools etc.
 * Features depends if the sdk is connected to rpc, indexer or both. Some features like submitting transactions
 * require a rpc connection while querying markets etc have more fine graned query filters and ordering when connected
 * to the indexer.
 */
export type Model<C extends Context> = {
  /**
   * Model for interacting with zeitgeist markets.
   * Will also handle metadata storage if configured to do so.
   * If you connect to the zeitgeist main or testnet, this should be configured automatically over IPFS.
   */
  markets: Markets<C>
}
