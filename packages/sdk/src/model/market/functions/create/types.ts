import {
  ZeitgeistPrimitivesMarketMarketPeriod,
  ZeitgeistPrimitivesMarketMarketType,
  ZeitgeistPrimitivesMarketMarketDisputeMechanism,
  ZeitgeistPrimitivesPoolScoringRule,
  ZeitgeistPrimitivesMarketMarketCreation,
} from '@polkadot/types/lookup'
import { KeyringPairOrExtSigner } from '@zeitgeistpm/rpc'
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
  MT extends ZeitgeistPrimitivesMarketMarketType['type'],
  MP extends ZeitgeistPrimitivesMarketMarketPeriod['type'],
  MD extends ZeitgeistPrimitivesMarketMarketDisputeMechanism['type'],
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
  MT extends ZeitgeistPrimitivesMarketMarketType['type'],
  MP extends ZeitgeistPrimitivesMarketMarketPeriod['type'],
  MD extends ZeitgeistPrimitivesMarketMarketDisputeMechanism['type'],
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
  MT extends ZeitgeistPrimitivesMarketMarketType['type'],
  MP extends ZeitgeistPrimitivesMarketMarketPeriod['type'],
  MD extends ZeitgeistPrimitivesMarketMarketDisputeMechanism['type'],
> = CreateMarketBaseParams<MT, MP, MD> & {
  /**
   * Market scoring rule.
   *
   * @default Cpmm
   * @note Cpmm is the only one available atm. Rikkido will become available in a future update.
   */
  scoringRule?: ZeitgeistPrimitivesPoolScoringRule['type']
  /**
   * Market creation type, permissionless or advised.
   */
  creationType: ZeitgeistPrimitivesMarketMarketCreation['type']
}

/**
 * Parameters for creating a market with a pool.
 *
 * @generic MT extends MarketType['type'] - market type
 * @generic MP extends MarketPeriod['type'] - period type
 * @generic MD extends MarketDisputeMechanism['type'] - disputmechanism type
 */
export type CreateMarketWithPoolParams<
  MT extends ZeitgeistPrimitivesMarketMarketType['type'],
  MP extends ZeitgeistPrimitivesMarketMarketPeriod['type'],
  MD extends ZeitgeistPrimitivesMarketMarketDisputeMechanism['type'],
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

/**
 * Check if params is with pool
 *
 * @generic MT extends MarketType['type'] - market type
 * @generic MP extends MarketPeriod['type'] - period type
 * @generic MD extends MarketDisputeMechanism['type'] - disputmechanism type
 *
 * @param params CreateMarketParams<MT, MP, MD>
 * @returns params is CreateMarketWithPoolParams<MT, MP, MD>
 */
export const isWithPool = <
  MT extends ZeitgeistPrimitivesMarketMarketType['type'],
  MP extends ZeitgeistPrimitivesMarketMarketPeriod['type'],
  MD extends ZeitgeistPrimitivesMarketMarketDisputeMechanism['type'],
>(
  params: CreateMarketParams<MT, MP, MD>,
): params is CreateMarketWithPoolParams<MT, MP, MD> => {
  return 'pool' in params
}

/**
 * Helper type to differentiate market types
 */
export type MarketTypeOf<MT extends ZeitgeistPrimitivesMarketMarketType['type']> =
  MT extends 'Categorical'
    ? {
        Categorical: number
      }
    : {
        Scalar: [number, number]
      }

/**
 * Helper type to differentiate period type
 */
export type Period<MP extends ZeitgeistPrimitivesMarketMarketPeriod['type']> =
  MP extends 'Block'
    ? { Block: [number, number] }
    : { Timestamp: [number, number] }

/**
 * Helper type to differentiate dispute mechanism type.
 */
export type DisputeMechanism<
  MD extends ZeitgeistPrimitivesMarketMarketDisputeMechanism['type'],
> = MD extends 'Authorized'
  ? {
      Authorized: string
    }
  : MD extends 'SimpleDisputes'
  ? { SimpleDisputes: null }
  : { Court: null }

export type CreateMarketResponse = RpcMarket
