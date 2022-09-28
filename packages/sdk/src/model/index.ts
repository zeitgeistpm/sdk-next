import { Context } from '../context'
import * as Market from './markets'
import * as Swaps from './swaps'
import * as Assets from './assets'
import { Model } from './types'

/**
 * Create top level enriched zeitgeist models interface.
 *
 * @generic C - Context
 * @param context C
 * @returns Model<C>
 */
export const model = <C extends Context>(context: C): Model<C> => {
  return {
    markets: Market.markets(context),
    swaps: Swaps.swaps(context),
    assets: Assets.assets(context),
  }
}
