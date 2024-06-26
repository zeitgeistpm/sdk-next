import { IOption } from '@zeitgeistpm/utility/dist/option'
import { PFunc } from '@zeitgeistpm/utility/dist/pfunc'
import { ChainTime } from '@zeitgeistpm/utility/dist/time'
import { Observable } from 'rxjs'
import { Context, IndexerContext, RpcContext } from '../../context'
import { MetadataStorage } from '../../meta'
import { IndexedMarket, Market, RpcMarket, SaturatedRpcMarket } from '../types'
import {
  CreateMarketParams,
  CreateMarketResult,
  CreateMarketTransaction,
} from './functions/create/types'
import { MarketGetQuery } from './functions/get/types'
import { MarketList, MarketsListQuery } from './functions/list/types'
import { MarketStage } from './marketstage'
import { RuntimeDispatchInfo } from '@polkadot/types/interfaces'
import { ForeignAssetId, MarketId } from '../../primitives'
import { MetadataVerification } from './functions/verify-metadata/types'
import { FullMarketFragment } from '@zeitgeistpm/indexer'

export * from './functions/create/types'
export * from './functions/list/types'
export * from './functions/verify-metadata/types'
export * from './market'
export * from './marketstage'

/**
 * Zeitgeist Markets model.
 * Query and create markets.
 */
export type Markets<C extends Context<MS>, MS extends MetadataStorage = MetadataStorage> = {
  /**
   * List markets. Stronger quering is enabled when connecting to indexer.
   *
   * @note Pagination behaves differently between rcp and indexer environments.
   *
   * @param query MarketsListQuery<C>
   * @returns Promise<MarketList<C, MS>>
   */
  list: (query?: MarketsListQuery<C>) => Promise<MarketList<C, MS>>

  /**
   * Get a market by its id.
   */
  get: PFunc<
    /**
     * Get a rpc market by its id.
     *
     * @param query MarketGetQuery
     * @returns Promise<Market<C, MS> | null>
     */
    (query: MarketGetQuery) => Promise<IOption<Market<C, MS>>>,
    C extends RpcContext<MS>
      ? {
          /**
           * Stream changes to the market.
           *
           * @param query MarketGetQuery
           * @returns Observable<RpcMarket<C, MS>>
           */
          $: (query: MarketGetQuery) => Observable<RpcMarket<C, MS>>
        }
      : {}
  >

  /**
   * Create a market. Only available when connecting to rpc.
   */
  create: C extends RpcContext<MS>
    ? PFunc<
        <C extends RpcContext<MS>, P extends CreateMarketParams<C, MS>>(
          params: P,
          feePayingAsset?: ForeignAssetId,
        ) => Promise<CreateMarketResult<C, MS>>,
        {
          tx: (params: CreateMarketParams<C, MS>) => CreateMarketTransaction
          calculateFees: (params: CreateMarketParams<C, MS>) => Promise<RuntimeDispatchInfo>
        }
      >
    : never

  /**
   * Verify that the market metadata as stored on the indexer matches the metadata as stored in IPFS.
   * Note that a `SaturatedRpcMarket` is required to verify the metadata.
   * A saturated rpc market is a market that has fetched and attached metadata from IPFS.
   * We clean and compare the metadata fields that are stored on both the indexer and rpc/ipfs and see if they match.
   *
   * @param rpcMarket SaturatedRpcMarket<RpcContext, MetadataStorage>
   * @param idxMarket IndexedMarket<IndexerContext> | FullMarketFragment
   * @returns MetadataVerification
   */
  verifyMetadata: (
    rpcMarket: SaturatedRpcMarket<RpcContext, MetadataStorage>,
    idxMarket: IndexedMarket<IndexerContext> | FullMarketFragment,
  ) => MetadataVerification

  /**
   * Get the current stage of a market.
   *
   * @param market Market<Context<MS>, MS>
   * @param time ChainTime | undefined
   * @returns Promise<MarketStage>
   */
  getStage: C extends RpcContext<MS>
    ? (market: Market<Context<MS>, MS>, time?: ChainTime) => Promise<MarketStage>
    : never
}
