import type { WsProvider } from '@polkadot/api'
import type { ApiOptions } from '@polkadot/api/types'
import '@zeitgeistpm/augment-api'

import { definitions } from '@zeitgeistpm/augment-api'

export * from './types'
export * from './lib'

/**
 * Configuration for provider.
 */
export type ZeitgeistApiOptions = {
  provider: WsProvider
}

/**
 * Create options including types and typedefs for the zeitgeist rpc api.
 *
 * @param opts ZeitgeistApiOptions
 * @returns ApiOptions
 */
export const options = (opts: ZeitgeistApiOptions): ApiOptions => {
  return {
    types: {
      ...Object.values(definitions).reduce((acc, { types }) => ({ ...acc, ...types }), {}),
    },
    rpc: {
      ...Object.entries(definitions).reduce(
        (acc, [key, { rpc }]) => ({ ...acc, [key]: rpc }),
        {},
      ),
    },
    provider: opts.provider,
    noInitWarn: true,
  }
}
