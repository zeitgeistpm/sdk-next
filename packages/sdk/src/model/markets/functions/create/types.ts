import type { SubmittableExtrinsic } from '@polkadot/api/types'
import { u128 } from '@polkadot/types'
import { Perbill } from '@polkadot/types/interfaces'
import type {
  ZeitgeistPrimitivesAsset,
  ZeitgeistPrimitivesMarketMarketCreation,
  ZeitgeistPrimitivesMarketMarketDisputeMechanism,
  ZeitgeistPrimitivesMarketScoringRule,
} from '@polkadot/types/lookup'
import type { AnyNumber, ISubmittableResult } from '@polkadot/types/types'
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
import { Market } from '../../market'
import { PFunc } from '@zeitgeistpm/utility/dist/pfunc'
import { isFunction } from 'lodash-es'

/**
 * Union type for creating a standalone market or permissionless cpmm market with pool.
 */
export type CreateMarketParams<
  C extends RpcContext<MS>,
  MS extends MetadataStorage = C['storage'],
> = CreateMarketBaseParams<MS> & (WithPool | NoPool) & TransactionHooks

/**
 * Base parameters for creating a market.
 */
export type CreateMarketBaseParams<MS extends MetadataStorage> = {
  /**
   * The base asset of the market. Can be ZTG or another
   */
  baseAsset: ZeitgeistPrimitivesAsset | AssetId

  /**
   * How much does the creator take in fees pr trade in PerBill.
   * Its a value between 0 and 1 billion. Where 1 billion is 100% trade fee.
   */
  creatorFee?: Perbill | AnyNumber | Uint8Array

  /**
   * The signer of the transaction. Can be a unlocked keyring pair or extension.
   */
  signer:
    | KeyringPairOrExtSigner
    | {
        handle: (
          extrinsic: SubmittableExtrinsic<'promise', ISubmittableResult>,
        ) => Promise<ISubmittableResult>
        address: string
      }

  /**
   * Metadata to store in external storage alongside the market.
   */
  metadata: Omit<MarketTypeOf<MS>, 'img'> & { img?: Blob | string }

  /**
   * Type of market, categorical or scalar
   */
  marketType:
    | {
        Categorical: number
      }
    | {
        Scalar: [number, number] | [string, string]
      }

  /**
   * Should the market be signed by a proxy.
   */
  proxy?: KeyringPairOrExtSigner

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
  disputeMechanism?:
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
 * Type that represents the params that need to be on the market creation params
 * if the user wants to deploy a pool in the same go.
 *
 * @note CPMM and LMSR supported currently.
 */
export type WithPool = LmsrPool

/**
 * Params for creating a lmsr market with pool.
 */
export type LmsrPool = {
  creationType?: undefined
  scoringRule: 'Lmsr'
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
     * Spot prices of the assets.
     */
    spotPrices: Array<string | u128>
  }
}

/**
 * Params for creating a standalone market without pool.
 */
export type NoPool = {
  /**
   * The type of market creation.
   * @note only applicaple for standalone markets without pool being deployed.
   */
  creationType: ZeitgeistPrimitivesMarketMarketCreation['type']

  /**
   * The scoring rule of the market.
   * @note can be: "Cpmm" | "Lmsr" | "RikiddoSigmoidFeeMarketEma" | "Orderbook"
   */
  scoringRule: ZeitgeistPrimitivesMarketScoringRule['type']
}

/**
 * Check if params is with pool
 *
 * @param params CreateMarketParams
 * @returns params is CreateMarketWithPoolParams
 */
export const isWithPool = <C extends RpcContext<MS>, MS extends MetadataStorage>(
  params: CreateMarketParams<C, MS>,
): params is CreateMarketBaseParams<MS> & WithPool =>
  params && 'pool' in params && typeof params.pool === 'object'

/**
 * The result of creating a market.
 * Market and pool(if created) can be lazily extracted from events using the data function.
 *
 * @generic P extends CreateMarketParams - Data will contain market and pool if params is with pool
 */
export type CreateMarketResult<
  C extends RpcContext<MS>,
  MS extends MetadataStorage = MetadataStorage,
> = ExtractableResult<IEither<Error, CreateMarketData<C, MS>>>

/**
 * The lazy data extracted from the market creation result.
 *
 * @generic P extends CreateMarketParams - Data will contain market and pool if params is with pool
 */
export type CreateMarketData<C extends RpcContext<MS>, MS extends MetadataStorage> = {
  /**
   * The market created by the extrinsic.
   */
  market: Market<C, MS>
}

/**
 * A transaction object encapsulating the raw transaction and a rollback function
 * to remove metadata from storage if submission fails.
 *
 * @note its the consumers responsibility to call rollback if transaction fails.
 */
export type CreateMarketTransaction = {
  tx: SubmittableExtrinsic<'promise', ISubmittableResult>
}

export type CustomTransactionSigner = {
  handle: (
    extrinsic: SubmittableExtrinsic<'promise', ISubmittableResult>,
  ) => Promise<ISubmittableResult>
  address: string
}

export const isCustomTransactionSigner = (signer: any): signer is CustomTransactionSigner =>
  'handle' in signer && isFunction(signer.handle)
