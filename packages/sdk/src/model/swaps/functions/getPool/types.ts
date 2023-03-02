import { isNumber } from '@polkadot/util'

/**
 * Get pool query, can fetch by either pool or market id.
 */
export type PoolGetQuery = number | string | PoolGetByIdQuery | PoolGetByMarketIdQuery

/**
 * Fetch a pool byt its id.
 */
export type PoolGetByIdQuery = {
  poolId: number
}

/**
 * Fetch a pool by its associated market id.
 */
export type PoolGetByMarketIdQuery = {
  marketId: number
}

/**
 * Typeguard for PoolGetByIdQuery
 *
 * @param query PoolGetQuery
 * @returns query is PoolGetByIdQuery
 */
export const isPoolIdQuery = (query: PoolGetQuery): query is PoolGetByIdQuery =>
  typeof query === 'object' && 'poolId' in query && isNumber(query.poolId)

/**
 * Typeguard for PoolGetByMarketIdQuery
 *
 * @param query PoolGetQuery
 * @returns query is PoolGetByMarketIdQuery
 */
export const isMarketIdQuery = (query: PoolGetQuery): query is PoolGetByMarketIdQuery =>
  typeof query === 'object' && 'marketId' in query && isNumber(query.marketId)
