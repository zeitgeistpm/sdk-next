import { Context } from '../context'
import * as Market from './market'
import { Model } from './types'

export const create = <C extends Context>(context: C): Model<C> => {
  return {
    markets: Market.markets(context),
  }
}
