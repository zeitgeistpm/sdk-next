import { create, localhostRpc, RpcContext, Sdk, ZTG } from '@zeitgeistpm/sdk'
import Decimal from 'decimal.js'

const sdk: Sdk<RpcContext> = await create(localhostRpc())

const price = await sdk.api.rpc.swaps.getSpotPrice(
  0,
  { Ztg: null },
  { CategoricalOutcome: [0, 0] },
  false,
  null,
)

console.log(new Decimal(price.toNumber()).div(ZTG).toNumber())

process.exit(0)
