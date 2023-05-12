import { batterystationRpc, create, RpcContext, Sdk } from '@zeitgeistpm/sdk'

/**
 * Initialize the SDK in full or rpc mode to be able to submit transactions to the chain.
 */
// const sdk: Sdk<RpcContext> = await create(mainnet())

const sdk: Sdk<RpcContext> = await create(batterystationRpc())
const market = (await sdk.model.markets.get(631)).unwrap()!

const saturatedMarket = await market?.saturate()!

console.log(saturatedMarket.marketId, saturatedMarket.isMetaComplete)
