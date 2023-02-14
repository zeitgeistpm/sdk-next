import { create, FullContext, mainnet, MarketList, RpcContext, Sdk } from '@zeitgeistpm/sdk'

const sdk: Sdk<FullContext> = await create(mainnet())

/**
 * Clone the sdk and force it to use the rpc api.
 */
const rpcSdk: Sdk<RpcContext> = sdk.asRpc()

const markets: MarketList<RpcContext> = await rpcSdk.model.markets.list()

/**
 * Saturate the markets with data from IPFS so we can peek its question
 */
const saturatedMarkets = await Promise.all(
  markets.slice(0, 10).map(async market => market.saturate()),
)

saturatedMarkets.forEach(market => {
  console.log(`${market.marketId}: ${market.question}`)
})

process.exit()
