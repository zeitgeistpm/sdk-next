import {
  IndexerContext,
  MarketId,
  MarketList,
  MetadataVerification,
  RpcContext,
  create,
  mainnet,
  mainnetIndexer,
  mainnetRpc,
} from '@zeitgeistpm/sdk'
import { groupBy } from 'lodash-es'

const rsdk = await create(mainnetRpc())
const isdk = await create(mainnetIndexer())

const [rmarkets, imarkets]: [MarketList<RpcContext>, MarketList<IndexerContext>] =
  await Promise.all([rsdk.model.markets.list(), isdk.model.markets.list()])

for (const idxMarket of imarkets) {
  const rpcMarket = rmarkets.find(m => m.marketId === idxMarket.marketId)
  if (!rpcMarket) {
    console.log(`${idxMarket.marketId}: not found on rpc node`)
    continue
  }

  const result = await Promise.race<MetadataVerification | string>([
    (async () => {
      let saturatedRpcMarket = await rpcMarket.saturate()
      return rsdk.model.markets.verifyMetadata(saturatedRpcMarket, idxMarket)
    })(),
    new Promise(resolve => {
      setTimeout(() => resolve('timeout saturating'), 500)
    }),
  ])

  console.log(`${idxMarket.marketId}: ${JSON.stringify(result)}`)
}
