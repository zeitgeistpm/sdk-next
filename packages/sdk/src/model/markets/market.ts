import type { u128 } from '@polkadot/types'
import { ZeitgeistPrimitivesMarket } from '@polkadot/types/lookup'
import type { ISubmittableResult } from '@polkadot/types/types'
import { isCodec, isNumber } from '@polkadot/util'
import {
  MarketCreation,
  type FullMarketFragment,
  type MarketStatus as IndexerMarketStatus,
} from '@zeitgeistpm/indexer'
import {
  ExtractableResult,
  KeyringPairOrExtSigner,
  signAndSend,
  TransactionError,
  TransactionHooks,
} from '@zeitgeistpm/rpc'
import { assert } from '@zeitgeistpm/utility/dist/assert'
import * as E from '@zeitgeistpm/utility/dist/either'
import { throwsC } from '@zeitgeistpm/utility/dist/error'
import * as O from '@zeitgeistpm/utility/dist/option'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { blockDate, ChainTime, DateTimespan } from '@zeitgeistpm/utility/dist/time'
import CID from 'cids'
import Decimal from 'decimal.js'
import {
  Context,
  FullContext,
  IndexerContext,
  isRpcContext,
  RpcContext,
} from '../../context'
import { MarketTypeOf, MetadataStorage, StorageIdTypeOf, StorageTypeOf } from '../../meta'
import { MarketMetadata, categoryMetadataIsComplete } from '../../meta/market'
import { Data, isIndexedData, isRpcData, parseAssetId, ZTG } from '../../primitives'
import { now } from '../time/functions/now'
import { ExchangeFullSetParams, PoolDeploymentParams, RpcPool } from '../types'
import { extractPoolCreationEventForMarket } from './functions/create'
import { ReportOutcomeParams } from './outcome'

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
  C extends FullContext<MS> | IndexerContext ? IndexedMarket<C, MS> : never,
  MS
>

/**
 * Concrete Market type for a indexed market.
 */
export type IndexedMarket<
  C extends Context<MS>,
  MS extends MetadataStorage = MetadataStorage,
> = FullMarketFragment & (C extends RpcContext<MS> ? MarketMethods<C, MS> : {})

/**
 * Concrete Market type for a rpc market.
 */
export type RpcMarket<
  C extends RpcContext<MS>,
  MS extends MetadataStorage = MetadataStorage,
> = ZeitgeistPrimitivesMarket &
  MarketMethods<C, MS> & {
    /**
     * Market id/index. Set for conformity and convenince when fetching markets from rpc.
     */
    marketId: number

    /**
     * Conform a rpc market to a indexed market type by fetching metadata, poolid from external storage(default IPFS) and decoding data.
     */
    saturate: Te.TaskEither<Error, SaturatedRpcMarket<C, MS>, []>
  }

export type SaturatedRpcMarket<
  C extends RpcContext<MS>,
  MS extends MetadataStorage,
> = RpcMarket<C, MS> & IndexedBase & MarketTypeOf<MS>

/**
 * The base type of indexed data that also can be infered from the rpc data.
 */
export type IndexedBase = Omit<FullMarketFragment, keyof MarketMetadata>

/**
 * Interface on market with methods for deploying swap pools, buying and selling sets of assets..
 */
