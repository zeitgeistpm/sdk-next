import type { RpcContext, Sdk } from '@zeitgeistpm/sdk'
import { create, createStorage } from '@zeitgeistpm/sdk'
import { LocalStorage } from '@zeitgeistpm/web3.storage'

const sdk: Sdk<RpcContext> = await create({
  provider: 'wss://localhost:9944',
  storage: createStorage(LocalStorage.storage()),
})
