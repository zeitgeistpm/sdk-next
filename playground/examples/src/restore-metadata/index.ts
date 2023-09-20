import {
  FullContext,
  IndexerContext,
  MarketMetadata,
  RpcContext,
  RpcMarket,
  Sdk,
  mainnetIndexer,
  mainnetRpc,
} from '@zeitgeistpm/sdk'
import { isCodec, isNumber } from '@polkadot/util'
import { create, mainnet } from '@zeitgeistpm/sdk'
import CID from 'cids'
import { createClient } from 'redis'
import { poll } from './poll'
import { IOption, option, none } from '@zeitgeistpm/utility/dist/option'

// const client = createClient({
//   url: 'redis://:redis@processor.rpc-0.zeitgeist.pm:6379',
// })

const rpcSdk: Sdk<RpcContext> = await create(mainnetRpc())
const idxSdk: Sdk<IndexerContext> = await create(mainnetIndexer())

const fetchMetadata = (market: any) => {
  return new Promise<IOption<MarketMetadata>>(async (resolve, reject) => {
    const timer = setTimeout(() => {
      resolve(option(none()))
    }, 2000)
    const hash = isCodec(market.metadata) ? market.metadata.toHex() : market.metadata
    const cid = new CID('f0155' + hash.slice(2))
    const id = { __meta: 'markets', cid: cid } as any
    const metadata = await rpcSdk.storage.of('markets').get(id)
    clearTimeout(timer)
    resolve(metadata)
  })
}

const rpcMarkets = await rpcSdk.model.markets.list()

console.log(rpcMarkets.length)

rpcMarkets.forEach(async market => {
  const metadata = await fetchMetadata(market)
  if (metadata.isNone()) {
    const indexedMarket = await idxSdk.model.markets.get(market.marketId)
    // reconstruct and chech hash
  }
})
