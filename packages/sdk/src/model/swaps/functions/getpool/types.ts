import { u128 } from '@polkadot/types'
import { isNumber } from '@polkadot/util'

export type PoolGetQuery = PoolGetByIdQuery | PoolGetByMarketIdQuery

export type PoolGetByIdQuery = {
  poolId: number
}

export type PoolGetByMarketIdQuery = {
  marketId: number
}

export const isPoolIdQuery = (query: PoolGetQuery): query is PoolGetByIdQuery =>
  'poolId' in query && isNumber(query.poolId)

export const isMarketIdQuery = (query: PoolGetQuery): query is PoolGetByMarketIdQuery =>
  'marketId' in query && isNumber(query.marketId)
