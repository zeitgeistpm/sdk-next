import type { Option, StorageKey, u128 } from '@polkadot/types'
import type { ZeitgeistPrimitivesPool } from '@polkadot/types/lookup'
import { isNull } from '@polkadot/util'
import {
  Context,
  IndexerContext,
  isFullContext,
  isIndexerContext,
  isRpcContext,
  RpcContext,
} from '../../../../context/types'
import { MetadataStorage } from '../../../../meta'
import { isPaginated } from '../../../../primitives/pagination'
import { fromEntries, Pool } from '../../pool'
import { PoolList } from '../../poolslist'
import { PoolsListQuery } from '../../types'

/**
 * Query for a list of pools.
 * Query capabilities and returned data differentiates between a rpc and indexer context.
 *
 * @generic C - Context
 * @param context C - the context to query in
 * @param query ListQuery<C>
 * @returns Promise<PoolList<C>>
 */
export const listPools = async <C extends Context<MS>, MS extends MetadataStorage>(
  context: C,
  query: PoolsListQuery<C, MS>,
): Promise<PoolList<C, MS>> => {
  const pools =
    isFullContext<MS>(context) || isIndexerContext<MS>(context)
      ? await listFromIndexer<typeof context, MS>(context, query)
      : isRpcContext<MS>(context)
      ? await listFromRpc<typeof context, MS>(context, query)
      : null

  if (isNull(pools)) {
    throw new Error('No pools. Should be unreachable code path')
  }

  return pools as PoolList<C, MS>
}

/**
 * Concrete listing function for indexer context
 * @private
 */
const listFromIndexer = async <C extends IndexerContext, MS extends MetadataStorage>(
  context: C,
  query: PoolsListQuery<C, MS>,
): Promise<Pool<C, MS>[]> => {
  return (await context.indexer.pools(query)).pools as Pool<C, MS>[]
}

/**
 * Concrete listing function for rpc context
 * @private
 */
const listFromRpc = async <C extends RpcContext<MS>, MS extends MetadataStorage>(
  ctx: C,
  query?: PoolsListQuery<C, MS>,
): Promise<Pool<C, MS>[]> => {
  let entries: [StorageKey<[u128]>, Option<ZeitgeistPrimitivesPool>][]

  if (query && isPaginated(query)) {
    const keys = query.keys ?? (await ctx.api.query.swaps.pools.keys())
    entries = await ctx.api.query.swaps.pools.entriesPaged({
      args: [],
      pageSize: query.limit,
      startKey: keys[query.offset].toHex(),
    })
  } else {
    entries = await ctx.api.query.swaps.pools.entries()
  }

  return fromEntries<C, MS>(ctx, entries)
}
