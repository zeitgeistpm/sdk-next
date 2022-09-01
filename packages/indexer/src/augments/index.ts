import { GQLSdk } from '..'
import { ping } from './ping'

export type Augments = {
  ping: () => Promise<number>
}

export const augments = (gql: GQLSdk): Augments => {
  return {
    ping: () => ping(gql),
  }
}
