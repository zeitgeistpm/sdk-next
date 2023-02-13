import type { RpcContext, Sdk } from '@zeitgeistpm/sdk'
import { create, createStorage } from '@zeitgeistpm/sdk'
import { IPFS } from '@zeitgeistpm/web3.storage'

const sdk: Sdk<RpcContext> = await create({
  provider: 'wss://localhost:9944',
  storage: createStorage(
    IPFS.storage({
      node: { url: 'localhost:5001' },
    }),
  ),
})
