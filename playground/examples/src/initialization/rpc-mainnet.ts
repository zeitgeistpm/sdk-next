import type { RpcContext, Sdk } from '@zeitgeistpm/sdk'
import { create, mainnetRpc } from '@zeitgeistpm/sdk'

const sdk: Sdk<RpcContext> = await create(mainnetRpc())
