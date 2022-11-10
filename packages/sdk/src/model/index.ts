import { MetadataStorage } from '../meta'
import { Context } from '../context'
import * as Market from './markets'
import * as Swaps from './swaps'
import * as Time from './time'
import { Model } from './types'

export * from './types'

/**
 * Create top level enriched zeitgeist models interface.
 *
 * @generic C - Context
 * @param ctx C
 * @returns Model<C>
 */
export const model = <C extends Context<MS>, MS extends MetadataStorage>(
  ctx: C,
): Model<C, MS> => {
  return {
    markets: Market.markets(ctx),
    swaps: Swaps.swaps(ctx),
    time: Time.time(ctx),
  }
}
