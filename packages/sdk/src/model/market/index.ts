import {
  MarketPeriod,
  MarketType,
  MarketDisputeMechanism,
} from '@zeitgeistpm/types/dist/interfaces'
import { Context, isRpcContext, RpcContext } from '../../context'
import { list } from './functions/list'
import { create } from './functions/create'
import {
  Markets,
  ListQuery,
  CreateMarketParams,
  MarketsRpc,
  MarketsShared,
} from './types'

/**
 * Create top level enriched zeitgeist Markets model.
 *
 * @generic C - Context
 * @param context C
 * @returns Markets<C>
 */
export const markets = <C extends Context>(context: C): Markets<C> => {
  let base: MarketsShared<C> = {
    list: (query: ListQuery<C>) => list(context, query),
  }

  const rpc: MarketsRpc<RpcContext> | null = isRpcContext(context)
    ? {
        create: <
          MT extends MarketType['type'],
          MP extends MarketPeriod['type'],
          MD extends MarketDisputeMechanism['type'],
        >(
          params: CreateMarketParams<MT, MP, MD>,
        ) => create(context, params),
      }
    : null

  return {
    ...base,
    ...rpc,
  } as Markets<C>
}
