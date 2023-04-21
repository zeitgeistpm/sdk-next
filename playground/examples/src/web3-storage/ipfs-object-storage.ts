import { createStorage } from '@zeitgeistpm/sdk'
import { Codec } from '@zeitgeistpm/utility/dist/codec'
import { IPFS } from '@zeitgeistpm/web3.storage'

const storage = createStorage(
  IPFS.storage({
    node: { url: 'http://ipfs.zeitgeist.pm:5001' },
  }),
)

const cid = await storage.markets.put({ foo: 'bar' } as any)

const data = await storage.markets.get(cid)

console.log(data)
