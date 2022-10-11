import { PFunc } from '@zeitgeistpm/utility/dist/pfunc'
import { MetadataStorage } from '../../meta'
import { Observable } from 'rxjs'
import { Context, FullContext, IndexerContext, RpcContext } from '../../context'
import { PoolGetQuery } from './functions/getpool/types'
import { PoolList, PoolsListQuery, RpcPoolList } from './functions/listpools/types'
import {
  PoolAssetPricesAtBlock,
  PoolPrices,
  PoolPricesQuery,
  PoolPricesStreamQuery,
} from './functions/poolprices/types'
import { Pool, RpcPool } from './pool'

export * from './functions/types'
export * from './pool'

/**
 * Zeitgeist Swaps model..
 */
export type Swaps<C extends Context<MS>, MS extends MetadataStorage> = {
  /**
   * List liquidity pools.
   * @param query PoolsListQuery<C>
   * @returns Promise<PoolList<C>>
   */
  listPools: (query: PoolsListQuery<C, MS>) => Promise<PoolList<C, MS>>
  /**
   * Get a pool by pool or market id.
   */
  getPool: PFunc<
    (query: PoolGetQuery) => Promise<Pool<C, MS> | null>,
    C extends RpcContext<MS>
      ? {
          /**
           * Stream changes to a pool object.
           * @param query PoolGetQuery
           * @returns Observable<Pool<RpcContext>>
           */
          $: (query: PoolGetQuery) => Observable<Pool<C, MS> | null>
        }
      : {}
  >
  poolPrices: PFunc<
    (query: PoolPricesQuery) => Promise<PoolPrices>,
    C extends RpcContext<MS>
      ? {
          /**
           * Will stream prices for a given pool tailed after a block or date.
           * Will emit the price at each block in the stream as dictated by the resolution passed.
           * When it reaches the end it starts to listen for new blocks and emits an item for every block.
           *
           * @param query PoolPricesStreamQuery
           * @returns Observable<PoolAssetPricesAtBlock>
           */
          $: (query: PoolPricesStreamQuery) => Observable<PoolAssetPricesAtBlock>
        }
      : {}
  >
}
