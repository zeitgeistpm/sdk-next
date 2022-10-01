import { Context } from '../context'
import * as Market from './markets'
import { MarketMetadata } from './markets/meta/types'
import * as Swaps from './swaps'
import { Model } from './types'

/**
 * Create top level enriched zeitgeist models interface.
 *
 * @generic C - Context
 * @param context C
 * @returns Model<C>
 */
export const model = <C extends Context<M>, M = MarketMetadata>(context: C): Model<C, M> => {
  return {
    markets: Market.markets<C, M>(context),
    swaps: Swaps.swaps(context),
  }
}
