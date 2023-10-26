import {
  batterystation,
  batterystationRpc,
  create,
  RpcContext,
  Sdk,
} from '@zeitgeistpm/sdk'

/**
 * Initialize the SDK in full or rpc mode to be able to submit transactions to the chein.
 */
// const sdk: Sdk<RpcContext> = await create(mainnet())

const sdk: Sdk<RpcContext> = await create(batterystation())
const markets = await sdk.model.markets.list()

console.log(markets)
