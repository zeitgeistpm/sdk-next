import { Context, RpcContext } from '../../context'
import { PoolPricesQuery, PoolPrices } from './functions/poolprices/types'

/**
 * Zeitgeist Assets Model
 */
export type Assets<C extends Context> = AssetsShared<C> & AssetsRpc<C>

export type AssetsShared<C extends Context> = {
  /**
   * List prices of assets in a pool for a certain timespan.
   */
  poolPrices: (query: PoolPricesQuery<C>) => Promise<PoolPrices<C>>
}

export type AssetsRpc<C extends Context> = C extends RpcContext ? {} : {}
