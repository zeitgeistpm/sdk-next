import type { WsProvider } from '@polkadot/api'
import type { ApiOptions } from '@polkadot/api/types'

import { definitions } from '@zeitgeistpm/augment-api'
import type { OverrideVersionedType } from '@polkadot/types/types'

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
      //TAssetConversion: 'Option<ZeitgeistPrimitivesAssetsSubsetsBaseAssetsBaseAssetClass>',
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
