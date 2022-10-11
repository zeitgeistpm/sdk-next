import { SubmittableExtrinsic } from '@polkadot/api/types'
import type {
  ZeitgeistPrimitivesMarketMarketCreation,
  ZeitgeistPrimitivesPoolScoringRule,
} from '@polkadot/types/lookup'
import type { ISubmittableResult } from '@polkadot/types/types'
import type { KeyringPairOrExtSigner } from '@zeitgeistpm/rpc'
import type { EitherInterface } from '@zeitgeistpm/utility/dist/either'
import { RpcContext } from '../../../../context'
import { MarketTypeOf, MetadataStorage } from '../../../../meta'
import { Pool } from '../../../swaps/pool'
import { RpcMarket } from '../../market'

/**
 * Union type for creating a standalone market or permissionless cpmm market with pool.
 */
export type CreateMarketParams<C extends RpcContext<MS>, MS extends MetadataStorage> =
  | CreateStandaloneMarketParams<C, MS>
  | CreateMarketWithPoolParams<C, MS>

/**
 * Base parameters for creating a market.
 */
export type CreateMarketBaseParams<C extends RpcContext<MS>, MS extends MetadataStorage> = {
  /**
   * The signer of the transaction. Can be a unlocked keyring pair or extension.
   */
  signer: KeyringPairOrExtSigner
  /**
   * Metadata to store in external storage alongside the market.
   */
  metadata: MarketTypeOf<MS>
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

  deadlines: {
    gracePeriod: number
    oracleDuration: number
    disputeDuration: number
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
export type CreateStandaloneMarketParams<
  C extends RpcContext<MS>,
  MS extends MetadataStorage = C['storage'],
> = CreateMarketBaseParams<C, MS> & {
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
export type CreateMarketWithPoolParams<
  C extends RpcContext<MS>,
  MS extends MetadataStorage = C['storage'],
> = CreateMarketBaseParams<C, MS> & {
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
export const isWithPool = <C extends RpcContext<MS>, MS extends MetadataStorage>(
  params: CreateMarketParams<C, MS>,
): params is CreateMarketWithPoolParams<C, MS> => {
  return 'pool' in params
}

/**
 * The result of creating a market.
 * Market and pool(if created) can be lazily extracted from events using the data function.
 *
 * @generic P extends CreateMarketParams - Data will contain market and pool if params is with pool
 */
export type CreateMarketResult<C extends RpcContext<MS>, MS extends MetadataStorage> = {
  raw: ISubmittableResult
  /**
   * Lazy function to saturate response with created Market and Pool.
   *
   * @example ```ts
   * const result = await sdk.model.markets.create(...params)
   * const { market, pool } = result.saturate().unwrap()
   * ```
   *
   * @returns EitherInterface<Error, CreateMarketData<P>>
   */
  saturate: () => EitherInterface<Error, CreateMarketData<C, MS, CreateMarketParams<C, MS>>>
  /**
   * Same as saturate, but will try to unwrap in the same go.
   * @throws Error - if unwrap fails
   */
  saturateAndUnwrap: () => CreateMarketData<C, MS, CreateMarketParams<C, MS>>
}

/**
 * The lazy data extracted from the market creation result.
 *
 * @generic P extends CreateMarketParams - Data will contain market and pool if params is with pool
 */
export type CreateMarketData<
  C extends RpcContext<MS>,
  MS extends MetadataStorage,
  P extends CreateMarketParams<C, MS>,
> = {
  /**
   * The market created by the extrinsic.
   */
  market: RpcMarket<C, MS>
  pool: P extends CreateMarketWithPoolParams<C, MS> ? Pool<C> : undefined
}

export type CreateMarketTransaction = {
  tx: SubmittableExtrinsic<'promise', ISubmittableResult>
  rollbackMetadata: () => Promise<EitherInterface<Error, void>>
}
