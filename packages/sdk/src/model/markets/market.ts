import { ApiPromise } from '@polkadot/api'
import { u128 } from '@polkadot/types'
import {
  ZeitgeistPrimitivesMarket,
  ZeitgeistPrimitivesMarketMarketDispute,
} from '@polkadot/types/lookup'
import { ISubmittableResult } from '@polkadot/types/types'
import { isNumber } from '@polkadot/util'
import { FullMarketFragment } from '@zeitgeistpm/indexer'
import { KeyringPairOrExtSigner, signAndSend } from '@zeitgeistpm/rpc'
import { assert } from '@zeitgeistpm/utility/dist/assert'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { throwsC } from '@zeitgeistpm/utility/dist/error'
import CID from 'cids'
import {
  Context,
  FullContext,
  IndexerContext,
  isRpcContext,
  RpcContext,
} from '../../context'
import { MarketTypeOf, MetadataStorage, StorageIdTypeOf, StorageTypeOf } from '../../meta'
import { MarketMetadata } from '../../meta/market'
import { Data, isIndexedData } from '../../primitives'
import { ExchangeFullSetParams, PoolDeploymentParams, RpcPool } from '../types'
import { extractPoolCreationEventForMarket } from './functions/create'
import { ReportOutcomeParams } from './outcome'
import { isNone } from '@zeitgeistpm/utility/dist/option'

export * from './functions/create/types'
export * from './functions/list/types'

/**
 * Union type for Indexed and Rpc Markets.
 */
export type Market<
  C extends Context<MS>,
  MS extends MetadataStorage = MetadataStorage,
> = Data<
  C,
  C extends RpcContext<MS> ? RpcMarket<C, MS> | SaturatedRpcMarket<C, MS> : never,
  C extends FullContext<MS> | IndexerContext ? IndexedMarket<C, MS> : never
>

/**
 * Concrete Market type for a indexed market.
 */
export type IndexedMarket<
  C extends Context<MS>,
  MS extends MetadataStorage = MetadataStorage,
> = FullMarketFragment & (C extends RpcContext<MS> ? MarketMethods : {})

/**
 * Concrete Market type for a rpc market.
 */
export type RpcMarket<
  C extends RpcContext<MS>,
  MS extends MetadataStorage = MetadataStorage,
> = ZeitgeistPrimitivesMarket &
  MarketMethods & {
    /**
     * Market id/index. Set for conformity and convenince when fetching markets from rpc.
     */
    marketId: number
    /**
     * Fetch metadata from external storage(default IPFS).
     */
    fetchMetadata: Te.TaskEither<Error, MarketTypeOf<MS>, []>
    /**
     * Conform a rpc market to a indexed market type by fetching metadata, poolid from external storage(default IPFS) and decoding data.
     */
    saturate: Te.TaskEither<Error, SaturatedRpcMarket<C, MS>, []>
    /**
     * Fetch disputes for the market.
     */
    fetchDisputes: Te.TaskEither<Error, ZeitgeistPrimitivesMarketMarketDispute[], []>
  }

export type SaturatedRpcMarket<
  C extends RpcContext<MS>,
  MS extends MetadataStorage,
> = RpcMarket<C, MS> & IndexedBase & MarketTypeOf<MS>

/**
 * Interface on market with methods for deploying swap pools, buying and selling sets of assets..
 */
