import type { Markets } from './market/types'
import { Context } from '../context'

export * from './market/types'

export type Model<C extends Context> = {
  markets: Markets<C>
}
