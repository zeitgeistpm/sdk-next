import { WsProvider } from '@polkadot/api'
import { ApiOptions } from '@polkadot/api/types'
import * as zeitgeistDefinitions from '@zeitgeistpm/type-defs'
import '@zeitgeistpm/types'

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
  rpc: {
    predictionMarkets: {
      marketOutcomeShareId: {
        description: 'Get the market outcome share identifier.',
        params: [
          {
            name: 'market_id',
            type: 'MarketId',
          },
          {
            name: 'outcome',
            type: 'u16',
          },
          {
            name: 'at',
            type: 'Hash',
            isOptional: true,
          },
        ],
        type: 'Asset',
      },
    },
    swaps: {
      poolSharesId: {
        description: 'Gets the share identifier for the pool shares.',
        params: [
          {
            name: 'pool_id',
            type: 'u128',
          },
          {
            name: 'at',
            type: 'Hash',
            isOptional: true,
          },
        ],
        type: 'Asset',
      },
      poolAccountId: {
        description: "Gets the pool's account.",
        params: [
          {
            name: 'pool_id',
            type: 'u128',
          },
          {
            name: 'at',
            type: 'Hash',
            isOptional: true,
          },
        ],
        type: 'AccountId',
      },
      getSpotPrice: {
        description: "Gets the spot price for a pool's in and out assets.",
        params: [
          {
            name: 'pool_id',
            type: 'u128',
          },
          {
            name: 'asset_in',
            type: 'Asset',
          },
          {
            name: 'asset_out',
            type: 'Asset',
          },
          {
            name: 'at',
            type: 'Hash',
            isOptional: true,
          },
        ],
        type: 'SerdeWrapper',
      },
      getSpotPrices: {
        description: 'Gets spot prices for a range of blocks',
        params: [
          {
            name: 'pool_id',
            type: 'u128',
          },
          {
            name: 'asset_in',
            type: 'Asset',
          },
          {
            name: 'asset_out',
            type: 'Asset',
          },
          {
            name: 'blocks',
            type: 'Vec<BlockNumber>',
          },
        ],
        type: 'Vec<SerdeWrapper>',
      },
    },
  },
  typesAlias: {
    tokens: {
      AccountData: 'TokensAccountData',
    },
  },
  types: {
    ...Object.values(zeitgeistDefinitions).reduce(
      (res: Record<string, any>, { types }): Record<string, any> => ({
        ...res,
        ...types,
      }),
      {},
    ),
    BalanceInfo: {
      amount: 'Balance',
    },
    TokensAccountData: {
      free: 'Balance',
      reserved: 'Balance',
      frozen: 'Balance',
    },
  },
})