export type MarketMethods<C extends Context<MS>, MS extends MetadataStorage> = {
  /**
   * Fetch metadata from external storage(default IPFS).
   */
  fetchMetadata: Te.TaskEither<Error, O.IOption<MarketTypeOf<MS>>, []>
  /**
   * Deploy a swap pool for the market.
   *
   * @param params Omit<PoolDeploymentParams, 'marketId'>
   * @returns Promise<EitherInterface<Error, RpcPool>>
   */
  deploySwapPool: Te.TaskEither<
    TransactionError,
    ExtractableResult<E.IEither<Error, RpcPool>>,
    [params: Omit<PoolDeploymentParams, 'marketId'> & TransactionHooks]
  >
  /**
   * Deploy a swap pool for the market and add liquidity.
   *
   * @param params Omit<PoolDeploymentParams, 'marketId'>
   * @returns Promise<EitherInterface<Error, RpcPool>>
   */
  deploySwapPoolAndAdditionalLiquidity: Te.TaskEither<
    TransactionError,
    ExtractableResult<E.IEither<Error, RpcPool>>,
    [params: Omit<PoolDeploymentParams, 'marketId'> & TransactionHooks]
  >
  /**
   * Buy a full set of market assets.
   *
   * @param params Omit<ExchangeFullSetParams, 'marketId'>
   * @returns Promise<EitherInterface<Error, ISubmittableResult>>
   */
  buyCompleteSet: Te.TaskEither<
    TransactionError,
    ISubmittableResult,
    [params: Omit<ExchangeFullSetParams, 'marketId'> & TransactionHooks]
  >
  /**
   * Sell a full set of market assets.
   *
   * @param params Omit<ExchangeFullSetParams, 'marketId'>
   * @returns Promise<EitherInterface<Error, ISubmittableResult>>
   */
  sellCompleteSet: Te.TaskEither<
    TransactionError,
    ISubmittableResult,
    [params: Omit<ExchangeFullSetParams, 'marketId'> & TransactionHooks]
  >
  /**
   * Redeem the shares for a market.
   *
   * @param params { signer: KeyringPairOrExtSigner } & TransactionHooks
   * @returns Promise<EitherInterface<Error, ISubmittableResult>>
   */
  redeemShares: Te.TaskEither<
    Error,
    ISubmittableResult,
    [params: { signer: KeyringPairOrExtSigner } & TransactionHooks]
  >
  /**
   * Dispute the current market outcome with a proposed new outcome.
   *
   * @param params Omit<ReportOutcomeParams, 'marketId'>
   * @returns Promise<EitherInterface<Error, ISubmittableResult>>
   */
  disputeOutcome: Te.TaskEither<
    TransactionError,
    ISubmittableResult,
    [params: Omit<ReportOutcomeParams, 'marketId'> & TransactionHooks]
  >
  /**
   * Report the outcome of a market. Can only be called by the markets oracle address.
   *
   * @param params Omit<ReportOutcomeParams, 'marketId'>
   * @returns Promise<EitherInterface<Error, ISubmittableResult>>
   */
  reportOutcome: Te.TaskEither<
    TransactionError,
    ISubmittableResult,
    [params: Omit<ReportOutcomeParams, 'marketId'> & TransactionHooks]
  >
  /**
   * Destroy a market, including its outcome assets, market account and pool account.
   *
   * Must be called by `DestroyOrigin`. Bonds (unless already returned) are slashed without
   * exception. Can currently only be used for destroying CPMM markets.
   *
   * @origin DestroyOrigin
   * @param params {signer: KeyringPairOrExtSigner}
   * @returns Promise<EitherInterface<Error, ISubmittableResult>>
   */
  adminDestroyMarket: Te.TaskEither<
    TransactionError,
    ISubmittableResult,
    [params: { signer: KeyringPairOrExtSigner } & TransactionHooks]
  >
  /**
   * Immediately move an open market to closed.
   *
   * @origin CloseOrigin
   * @param signer {signer: KeyringPairOrExtSigner}
   * @returns Promise<EitherInterface<Error, ISubmittableResult>>
   */
  adminMoveMarketToClosed: Te.TaskEither<
    TransactionError,
    ISubmittableResult,
    [params: { signer: KeyringPairOrExtSigner } & TransactionHooks]
  >
  /**
   * Immediately move a reported or disputed market to resolved.
   *
   * @origin ResolveOrigin
   * @param signer {signer: KeyringPairOrExtSigner}
   * @returns Promise<EitherInterface<Error, ISubmittableResult>>
   */
  adminMoveMarketToResolved: Te.TaskEither<
    TransactionError,
    ISubmittableResult,
    [params: { signer: KeyringPairOrExtSigner } & TransactionHooks]
  >
  /**
   * Approves a market that is waiting for approval from the
   * advisory committee.
   *
   * @origin ApproveOrigin
   * @param signer {signer: KeyringPairOrExtSigner}
   * @returns Promise<EitherInterface<Error, ISubmittableResult>>
   */
  approveMarket: Te.TaskEither<
    Error,
    ISubmittableResult,
    [params: { signer: KeyringPairOrExtSigner } & TransactionHooks]
  >
  /**
   * Clean up the pool of a resolved market.
   *
   * @origin The root origin.
   * @param params Omit<ReportOutcomeParams, 'marketId'>
   * @returns Promise<EitherInterface<Error, ISubmittableResult>>
   */
  adminCleanUpPool: Te.TaskEither<
    TransactionError,
    ISubmittableResult,
    [params: Omit<ReportOutcomeParams, 'marketId'> & TransactionHooks]
  >
}

/**
 * Union type of all market statuses as string.
 */
export type MarketStatus = keyof typeof IndexerMarketStatus

