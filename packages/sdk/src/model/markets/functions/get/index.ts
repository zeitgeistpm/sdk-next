import { isNumber, isString } from '@polkadot/util'
import * as O from '@zeitgeistpm/utility/dist/option'
import { Observable } from 'rxjs'
import {
  Context,
  IndexerContext,
  isIndexerContext,
  isRpcContext,
  RpcContext,
} from '../../../../context'
import { MetadataStorage } from '../../../../meta'
import { RpcMarket, rpcMarket } from '../../market'
import { attachMarketMethods, Market } from '../../types'
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
export const get = async <C extends Context<MS>, MS extends MetadataStorage>(
  context: C,
  query: MarketGetQuery,
): Promise<O.IOption<Market<C, MS>>> => {
  if (isIndexerContext<MS>(context)) {
    return getFromIndexer(context, query)
  } else if (isRpcContext<MS>(context)) {
    return getFromRpc<typeof context, MS>(context, query)
  }
  throw new Error('unrechable code detected.')
}

/**
 * Concrete get function for indexer context
 * @private
 */
const getFromIndexer = async <C extends IndexerContext, MS extends MetadataStorage>(
  context: C,
  query: MarketGetQuery,
): Promise<O.IOption<Market<C, MS>>> => {
  const marketId = isNumber(query) || isString(query) ? Number(query) : query.marketId

  const {
    markets: [market],
  } = await context.indexer.markets({ where: { marketId_eq: marketId } })

  if (market) {
    return O.option(
      O.some(
        attachMarketMethods<typeof context, MS>(context, market as Market<C, MS>) as Market<
          C,
          MS
        >,
      ),
    )
  }
  return O.option(O.none())
}

/**
 * Concrete get function for rpc context
 * @private
 */
const getFromRpc = async <C extends RpcContext<MS>, MS extends MetadataStorage>(
  context: C,
  query: MarketGetQuery,
): Promise<O.IOption<Market<C, MS>>> => {
  const marketId = isNumber(query) || isString(query) ? Number(query) : query.marketId
  const market = await context.api.query.marketCommons.markets(marketId)
  if (!market.isSome) O.option(O.none())
  return O.option(O.some(rpcMarket<C, MS>(context, marketId, market.unwrap())))
}

/**
 * Fetch market and stream changes from rpc.
 *
 * @param context RpcContext<MS>
 * @param query MarketGetQuery
 * @returns Observable<Market<RpcContext, MS>>
 */
export const observeMarket$ = <C extends RpcContext<MS>, MS extends MetadataStorage>(
  context: C,
  query: MarketGetQuery,
): Observable<RpcMarket<C, MS>> => {
  return new Observable(subscription => {
    const marketId = isNumber(query) || isString(query) ? Number(query) : query.marketId
    const unsub = context.api.query.marketCommons.markets(marketId, market => {
      if (!market.isSome) {
        return subscription.unsubscribe()
      }
      subscription.next(rpcMarket<C, MS>(context, marketId, market.unwrap()))
    })

    return async () => {
      subscription.unsubscribe()
      unsub.then(unsub => unsub())
    }
  })
}
