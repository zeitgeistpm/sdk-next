import { Metadata, TaggedMetadata } from 'meta/types'
import { Observable } from 'rxjs'
import {
  Context,
  IndexerContext,
  isFullContext,
  isIndexerContext,
  RpcContext,
} from '../../../../context'
import { augment } from '../../market'
import { IndexedMarket, Market } from '../../types'
import { MarketGetQuery } from './types'

/**
 * Fetch a market by its market id
 * Query capabilities and returned data differentiates between a rpc and indexer context.
 *
 * @generic C - Context
 * @param context C - the context to query inb
 * @param query MarketQuery
 * @returns Promise<Market<C>>
 */
export const get = async <C extends Context<M>, M extends TaggedMetadata = Metadata>(
  context: C,
  query: MarketGetQuery,
): Promise<Market<C, M>> => {
  const data =
    isFullContext(context) || isIndexerContext(context)
      ? await getFromIndexer(context, query)
      : await getFromRpc<M>(context, query)

  return data as Market<C, M>
}

/**
 * Concrete get function for indexer context
 * @private
 */
const getFromIndexer = async (
  context: IndexerContext,
  query: MarketGetQuery,
): Promise<IndexedMarket> => {
  const {
    markets: [market],
  } = await context.indexer.markets({ where: { marketId_eq: query.marketId } })
  return market
}

/**
 * Concrete get function for rpc context
 * @private
 */
const getFromRpc = async <M extends TaggedMetadata = Metadata>(
  context: RpcContext<M>,
  query: MarketGetQuery,
): Promise<Market<RpcContext<M>, M> | null> => {
  const market = await context.api.query.marketCommons.markets(query.marketId)
  if (!market.isSome) return null
  return augment<M>(context, query.marketId, market.unwrap())
}

/**
 * Fetch market and stream changes from rpc.
 *
 * @param context RpcContext<M>
 * @param query MarketGetQuery
 * @returns Observable<Market<RpcContext, M>>
 */
export const get$ = <M extends TaggedMetadata = Metadata>(
  context: RpcContext<M>,
  query: MarketGetQuery,
): Observable<Market<RpcContext<M>, M>> => {
  return new Observable(subscription => {
    const unsub = context.api.query.marketCommons.markets(query.marketId, market => {
      if (!market.isSome) {
        return subscription.unsubscribe()
      }
      subscription.next(augment<M>(context, query.marketId, market.unwrap()))
    })

    return async () => {
      subscription.unsubscribe()
      unsub.then(unsub => unsub())
    }
  })
}
