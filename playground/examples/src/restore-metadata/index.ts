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
import * as IPFSHTTPClient from 'ipfs-http-client'
import { isString, isU8a, u8aToHex } from '@polkadot/util'
import { isCodec, isNumber } from '@polkadot/util'
import { create, mainnet } from '@zeitgeistpm/sdk'
import { IPFS } from '@zeitgeistpm/web3.storage'
import CID from 'cids'
import _rawData from './metas.json'
import { IOption, option, none } from '@zeitgeistpm/utility/dist/option'

const rawMeta: { metas: Array<{ marketId: number; meta: string; rawData: string }> } =
  _rawData as any

const rpcSdk: Sdk<RpcContext> = await create(mainnetRpc())

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

const ipfs = IPFSHTTPClient.create({ url: 'https://ipfs.zeitgeist.pm' })
const ipfsCluster = {
  url: 'https://ipfs-cluster.zeitgeist.pm',
  auth: {
    username: 'zeitgeist',
    password: '5ZpmQl*rWn%Z',
  },
}

const hashAlg = `sha3-384`

await Promise.all(
  rpcMarkets.map(async market => {
    const metadata = await fetchMetadata(market)
    if (metadata.isNone()) {
      console.log(`-----restoring ${market.marketId}-----`)

      // TODO: fetch from api/indexer rather than file
      const cachedRawMetadata = rawMeta.metas.find(m => m.marketId === market.marketId)

      if (cachedRawMetadata) {
        const computedCid = await rpcSdk.storage
          .of('markets')
          .hash(JSON.parse(cachedRawMetadata.rawData))
        const computedHash = u8aToHex(computedCid.cid.multihash.bytes)
        const onChainHash = market.metadata.toHex()

        if (computedHash === onChainHash) {
          const { cid } = await ipfs.add(cachedRawMetadata.rawData, { hashAlg, pin: true })
          const newComputedHash = u8aToHex(cid.multihash.bytes)

          if (newComputedHash === onChainHash) {
            console.log('restored content on node, pinning to cluster..')
            const response = await IPFS.cluster.pin(cid.toString(), ipfsCluster)
            console.log('pinned to cluster')
          } else {
            console.log('pinned content, but hashes do not match')
            console.log('computed: ', newComputedHash)
            console.log('on chain: ', onChainHash)
          }
        } else {
          console.log('hashes do not match')
          console.log('computed: ', computedHash)
          console.log('on chain: ', onChainHash)
        }
      } else {
        console.log('no raw metadata found in backup cache')
      }

      console.log(`----------------------`)
    }
  }),
)

console.log('Finished')

process.exit(0)
