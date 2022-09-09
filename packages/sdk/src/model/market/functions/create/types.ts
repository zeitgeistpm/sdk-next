import {
  MarketPeriod,
  MarketType,
  MarketDisputeMechanism,
  ScoringRule,
  MarketCreation,
} from '@zeitgeistpm/types/dist/interfaces'
import { KeyringPairOrExtSigner } from '../../../../keyring'
import { MarketMetadata } from '../../meta/types'
import { RpcMarket } from '../types'

/**
 * Union type for creating a standalone market or permissionless cpmm market with pool.
 *
 * @generic MT extends MarketType['type'] - market type
 * @generic MP extends MarketPeriod['type'] - period type
 * @generic MD extends MarketDisputeMechanism['type'] - disputmechanism type
 */
export type CreateMarketParams<
  MT extends MarketType['type'] = 'Categorical',
  MP extends MarketPeriod['type'] = 'Timestamp',
  MD extends MarketDisputeMechanism['type'] = 'Authorized',
> =
  | CreateStandaloneMarketParams<MT, MP, MD>
  | CreateMarketWithPoolParams<MT, MP, MD>

/**
 * Base parameters for creating a market.
 *
 * @generic MT extends MarketType['type'] - market type
 * @generic MP extends MarketPeriod['type'] - period type
 * @generic MD extends MarketDisputeMechanism['type'] - disputmechanism type
 */
export type CreateMarketBaseParams<
  MT extends MarketType['type'] = 'Categorical',
  MP extends MarketPeriod['type'] = 'Timestamp',
  MD extends MarketDisputeMechanism['type'] = 'Authorized',
> = {
  /**
   * The signer of the transaction. Can be a unlocked keyring pair or extension.
   */
  signer: KeyringPairOrExtSigner
  /**
   * Metadata to store in external storage alongside the market.
   */
  metadata: MarketMetadata
  /**
   * Type of market, categorical or scalar
   */
  marketType: MarketTypeOf<MT>
  /**
   * The resolver of the market outcome
   */
  oracle: string
  /**
   * The period of the market in tuple of timestamps or block numbers.
   */
  period: Period<MP>
  /**
   * Market dispute mechanism.
   * @note Authorized is the only one available atm.
   */
  disputeMechanism: DisputeMechanism<MD>
}

/**
 * Parameters for creating a market without a pool
 *
 * @generic MT extends MarketType['type'] - market type
 * @generic MP extends MarketPeriod['type'] - period type
 * @generic MD extends MarketDisputeMechanism['type'] - disputmechanism type
 */
export type CreateStandaloneMarketParams<
  MT extends MarketType['type'],
  MP extends MarketPeriod['type'],
  MD extends MarketDisputeMechanism['type'],
> = CreateMarketBaseParams<MT, MP, MD> & {
  /**
   * Market scoring rule.
   *
   * @default Cpmm
   * @note Cpmm is the only one available atm. Rikkido will become available in a future update.
   */
  scoringRule?: ScoringRule['type']
  /**
   * Market creation type, permissionless or advised.
   */
  creationType: MarketCreation['type']
}

/**
 * Parameters for creating a market with a pool.
 *
 * @generic MT extends MarketType['type'] - market type
 * @generic MP extends MarketPeriod['type'] - period type
 * @generic MD extends MarketDisputeMechanism['type'] - disputmechanism type
 */
export type CreateMarketWithPoolParams<
  MT extends MarketType['type'],
  MP extends MarketPeriod['type'],
  MD extends MarketDisputeMechanism['type'],
> = CreateMarketBaseParams<MT, MP, MD> & {
  pool: {
    /**
     * The fee to swap in and out of the pool.
     */
    swapFee: string
    /**
     * The ammount to deploy in ZTG
     */
    amount: string
    /**
     * Weighting of the assets.
     */
    weights: string[]
  }
}

export const isWithPool = <
  MT extends MarketType['type'],
  MP extends MarketPeriod['type'],
  MD extends MarketDisputeMechanism['type'],
>(
  params: CreateMarketParams<MT, MP, MD>,
): params is CreateMarketWithPoolParams<MT, MP, MD> => {
  return 'pool' in params
}

/**
 * Helper type to differentiate market types
 */
export type MarketTypeOf<MT extends MarketType['type']> = MT extends 'Categorical'
  ? {
      Categorical: number
    }
  : {
      Scalar: [number, number]
    }

/**
 * Helper type to differentiate period type
 */
export type Period<MP extends MarketPeriod['type']> = MP extends 'Block'
  ? { Block: [number, number] }
  : { Timestamp: [number, number] }

/**
 * Helper type to differentiate dispute mechanism type.
 */
export type DisputeMechanism<MD extends MarketDisputeMechanism['type']> =
  MD extends 'Authorized'
    ? {
        Authorized: string
      }
    : MD extends 'SimpleDisputes'
    ? { SimpleDisputes: null }
    : { Court: null }

export type CreateMarketResponse = RpcMarket
