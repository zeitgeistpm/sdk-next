import type { SubmittableExtrinsic } from '@polkadot/api/types'
import { u128 } from '@polkadot/types'
import type {
  ZeitgeistPrimitivesAsset,
  ZeitgeistPrimitivesMarketMarketCreation,
  ZeitgeistPrimitivesMarketMarketDisputeMechanism,
  ZeitgeistPrimitivesPoolScoringRule,
} from '@polkadot/types/lookup'
import type { ISubmittableResult } from '@polkadot/types/types'
import type {
  ExtractableResult,
  KeyringPairOrExtSigner,
  TransactionHooks,
} from '@zeitgeistpm/rpc'
import type { IEither } from '@zeitgeistpm/utility/dist/either'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { RpcContext } from '../../../../context'
import { MarketTypeOf, MetadataStorage } from '../../../../meta'
import { AssetId } from '../../../../primitives'
import { Pool } from '../../../swaps/pool'
import { Market } from '../../market'

/**
 * Union type for creating a standalone market or permissionless cpmm market with pool.
 */
export type CreateMarketParams<C extends RpcContext<MS>, MS extends MetadataStorage> = (
  | CreateStandaloneMarketParams<C, MS>
  | CreateMarketWithPoolParams<C, MS>
) &
  TransactionHooks

/**
 * Base parameters for creating a market.
 */
export type CreateMarketBaseParams<C extends RpcContext<MS>, MS extends MetadataStorage> = {
  /**
   * The base asset of the market. Can be ZTG or another
   */
  baseAsset: ZeitgeistPrimitivesAsset | AssetId
  /**
   * The signer of the transaction. Can be a unlocked keyring pair or extension.
   */
  signer: KeyringPairOrExtSigner
  /**
   * Metadata to store in external storage alongside the market.
   */
  metadata: Omit<MarketTypeOf<MS>, 'img'> & { img?: Blob }
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
        /**
         * The start and end block of the market.
         */
        Block: [number, number]
      }
    | {
        /**
         * The start and end timestamp of the market.
         */
        Timestamp: [number, number]
      }

  deadlines: {
    /**
     * The number of blocks to wait after trading ends and before the oracle can resolve the market.
     */
    gracePeriod: number
    /**
     * The number of blocks to wait for the oracle to resolve the market.
     * If this period is exceeded, the market will go into open resolving where anyone can resolve the market.
     */
    oracleDuration: number
    /**
     * The number of blocks to await possible disputes after market is resolved.
     */
    disputeDuration: number
  }
  /**
   * Market dispute mechanism.
   * @note Authorized is the only one available atm.
   */
  disputeMechanism:
    | ZeitgeistPrimitivesMarketMarketDisputeMechanism
    | 'Authorized'
    | 'Court'
    | 'SimpleDisputes'
  /**
   * If true, the extrinsic will wait for the market to be finalize in a block before resolving.
   * Otherwise it will resolve immediately after inclusion.
   */
  waitForFinalization?: boolean
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
    swapFee: string | u128
    /**
     * The ammount to deploy in ZTG
     */
    amount: string | u128
    /**
     * Weighting of the assets.
     */
    weights: Array<string | u128>
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
): params is CreateMarketWithPoolParams<C, MS> => params && 'pool' in params

/**
 * The result of creating a market.
 * Market and pool(if created) can be lazily extracted from events using the data function.
 *
 * @generic P extends CreateMarketParams - Data will contain market and pool if params is with pool
 */
export type CreateMarketResult<
  C extends RpcContext<MS>,
  MS extends MetadataStorage = MetadataStorage,
  P extends CreateMarketParams<C, MS> = CreateMarketParams<C, MS>,
> = ExtractableResult<IEither<Error, CreateMarketData<C, MS, P>>>

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
  market: Market<C, MS>
  pool: P extends CreateMarketWithPoolParams<C, MS> ? Pool<C, MS> : undefined
}

/**
 * A transaction object encapsulating the raw transaction and a rollback function
 * to remove metadata from storage if submission fails.
 *
 * @note its the consumers responsibility to call rollback if transaction fails.
 */
export type CreateMarketTransaction = {
  tx: SubmittableExtrinsic<'promise', ISubmittableResult>
  rollbackMetadata: Te.TaskEither<Error, void[], []>
}