/**
 * Type for market deadlines as numbers.
 */
export type MarketDeadlines = {
  gracePeriod: number
  oracleDuration: number
  disputeDuration: number
}

/**
 * Typeguard to check if market has associated marketmethods.
 *
 * @param market Market<C, MS>
 * @returns market is Market<C, MS> & MarketMethods
 */
export const hasMarketMethods = <
  C extends Context<MS>,
  MS extends MetadataStorage = MetadataStorage,
>(
  market: Market<C, MS>,
): market is Market<C, MS> & MarketMethods<C, MS> => 'deploySwapPool' in market

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
  let market = attachMarketMethods(context, primitive as Market<C, MS>) as Market<C, MS>

  market.marketId = isNumber(id) ? id : id.toNumber()

  market.saturate = Te.from(async () => {
    const [metadata, pool] = await Promise.all([
      market.fetchMetadata(),
      context.api.query.marketCommons.marketPool(market.marketId).then(id => {
        if (id.isSome) {
          return context.api.query.swaps.pools(id.unwrap()).then(p => p.unwrapOr(null))
        }
      }),
    ])

    const outcomeAssets = pool ? pool.assets.toArray().map(a => JSON.stringify(a)) : []

    const hasValidMetaCategories =
      O.isSome(metadata) && categoryMetadataIsComplete(metadata.value)

    const base: IndexedBase = {
      hasValidMetaCategories,
      id: `${market.marketId}`,
      marketId: market.marketId,
      creation:
        primitive.creation.type === 'Advised'
          ? MarketCreation.Advised
          : MarketCreation.Permissionless,
      creator: primitive.creator.toHuman(),
      oracle: primitive.oracle.toHuman(),
      deadlines: primitive.deadlines,
      creatorFee: primitive.creatorFee.toNumber(),
      scoringRule: primitive.scoringRule.type,
      outcomeAssets: outcomeAssets,
      metadata: primitive.metadata.toHex(),
      baseAsset: JSON.stringify(parseAssetId(primitive.baseAsset).unwrap()),
      status: primitive.status.toString() as FullMarketFragment['status'],
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

    marketWithMethods.fetchMetadata = Te.from(async () => {
      const hex = isCodec(market.metadata) ? market.metadata.toHex() : market.metadata
      const cid = new CID('f0155' + hex.slice(2))
      const id = { __meta: 'markets', cid: cid } as StorageIdTypeOf<MS['markets']>
      const metadata = await context.storage.of('markets').get(id)
      return metadata
    })

    marketWithMethods.deploySwapPool = Te.from(async params => {
      assert(!(await hasPool(context, market)), () => {
        throw new Error('Cannot deploy pool for market that allready has pool.')
      })

      const tx = context.api.tx.predictionMarkets.deploySwapPoolForMarket(
        market.marketId,
        params.swapFee,
        params.amount,
        params.weights,
      )

      const extrinsic = await signAndSend({
        api: context.api,
        tx,
        signer: params.signer,
        hooks: params.hooks,
      })

      return {
        raw: extrinsic,
        saturate: () =>
          extractPoolCreationEventForMarket(context, extrinsic.events, market.marketId),
      }
    })

    marketWithMethods.deploySwapPoolAndAdditionalLiquidity = Te.from(async params => {
      assert(!(await hasPool(context, market)), () => {
        throw new Error('Cannot deploy pool for market that allready has pool.')
      })

      const tx = context.api.tx.predictionMarkets.deploySwapPoolAndAdditionalLiquidity(
        market.marketId,
        params.swapFee,
        params.amount,
        params.weights,
      )

      const extrinsic = await signAndSend({
        api: context.api,
        tx,
        signer: params.signer,
        hooks: params.hooks,
      })

      return {
        raw: extrinsic,
        saturate: () =>
          extractPoolCreationEventForMarket(context, extrinsic.events, market.marketId),
      }
    })

    marketWithMethods.buyCompleteSet = Te.from(async params => {
      return await signAndSend({
        api: context.api,
        tx: context.api.tx.predictionMarkets.buyCompleteSet(market.marketId, params.amount),
        signer: params.signer,
        hooks: params.hooks,
      })
    })

    marketWithMethods.sellCompleteSet = Te.from(async params => {
      return await signAndSend({
        api: context.api,
        tx: context.api.tx.predictionMarkets.sellCompleteSet(
          market.marketId,
          params.amount,
        ),
        signer: params.signer,
      })
    })

    marketWithMethods.redeemShares = Te.from(async params => {
      return await signAndSend({
        api: context.api,
        tx: context.api.tx.predictionMarkets.redeemShares(market.marketId),
        signer: params.signer,
        hooks: params.hooks,
      })
    })

    marketWithMethods.disputeOutcome = Te.from(async params => {
      return await signAndSend({
        api: context.api,
        tx: context.api.tx.predictionMarkets.dispute(market.marketId, params.outcome),
        signer: params.signer,
        hooks: params.hooks,
      })
    })

    marketWithMethods.reportOutcome = Te.from(async params => {
      return await signAndSend({
        api: context.api,
        tx: context.api.tx.predictionMarkets.report(market.marketId, params.outcome),
        signer: params.signer,
        hooks: params.hooks,
      })
    })

    marketWithMethods.adminDestroyMarket = Te.from(async params => {
      return await signAndSend({
        api: context.api,
        tx: context.api.tx.predictionMarkets.adminDestroyMarket(market.marketId),
        signer: params.signer,
        hooks: params.hooks,
      })
    })

    marketWithMethods.adminMoveMarketToClosed = Te.from(async params => {
      return await signAndSend({
        api: context.api,
        tx: context.api.tx.predictionMarkets.adminMoveMarketToClosed(market.marketId),
        signer: params.signer,
        hooks: params.hooks,
      })
    })

    marketWithMethods.adminMoveMarketToResolved = Te.from(async params => {
      return await signAndSend({
        api: context.api,
        tx: context.api.tx.predictionMarkets.adminMoveMarketToResolved(market.marketId),
        signer: params.signer,
        hooks: params.hooks,
      })
    })

    marketWithMethods.approveMarket = Te.from(async params => {
      return await signAndSend({
        api: context.api,
        tx: context.api.tx.predictionMarkets.approveMarket(market.marketId),
        signer: params.signer,
        hooks: params.hooks,
      })
    })

    marketWithMethods.adminCleanUpPool = Te.from(async params => {
      return await signAndSend({
        api: context.api,
        tx: context.api.tx.swaps.adminCleanUpPool(market.marketId, params.outcome),
        signer: params.signer,
        hooks: params.hooks,
      })
    })

    return marketWithMethods
  }
  return market
}

/**
 * Get the pool id of a market in a way to works for both indexed and rpc data.
 *
 * @param market Market<C, MS>
 * @returns Promise<O.IOption<number>>
 */
export const getPoolId = async <
  C extends Context<MS>,
  MS extends MetadataStorage = MetadataStorage,
>(
  context: C,
  market: Market<C, MS>,
): Promise<O.IOption<number>> => {
  if (isIndexedData(market)) {
    return market.pool?.poolId ? O.option(O.some(market.pool?.poolId)) : O.option(O.none())
  } else {
    if (isRpcContext(context)) {
      const pool = await context.api.query.marketCommons.marketPool(market.marketId)
      return pool.isSome ? O.option(O.some(pool.unwrap().toNumber())) : O.option(O.none())
    } else {
      const {
        pools: [pool],
      } = await context.indexer.pools({
        where: {
          marketId_eq: market.marketId,
        },
      })
      return pool ? O.option(O.some(pool.poolId)) : O.option(O.none())
    }
  }
}

/**
 * Check if a rpc or indexed market has pool associated.
 *
 * @param market Market<C, MS>
 * @returns Promise<boolean>
 */
export const hasPool = async <
  C extends Context<MS>,
  MS extends MetadataStorage = MetadataStorage,
>(
  context: C,
  market: Market<C, MS>,
): Promise<boolean> => {
  return O.isSome(await getPoolId(context, market))
}

/**
 * Get the market status.
 *
 * @param market Market<Context>
 * @returns MarketStatus
 */
export const getStatus = (market: Market<Context>): MarketStatus => {
  return isRpcData(market) ? market.status.type : market.status
}

/**
 * Get the market deadlines.
 *
 * @param market Market<Context>
 * @returns MarketDeadlines
 */
export const getDeadlines = (market: Market<Context>): MarketDeadlines => {
  if (isRpcData(market)) {
    return {
      gracePeriod: market.deadlines.gracePeriod.toNumber() as number,
      oracleDuration: market.deadlines.oracleDuration.toNumber() as number,
      disputeDuration: market.deadlines.disputeDuration.toNumber() as number,
    }
  }
  return {
    gracePeriod: Number(market.deadlines?.gracePeriod ?? 0),
    oracleDuration: Number(market.deadlines?.oracleDuration ?? 28_000),
    disputeDuration: Number(market.deadlines?.disputeDuration ?? 28_000),
  }
}

/**
 * Get the market period as a Timespan.
 *
 * @param market Market<Context>
 * @param now ChainTime
 * @returns Timespan
 */
export const timespanOf = (market: Market<Context>, now: ChainTime): DateTimespan => {
  if (isRpcData(market)) {
    const start = market.period.isTimestamp
      ? new Date(market.period.asTimestamp.start.toNumber())
      : blockDate(now, market.period.asBlock.start.toNumber())
    const end = market.period.isTimestamp
      ? new Date(market.period.asTimestamp.end.toNumber())
      : blockDate(now, market.period.asBlock.end.toNumber())

    return { start, end }
  }

  return {
    start: new Date(Number(market.period.start)),
    end: new Date(Number(market.period.end)),
  }
}

/**
 * Check if a market has a report.
 *
 * @param market Market<Context>
 * @returns boolean
 */
export const hasReport = (market: Market<Context>): boolean => {
  return isRpcData(market) ? market.report.isSome : !!market.report
}

/**
 * Get the market reporter address if market is reported.
 *
 * @param market Market<Context>
 * @returns O.IOption<string>
 */
export const getReporter = (market: Market<Context>) => {
  return O.fromNullable(
    isRpcData(market) ? market.report.unwrapOr(null)?.by.toString() : market.report?.by,
  )
}

/**
 * Get the market reported at block if market is reported.
 *
 * @param market Market<Context>
 * @returns O.IOption<number>
 */
export const getReportedAt = (market: Market<Context>) => {
  return O.fromNullable(
    isRpcData(market) ? market.report.unwrapOr(null)?.at.toNumber() : market.report?.at,
  )
}

/**
 * Get the projected end timestamp for a market.
 *
 * @note If market has period as timestamps will use that directly and if its set to a block end date
 * it will project a approximate end timestamp based on the on chain current block and block time.
 *
 * @param context Context<MS>
 * @param market Market<C, MS>
 * @returns Promise<number | null>
 */
export const projectEndTimestamp = async <
  C extends Context<MS>,
  MS extends MetadataStorage,
>(
  ctx: C,
  market: Market<C, MS>,
  _now?: ChainTime,
): Promise<number | null> => {
  const chainTime = isRpcContext(ctx) ? await (_now ?? now(ctx)) : null

  if (isRpcData(market)) {
    if (market.period.isTimestamp) {
      return market.period.asTimestamp.end.toNumber()
    } else if (chainTime) {
      const endBlock = Number(market.period.asBlock[1].toHuman())
      return blockDate(chainTime, endBlock).getTime()
    }
  } else {
    if (market.period.timestamp) {
      return Number(market.period.timestamp[1])
    } else if (chainTime) {
      const endBlock = (market.period.block as Array<number>)[1]
      return blockDate(chainTime, endBlock).getTime()
    }
  }

  return null
}

/**
 * Get scalar market bounds.
 *
 * @param market Market<Context>
 * @returns E.IEither<Error, [Decimal, Decimal]>
 */
export const getScalarBounds = (
  market: Market<Context>,
): E.IEither<Error, [Decimal, Decimal]> => {
  if (isRpcData(market)) {
    if (!market.marketType.isScalar)
      return E.either(E.left(new Error('Not a scalar market')))
    const bounds = market.marketType.asScalar
    return E.either(
      E.right([
        new Decimal(bounds[0].toString()).div(ZTG),
        new Decimal(bounds[1].toString()).div(ZTG),
      ]),
    )
  } else {
    if (!market.marketType.scalar) return E.either(E.left(new Error('Not a scalar market')))
    const bounds = market.marketType.scalar as [string, string]
    return E.either(
      E.right([new Decimal(bounds[0]).div(ZTG), new Decimal(bounds[1]).div(ZTG)]),
    )
  }
}

/**
 *
 *
 * @param ctx Context<MS>
 * @param market Market<C>
 */
// export const getPrediction = async <C extends Context<MS>, MS extends MetadataStorage>(
//   ctx: C,
//   market: Market<Context>,
// ) => {
//   if (isRpcData(market)) {
//     if (market.status.type === 'Resolved') {
//       const report = market.report.unwrap()
//       const outcome = report.outcome.toNumber()
//       const pool = (await getPool(ctx, market)).unwrap()!!
//       poolPrices
//     }
//   } else {
//   }
// }