export type MarketMethods = {
  /**
   * Deploy a swap pool for the market.
   *
   * @param params Omit<PoolDeploymentParams, 'marketId'>
   * @returns Promise<EitherInterface<Error, RpcPool>>
   */
  deploySwapPool: Te.TaskEither<
    Error,
    RpcPool,
    [params: Omit<PoolDeploymentParams, 'marketId'>]
  >
  /**
   * Deploy a swap pool for the market and add liquidity.
   *
   * @param params Omit<PoolDeploymentParams, 'marketId'>
   * @returns Promise<EitherInterface<Error, RpcPool>>
   */
  deploySwapPoolAndAdditionalLiquidity: Te.TaskEither<
    Error,
    RpcPool,
    [params: Omit<PoolDeploymentParams, 'marketId'>]
  >
  /**
   * Buy a full set of market assets.
   *
   * @param params Omit<ExchangeFullSetParams, 'marketId'>
   * @returns Promise<EitherInterface<Error, ISubmittableResult>>
   */
  buyCompleteSet: Te.TaskEither<
    Error,
    ISubmittableResult,
    [params: Omit<ExchangeFullSetParams, 'marketId'>]
  >
  /**
   * Sell a full set of market assets.
   *
   * @param params Omit<ExchangeFullSetParams, 'marketId'>
   * @returns Promise<EitherInterface<Error, ISubmittableResult>>
   */
  sellCompleteSet: Te.TaskEither<
    Error,
    ISubmittableResult,
    [params: Omit<ExchangeFullSetParams, 'marketId'>]
  >
  /**
   * Redeem the shares for a market.
   *
   * @param params { signer: KeyringPairOrExtSigner }
   * @returns Promise<EitherInterface<Error, ISubmittableResult>>
   */
  redeemShares: Te.TaskEither<Error, ISubmittableResult, [signer: KeyringPairOrExtSigner]>
  /**
   * Dispute the current market outcome with a proposed new outcome.
   *
   * @param params Omit<ReportOutcomeParams, 'marketId'>
   * @returns Promise<EitherInterface<Error, ISubmittableResult>>
   */
  disputeOutcome: Te.TaskEither<
    Error,
    ISubmittableResult,
    [params: Omit<ReportOutcomeParams, 'marketId'>]
  >
  /**
   * Report the outcome of a market. Can only be called by the markets oracle address.
   *
   * @param params Omit<ReportOutcomeParams, 'marketId'>
   * @returns Promise<EitherInterface<Error, ISubmittableResult>>
   */
  reportOutcome: Te.TaskEither<
    Error,
    ISubmittableResult,
    [params: Omit<ReportOutcomeParams, 'marketId'>]
  >
  /**
   * Destroy a market, including its outcome assets, market account and pool account.
   *
   * Must be called by `DestroyOrigin`. Bonds (unless already returned) are slashed without
   * exception. Can currently only be used for destroying CPMM markets.
   *
   * @origin DestroyOrigin
   * @param signer KeyringPairOrExtSigner
   * @returns Promise<EitherInterface<Error, ISubmittableResult>>
   */
  adminDestroyMarket: Te.TaskEither<
    Error,
    ISubmittableResult,
    [signer: KeyringPairOrExtSigner]
  >
  /**
   * Immediately move an open market to closed.
   *
   * @origin CloseOrigin
   * @param signer KeyringPairOrExtSigner
   * @returns Promise<EitherInterface<Error, ISubmittableResult>>
   */
  adminMoveMarketToClosed: Te.TaskEither<
    Error,
    ISubmittableResult,
    [signer: KeyringPairOrExtSigner]
  >
  /**
   * Immediately move a reported or disputed market to resolved.
   *
   * @origin ResolveOrigin
   * @param signer KeyringPairOrExtSigner
   * @returns Promise<EitherInterface<Error, ISubmittableResult>>
   */
  adminMoveMarketToResolved: Te.TaskEither<
    Error,
    ISubmittableResult,
    [signer: KeyringPairOrExtSigner]
  >
  /**
   * Approves a market that is waiting for approval from the
   * advisory committee.
   *
   * @origin ApproveOrigin
   * @param signer KeyringPairOrExtSigner
   * @returns Promise<EitherInterface<Error, ISubmittableResult>>
   */
  approveMarket: Te.TaskEither<Error, ISubmittableResult, [signer: KeyringPairOrExtSigner]>
  /**
   * Clean up the pool of a resolved market.
   *
   * @origin The root origin.
   * @param params Omit<ReportOutcomeParams, 'marketId'>
   * @returns Promise<EitherInterface<Error, ISubmittableResult>>
   */
  adminCleanUpPool: Te.TaskEither<
    Error,
    ISubmittableResult,
    [params: Omit<ReportOutcomeParams, 'marketId'>]
  >
}

/**
 * The base type of indexed data that also can be infered from the rpc data.
 */
export type IndexedBase = Omit<FullMarketFragment, keyof MarketMetadata>

