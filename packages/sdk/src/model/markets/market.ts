import { ApiPromise } from '@polkadot/api'
import { Option, StorageKey, u128 } from '@polkadot/types'
import {
  ZeitgeistPrimitivesMarket,
  ZeitgeistPrimitivesMarketMarketDispute,
} from '@polkadot/types/lookup'
import { isNumber } from '@polkadot/util'
import { FullMarketFragment } from '@zeitgeistpm/indexer'
import { KeyringPairOrExtSigner, signAndSend } from '@zeitgeistpm/rpc'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import CID from 'cids'
import { RpcPool, rpcPool, PoolDeploymentParams } from '../types'
import { Context, FullContext, IndexerContext, isRpcContext, RpcContext } from '../../context'
import { MarketTypeOf, MetadataStorage, StorageIdTypeOf } from '../../meta'
import { MarketMetadata } from '../../meta/market'
import { Data, isIndexedData, isRpcData } from '../../primitives'
import { extractPoolCreationEventForMarket } from './functions/create'
import { assert } from '@zeitgeistpm/utility/dist/assert'

export * from './functions/create/types'
export * from './functions/list/types'

/**
 * Union type for Indexed and Rpc Markets.
 */
export type Market<C extends Context<MS>, MS extends MetadataStorage> = Data<
  C,
  C extends RpcContext<MS> ? RpcMarket<C, MS> : never,
  C extends FullContext<MS> | IndexerContext ? IndexedMarket<C, MS> : never
>

/**
 * Concrete Market type for a indexed market.
 */
export type IndexedMarket<C extends Context<MS>, MS extends MetadataStorage> = FullMarketFragment &
  (C extends RpcContext<MS> ? MarketMethods : never)

/**
 * Concrete Market type for a rpc market.
 */
export type RpcMarket<
  C extends RpcContext<MS>,
  MS extends MetadataStorage,
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
    saturate: Te.TaskEither<Error, IndexedBase & MarketTypeOf<MS>, []>
    /**
     * Same as saturate, but will try to unwrap in the same go.
     * @throws Error - if unwrap fails
     */
    saturateAndUnwrap: () => Promise<IndexedBase & MarketTypeOf<MS>>
    /**
     * Fetch disputes for the market.
     */
    fetchDisputes: Te.TaskEither<Error, ZeitgeistPrimitivesMarketMarketDispute[], []>
  }

/**
 * Interface on market with methods for deploying swap pools.
 */
export type MarketMethods = {
  deploySwapPool: Te.TaskEither<Error, RpcPool, [Omit<PoolDeploymentParams, 'marketId'>]>
  deploySwapPoolAndAdditionalLiquidity: Te.TaskEither<
    Error,
    RpcPool,
    [Omit<PoolDeploymentParams, 'marketId'>]
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

  market.fetchMetadata = () => {
    const hex = market.metadata.toHex()
    const cid = new CID('f0155' + hex.slice(2))
    const id = { __meta: 'markets', cid: cid } as StorageIdTypeOf<MS['markets']>
    return context.storage.of('markets').get(id)
  }

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
      resolvedOutcome: primitive.resolvedOutcome.toHuman() as FullMarketFragment['resolvedOutcome'],
    }

    return {
      ...base,
      ...metadata.unwrap(),
    }
  })

  market.saturateAndUnwrap = () => market.saturate().then(_ => _.unwrap())

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
    market.deploySwapPool = Te.from(async params => {
      assert(!(await hasPool(market)), () => {
        throw new Error('Cannot deploy pool for market that allready has pool.')
      })

      const tx = context.api.tx.predictionMarkets.deploySwapPoolForMarket(
        market.marketId,
        params.swapFee,
        params.amount,
        params.weights,
      )

      const response = await signAndSend(context.api, tx, params.signer)
      const extrinsic = response.unwrap()

      const pool = extractPoolCreationEventForMarket(context, extrinsic.events, market.marketId)

      return pool.unwrap()
    })

    market.deploySwapPoolAndAdditionalLiquidity = Te.from(async params => {
      assert(!(await hasPool(market)), () => {
        throw new Error('Cannot deploy pool for market that allready has pool.')
      })

      const tx = context.api.tx.predictionMarkets.deploySwapPoolAndAdditionalLiquidity(
        market.marketId,
        params.swapFee,
        params.amount,
        params.weights,
      )

      const response = await signAndSend(context.api, tx, params.signer)
      const extrinsic = response.unwrap()

      const pool = extractPoolCreationEventForMarket(context, extrinsic.events, market.marketId)

      return pool.unwrap()
    })
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
  const saturated = await market.saturateAndUnwrap()
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
export const projectEndTimestamp = async <C extends RpcContext<MS>, MS extends MetadataStorage>(
  api: ApiPromise,
  market: RpcMarket<C, MS>,
): Promise<number> => {
  if (market.period.isTimestamp) {
    return Number(market.period.asTimestamp[1].toHuman())
  } else {
    const endBlock = Number(market.period.asBlock[1].toHuman())
    const now = +(await api.query.timestamp.now()).toString()
    const head = await api.rpc.chain.getHeader()
    const blockNum = head.number.toNumber()
    const diffInMs = +api.consts.timestamp.minimumPeriod.toString() * (endBlock - blockNum)
    return Number(now + diffInMs)
  }
}
