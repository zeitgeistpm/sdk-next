import {
  FullContext,
  IndexerContext,
  RpcContext,
  Sdk,
  mainnetIndexer,
  mainnetRpc,
} from '@zeitgeistpm/sdk'
import { isCodec, isNumber } from '@polkadot/util'
import { create, mainnet } from '@zeitgeistpm/sdk'
import CID from 'cids'
import { createClient } from 'redis'

const client = createClient({
  url: 'redis://:redis@processor.rpc-0.zeitgeist.pm:6379',
})

const a = await client.get('WAt')

console.log(a)

// const sdkIndexed: Sdk<IndexerContext> = await create(mainnetIndexer())
// const sdkRpc: Sdk<RpcContext> = await create(mainnetRpc())

// const indexedMarket = (await sdkIndexed.model.markets.get(141)).unwrap()
// const rpcMarket = (await sdkRpc.model.markets.get(141)).unwrap()

// const fetchMetadata = async (market: any) => {
//   const hash = isCodec(market.metadata) ? market.metadata.toHex() : market.metadata
//   const cid = new CID('f0155' + hash.slice(2))
//   const id = { __meta: 'markets', cid: cid } as any
//   const metadata = await sdkRpc.storage.of('markets').get(id)
//   return market.marketId, metadata.unwrap()?.question
// }

// console.log('f0155' + indexedMarket?.metadata.slice(2))
// console.log('indexed', indexedMarket?.metadata, await fetchMetadata(indexedMarket))
// console.log('rpc', rpcMarket?.metadata.toHex(), await fetchMetadata(rpcMarket))
