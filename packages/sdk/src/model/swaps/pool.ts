import { u128 } from '@polkadot/types'
import { ZeitgeistPrimitivesPool } from '@polkadot/types/lookup'
import { isNumber } from '@polkadot/util'
import { PoolsQuery } from '@zeitgeistpm/indexer'
import { Unpacked } from '@zeitgeistpm/utility/dist/array'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { MetadataStorage } from '../../meta'
import { Context, IndexerContext, RpcContext } from '../../context'
import { Data } from '../../primitives/data'

/**
 * Union Pool type of indexed and rpc types.
 * Will differentiate between indexer and rpc context
 *
 * @generic C Context - the context to fetch the marketlist for.
 */
export type Pool<C extends Context<MS>, MS extends MetadataStorage> = Data<
  C,
  C extends RpcContext<MS> ? RpcPool : never,
  C extends IndexerContext ? IndexedPool : never
>

/**
 * Concrete Pool type for indexed Pool.
 */
export type IndexedPool = Unpacked<PoolsQuery['pools']>

/**
 * Concrete Pool type for rpc Pool.
 */
export type RpcPool = ZeitgeistPrimitivesPool & {
  /**
   * The pool id/index on chain.
   */
  poolId: number
  /**
   * Get the account id for the pool.
   */
  accountId: Te.TaskEither<Error, number, []>
}

/**
 * Create new RpcPool with associated context, id and on chain primitive.
 *
 * @param ctx RpcContext
 * @param poolId number | u128
 * @param primitive ZeitgeistPrimitivesPool
 * @returns RpcPool
 */
export const rpcPool = (
  ctx: RpcContext,
  poolId: number | u128,
  primitive: ZeitgeistPrimitivesPool,
): RpcPool => {
  let pool = primitive as RpcPool

  pool.poolId = isNumber(poolId) ? poolId : poolId.toNumber()

  pool.accountId = Te.from(() =>
    ctx.api.rpc.swaps.poolAccountId(poolId).then(accountId => accountId.toNumber()),
  )

  return pool
}
