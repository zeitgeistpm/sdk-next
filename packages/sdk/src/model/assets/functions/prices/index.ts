import { IndexerContext, RpcContext } from '../../../../context'
import { PricesQuery } from './types'

export const rpcPrices = async (context: RpcContext, query: PricesQuery) => {
  //context.api.rpc.swaps.getAssetSpotPricesForPool()
}

export const indexedPrices = async (context: IndexerContext, query: PricesQuery) => {}
