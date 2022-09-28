import { u128 } from '@polkadot/types'
import { FullHistoricalAssetsFragment } from '@zeitgeistpm/indexer'
import { Context, IndexerContext } from '../../../../context'
import { Timespan } from '../../../time'
import { BlockNumber } from '../../../time/block'

export type PoolPricesQuery = {
  pool: number
  timespan: Timespan
}

export type PoolPrices<C extends Context> = C extends IndexerContext
  ? IndexedPoolPrices
  : RpcPoolPrices

export type RpcPoolPrices = RpcPoolPrice[]

export type IndexedPoolPrices = IndexedPoolPrice[]

export type PoolPrice = RpcPoolPrice | IndexedPoolPrice

export type IndexedPoolPrice = FullHistoricalAssetsFragment

export type RpcPoolPrice = [BlockNumber, u128][]

export type PoolPricesStreamQuery = { pool: number; tail: BlockNumber | Date }
