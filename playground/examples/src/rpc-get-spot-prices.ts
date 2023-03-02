import { create, localhostRpc, RpcContext, Sdk, ZTG } from '@zeitgeistpm/sdk'
import Decimal from 'decimal.js'

const sdk: Sdk<RpcContext> = await create(localhostRpc())

const prices = await sdk.api.rpc.swaps.getSpotPrices(
  0,
  { Ztg: null },
  { CategoricalOutcome: [0, 0] },
  false,
  [55, 56, 57],
)

prices.forEach(price => {
  console.log(new Decimal(price.toNumber()).div(ZTG).toNumber())
})

process.exit(0)
