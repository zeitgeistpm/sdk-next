import { u128 } from '@polkadot/types'
import { ZeitgeistPrimitivesAsset } from '@polkadot/types/lookup'
import { FullHistoricalAssetsFragment } from '@zeitgeistpm/indexer'
import { Context, IndexerContext } from '../../../../context'
import { Timespan } from '../../../time'

export type PoolPricesQuery<C extends Context> = {
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

export type RpcPoolPrice = [ZeitgeistPrimitivesAsset, [number, u128][]]
