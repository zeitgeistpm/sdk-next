import { Context } from '../context'
import * as Market from './market'
import { Model } from './types'

/**
 * Create top level enriched zeitgeist model interface.
 *
 * @generic C - Context
 * @param context C
 * @returns Model<C>
 */
export const model = <C extends Context>(context: C): Model<C> => {
  return {
    markets: Market.markets(context),
  }
}