/**
 * Augment a market primitive with id and data expanding utility functions.
 *
 * @param context RpcContext
 * @param id u128
 * @param primitive ZeitgeistPrimitivesMarket
 * @returns AugmentedAugmentedRpcMarket
 */
export const rpcMarket = <C extends RpcContext<MS>, MS extends MetadataStorage>(
  context: C,
  id: u128 | number,
  primitive: ZeitgeistPrimitivesMarket,
): Market<C, MS> => {
  let market = primitive as Market<C, MS>

  market.marketId = isNumber(id) ? id : id.toNumber()

  market.fetchMetadata = Te.from(async () => {
    const hex = market.metadata.toHex()
    const cid = new CID('f0155' + hex.slice(2))
    const id = { __meta: 'markets', cid: cid } as StorageIdTypeOf<MS['markets']>
    const metadata = await context.storage.of('markets').get(id)
    return metadata.unwrapOr(
      throwsC(Error(`could not fetch metadata for market: ${market.marketId}`)),
    )
  })

  market.fetchDisputes = Te.from(async () => {
    const disputes = await context.api.query.predictionMarkets.disputes(id)
    return disputes.toArray()
  })

  market.saturate = Te.from(async () => {
    const [metadata, poolId, end] = await Promise.all([
      market.fetchMetadata(),
      context.api.query.marketCommons.marketPool(id),
      projectEndTimestamp<C, MS>(context.api, market),
    ])

    const base: IndexedBase = {
      id: `${market.marketId}`,
      marketId: market.marketId,
      creation: primitive.creation.type,
      creator: primitive.creator.toHuman(),
      oracle: primitive.oracle.toHuman(),
      end: end,
      creatorFee: primitive.creatorFee.toNumber(),
      poolId: poolId.isSome ? poolId.unwrap().toNumber() : undefined,
      scoringRule: primitive.scoringRule.type,
      status: primitive.status.toHuman() as FullMarketFragment['status'],
      period: primitive.period.toHuman() as FullMarketFragment['period'],
      marketType: primitive.marketType.toHuman() as FullMarketFragment['marketType'],
      disputeMechanism:
        primitive.disputeMechanism.toHuman() as FullMarketFragment['disputeMechanism'],
      report: primitive.report.toHuman() as FullMarketFragment['report'],
      resolvedOutcome:
        primitive.resolvedOutcome.toHuman() as FullMarketFragment['resolvedOutcome'],
    }

    let saturatedRpcMarket = {
      ...base,
      ...(metadata as StorageTypeOf<MS['markets']>),
    } as SaturatedRpcMarket<C, MS>

    attachMarketMethods<C, MS>(context, saturatedRpcMarket as Market<C, MS>)

    return saturatedRpcMarket
  })

  market = attachMarketMethods(context, market)

  return market
}

/**
 * Attach transaction interfaces for deploying pool etc to market.
 *
 * @param context Context<MS>
 * @param market Market<C, MS>
 * @returns Market<C, MS>
 */
