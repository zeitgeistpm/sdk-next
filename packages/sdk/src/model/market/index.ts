import { Context } from '../../context'
import { list } from './list'
import { Markets, ListQuery } from './types'

export const markets = <C extends Context>(context: C): Markets<C> => ({
  list: (query: ListQuery<C>) => list(context, query),
})
