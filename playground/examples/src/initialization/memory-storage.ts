import { FullContext, Sdk, batterystation, create, createStorage } from '@zeitgeistpm/sdk'
import { Memory } from '@zeitgeistpm/web3.storage'

const sdk: Sdk<FullContext> = await create({
  ...batterystation(),
  storage: createStorage(Memory.storage()),
})
