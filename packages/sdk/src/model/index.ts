import { MetadataStorage } from '../meta'
import { Context } from '../context'
import * as Market from './markets'
import * as Swaps from './swaps'
import { Model } from './types'

export * from './types'

/**
 * Create top level enriched zeitgeist models interface.
 *
 * @generic C - Context
 * @param context C
 * @returns Model<C>
 */
export const model = <C extends Context<MS>, MS extends MetadataStorage>(
  context: C,
): Model<C, MS> => {
  return {
    markets: Market.markets(context),
    swaps: Swaps.swaps(context),
  }
}