export const attachMarketMethods = <C extends Context<MS>, MS extends MetadataStorage>(
  context: C,
  market: Market<C, MS>,
): Market<C, MS> => {
  if (isRpcContext<MS>(context)) {
    let marketWithMethods = market as Market<typeof context, MS>

    marketWithMethods.deploySwapPool = Te.from(async params => {
      assert(!(await hasPool(market)), () => {
        throw new Error('Cannot deploy pool for market that allready has pool.')
      })

      const tx = context.api.tx.predictionMarkets.deploySwapPoolForMarket(
        market.marketId,
        params.swapFee,
        params.amount,
        params.weights,
      )

      const extrinsic = await signAndSend(context.api, tx, params.signer)

      const pool = extractPoolCreationEventForMarket(
        context,
        extrinsic.events,
        market.marketId,
      )

      return pool.unwrap()
    })

    marketWithMethods.deploySwapPoolAndAdditionalLiquidity = Te.from(async params => {
      assert(!(await hasPool(market)), () => {
        throw new Error('Cannot deploy pool for market that allready has pool.')
      })

      const tx = context.api.tx.predictionMarkets.deploySwapPoolAndAdditionalLiquidity(
        market.marketId,
        params.swapFee,
        params.amount,
        params.weights,
      )

      const extrinsic = await signAndSend(context.api, tx, params.signer)

      const pool = extractPoolCreationEventForMarket(
        context,
        extrinsic.events,
        market.marketId,
      )

      return pool.unwrap()
    })

    marketWithMethods.buyCompleteSet = Te.from(async params => {
      return await signAndSend(
        context.api,
        context.api.tx.predictionMarkets.buyCompleteSet(market.marketId, params.amount),
        params.signer,
      )
    })

    marketWithMethods.sellCompleteSet = Te.from(async params => {
      return await signAndSend(
        context.api,
        context.api.tx.predictionMarkets.sellCompleteSet(market.marketId, params.amount),
        params.signer,
      )
    })

    marketWithMethods.redeemShares = Te.from(async signer => {
      return await signAndSend(
        context.api,
        context.api.tx.predictionMarkets.redeemShares(market.marketId),
        signer,
      )
    })

    marketWithMethods.disputeOutcome = Te.from(async params => {
      return await signAndSend(
        context.api,
        context.api.tx.predictionMarkets.dispute(market.marketId, params.outcome),
        params.signer,
      )
    })

    marketWithMethods.reportOutcome = Te.from(async params => {
      return await signAndSend(
        context.api,
        context.api.tx.predictionMarkets.report(market.marketId, params.outcome),
        params.signer,
      )
    })

    marketWithMethods.adminDestroyMarket = Te.from(async signer => {
      return await signAndSend(
        context.api,
        context.api.tx.predictionMarkets.adminDestroyMarket(market.marketId),
        signer,
      )
    })

    marketWithMethods.adminMoveMarketToClosed = Te.from(async signer => {
      return await signAndSend(
        context.api,
        context.api.tx.predictionMarkets.adminMoveMarketToClosed(market.marketId),
        signer,
      )
    })

    marketWithMethods.adminMoveMarketToResolved = Te.from(async signer => {
      return await signAndSend(
        context.api,
        context.api.tx.predictionMarkets.adminMoveMarketToResolved(market.marketId),
        signer,
      )
    })

    marketWithMethods.approveMarket = Te.from(async signer => {
      return await signAndSend(
        context.api,
        context.api.tx.predictionMarkets.approveMarket(market.marketId),
        signer,
      )
    })

    marketWithMethods.adminCleanUpPool = Te.from(async params => {
      return await signAndSend(
        context.api,
        context.api.tx.swaps.adminCleanUpPool(market.marketId, params.outcome),
        params.signer,
      )
    })

    return marketWithMethods
  }
  return market
}

/**
 * Check if a rpc or indexed market has pool associated.
 *
 * @param market Market<C, MS>
 * @returns Promise<boolean>
 */
export const hasPool = async <C extends Context<MS>, MS extends MetadataStorage>(
  market: Market<C, MS>,
): Promise<boolean> => {
  if (isIndexedData(market)) {
    return isNumber(market.poolId)
  }
  const saturated = await market.saturate().unwrap()
  return isNumber(saturated.poolId)
}

/**
 * Get the projected end timestamp for a market.
 *
 * @note If market has period as timestamps will use that directly and if its set to a block end date
 * it will project a approximate end timestamp based on the on chain current block and block time.
 *
 * @param context RpcContext
 * @param market AugmentedRpcMarket
 * @returns Promise<number>
 */
export const projectEndTimestamp = async <
  C extends RpcContext<MS>,
  MS extends MetadataStorage,
>(
  api: ApiPromise,
  market: RpcMarket<C, MS>,
): Promise<number> => {
  if (market.period.isTimestamp) {
    return market.period.asTimestamp.end.toNumber()
  } else {
    const endBlock = Number(market.period.asBlock[1].toHuman())
    const now = +(await api.query.timestamp.now()).toString()
    const head = await api.rpc.chain.getHeader()
    const blockNum = head.number.toNumber()
    const diffInMs = +api.consts.timestamp.minimumPeriod.toString() * (endBlock - blockNum)
    return Number(now + diffInMs)
  }
}
