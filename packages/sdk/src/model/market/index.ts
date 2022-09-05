import { Context } from '../../context'
import { list } from './list'
import { Markets, ListQuery } from './types'

/**
 * Create top level enriched zeitgeist Markets model.
 *
 * @generic C - Context
 * @param context C
 * @returns Markets<C>
 */
export const markets = <C extends Context>(context: C): Markets<C> => ({
  list: (query: ListQuery<C>) => list(context, query),
})
