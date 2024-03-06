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

const sdk: Sdk<RpcContext> = await create(batterystationRpc())
const market = await sdk.model.markets.get({
  marketId: 845,
})

const metadata = await market.unwrap()?.saturate()

console.log(metadata?.question)
console.log(metadata?.description)

process.exit(0)
