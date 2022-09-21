import { u128 } from '@polkadot/types'
import { ZeitgeistPrimitivesMarket } from '@polkadot/types/lookup'
import { MarketsQuery } from '@zeitgeistpm/indexer'
import { Unpacked } from '@zeitgeistpm/utility/dist/array'
import { RpcContext } from 'context'

export * from './list/types'
export * from './create/types'

/**
 * Concrete Market type for indexed market list.
 */
export type IndexedMarket = Unpacked<MarketsQuery['markets']>

export type RpcMarket<C extends RpcContext = RpcContext> = ZeitgeistPrimitivesMarket & {
  marketId: u128
  storage: () => ReturnType<C['storage']['get']>
}
