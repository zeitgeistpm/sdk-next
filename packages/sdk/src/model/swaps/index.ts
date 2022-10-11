import { pfunc } from '@zeitgeistpm/utility/dist/pfunc'
import { MetadataStorage } from '../../meta'
import { Context, isRpcContext } from '../../context'
import { getPool, getPool$ } from './functions/getpool'
import { listPools } from './functions/listpools'
import { poolPrices, rpcPoolPrices$ } from './functions/poolprices'
import {
  PoolGetQuery,
  PoolPricesQuery,
  PoolPricesStreamQuery,
  PoolsListQuery,
  Swaps,
  SwapsIndexed,
  SwapsRpc,
} from './types'

export * from './types'

/**
 * Create top level enriched zeitgeist Swaps model.
 *
 * @generic C - Context
 * @param ctx C
 * @returns Swaps<C>
 */
export const swaps = <C extends Context<MS>, MS extends MetadataStorage>(ctx: C): Swaps<C, MS> => {
  const indexed: SwapsIndexed<C, MS> = {
    listPools: (query: PoolsListQuery<typeof ctx, MS>) => listPools(ctx, query),
    getPool: (query: PoolGetQuery) => getPool<typeof ctx, MS>(ctx, query),
    poolPrices: (query: PoolPricesQuery) => poolPrices(ctx, query),
  }

  if (isRpcContext<MS>(ctx)) {
    const rpc: SwapsRpc<typeof ctx, MS> = {
      listPools: (query: PoolsListQuery<typeof ctx, MS>) => listPools<typeof ctx, MS>(ctx, query),
      getPool: pfunc((query: PoolGetQuery) => getPool<typeof ctx, MS>(ctx, query), {
        $: (query: PoolGetQuery) => getPool$<typeof ctx, MS>(ctx, query),
      }),
      poolPrices: pfunc((query: PoolPricesQuery) => poolPrices<typeof ctx>(ctx, query), {
        $: (query: PoolPricesStreamQuery) => rpcPoolPrices$(ctx, query),
      }),
    }

    return rpc as Swaps<C, MS>
  }

  return indexed as Swaps<C, MS>
}
