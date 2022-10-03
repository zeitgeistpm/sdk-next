import type {
  ZeitgeistPrimitivesMarket,
  ZeitgeistPrimitivesMarketMarketCreation,
  ZeitgeistPrimitivesPool,
  ZeitgeistPrimitivesPoolScoringRule,
} from '@polkadot/types/lookup'
import type { ISubmittableResult } from '@polkadot/types/types'
import type { KeyringPairOrExtSigner } from '@zeitgeistpm/rpc'
import type { EitherInterface } from '@zeitgeistpm/utility/dist/either'
import { Storage } from '@zeitgeistpm/web3.storage'
import { RpcContext } from 'context'
import { MetadataStorage, StorageTypeOf } from 'meta'
import type { MarketMetadata } from '../../../../meta/market'

/**
 * Union type for creating a standalone market or permissionless cpmm market with pool.
 */
export type CreateMarketParams<M extends MetadataStorage> =
  | CreateStandaloneMarketParams<M>
  | CreateMarketWithPoolParams<M>

/**
 * Base parameters for creating a market.
 */
export type CreateMarketBaseParams<M extends MetadataStorage> = {
  /**
   * The signer of the transaction. Can be a unlocked keyring pair or extension.
   */
  signer: KeyringPairOrExtSigner
  /**
   * Metadata to store in external storage alongside the market.
   */
  metadata: M['markets'] extends Storage<infer T> ? T : never
  /**
   * Type of market, categorical or scalar
   */
  marketType:
    | {
        Categorical: number
      }
    | {
        Scalar: [number, number]
      }
  /**
   * The resolver of the market outcome
   */
  oracle: string
  /**
   * The period of the market in tuple of timestamps or block numbers.
   */
  period:
    | {
        Block: [number, number]
      }
    | {
        Timestamp: [number, number]
      }
  /**
   * Market dispute mechanism.
   * @note Authorized is the only one available atm.
   */
  disputeMechanism:
    | {
        Authorized: string
      }
    | {
        SimpleDisputes: null
      }
    | {
        Court: null
      }
}

/**
 * Parameters for creating a market without a pool
 */
export type CreateStandaloneMarketParams<M extends MetadataStorage> = CreateMarketBaseParams<M> & {
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
 */
export type CreateMarketWithPoolParams<M extends MetadataStorage> = CreateMarketBaseParams<M> & {
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
 * @param params CreateMarketParams
 * @returns params is CreateMarketWithPoolParams
 */
export const isWithPool = <M extends MetadataStorage>(
  params: CreateMarketParams<M>,
): params is CreateMarketWithPoolParams<M> => {
  return 'pool' in params
}

/**
 * The result of creating a market.
 * Market and pool(if created) can be lazily extracted from events using the data function.
 *
 * @generic P extends CreateMarketParams - Data will contain market and pool if params is with pool
 */
export type CreateMarketResult<M extends MetadataStorage, P = CreateMarketParams<M>> = {
  raw: ISubmittableResult
  /**
   * Lazy function to extract created Market and Pool.
   *
   * @example ```ts
   * const result = await sdk.model.markets.create(...params)
   * const { market, pool } = result.extract().unrightOr(throws)
   * ```
   *
   * @returns EitherInterface<Error, CreateMarketData<P>>
   */
  extract: () => EitherInterface<Error, CreateMarketData<M, P>>
}

/**
 * The lazy data extracted from the market creation result.
 *
 * @generic P extends CreateMarketParams - Data will contain market and pool if params is with pool
 */
export type CreateMarketData<M extends MetadataStorage, P = CreateMarketParams<M>> = {
  /**
   * The market created by the extrinsic.
   */
  market: [number, ZeitgeistPrimitivesMarket]
} & (P extends CreateMarketWithPoolParams<M>
  ? {
      /**
       * The pool created for the market by the extrinsic.
       */
      pool: [number, ZeitgeistPrimitivesPool]
    }
  : {
      /**
       * Pool is not created without pool parameters passed to the create function
       * @deprecated
       */
      pool: undefined
    })
