import { u128 } from '@polkadot/types'
import { ZeitgeistPrimitivesMarket } from '@polkadot/types/lookup'
import { isCodec } from '@polkadot/util'
import { MarketsQuery } from '@zeitgeistpm/indexer'
import { Unpacked } from '@zeitgeistpm/utility/dist/array'
import { EitherInterface } from '@zeitgeistpm/utility/dist/either'
import { RpcContext } from 'context'
import { MarketMetadata } from '../meta/types'

export * from './list/types'
export * from './create/types'

/**
 * Concrete Market type for indexed market list.
 */
export type IndexedMarket = Unpacked<MarketsQuery['markets']>

export type RpcMarket = ZeitgeistPrimitivesMarket & {
  marketId: u128
  storage: () => Promise<EitherInterface<Error, MarketMetadata>>
}

export const isRpcMarket = (market: unknown): market is RpcMarket =>
  typeof market === 'object' && market !== null && isCodec(market) && 'marketId' in market
