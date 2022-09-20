import type { WsProvider } from '@polkadot/api'
import type { ApiOptions } from '@polkadot/api/types'
import '@zeitgeistpm/augment-api'

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
export const options = (opts: ZeitgeistApiOptions): ApiOptions => ({
  provider: opts.provider,
  noInitWarn: true,
})
