import { create$, mainnet, ZTG } from '@zeitgeistpm/sdk'

async function main(marketId: number) {
  /**
   * Here we are creating an observable Zeitgeist SDK.
   * It will load indexer and rpc connection seperatly and emit an sdk instance when either and both are ready.
   */
  const sdk$ = create$(mainnet())

  sdk$.subscribe(async sdk => {
    /**
     * Fetch a set of pools.
     */
    const pools = await sdk.model.swaps.listPools({})

    /**
     * Fetch asset indexes including prices, amounts and total liquidity for fetched pools.
     */
    const assetsIndex = await sdk.model.swaps.saturatedPoolsIndex(pools)

    /**
     * Loop through pools and print liquidity for pool and price that is contained in
     * the asset index like amounts, category ticker liquidity etc.
     */
    pools
      //.filter(p => p.poolId === 14)
      .forEach(pool => {
        const assets = assetsIndex[pool.poolId]
        assets.market.categories
        console.log(`id: ${pool.poolId}`)
        console.log(`total liquidity: ${assets.liquidity.dividedBy(ZTG)}\n`)
        console.log(`token     price               liquidity`)
        assets.assets.forEach(asset => {
          const token = asset.category?.ticker
          const price = asset.price.dividedBy(ZTG)
          const liq = asset.price.dividedBy(ZTG).mul(asset.amount.dividedBy(ZTG))
          console.log(`${token}       ${price}        ${liq}`)
        })
      })
  })
  /**
   * We are consuming sdk and fetchin a market by its id.
   * The market can be either fethed from indexer(prefered) or rpc according to the state of the sdk instance.
   * If the market is from rpc we saturate it with metadata.
   */
  // const market$ = sdk$.pipe(take(1)).pipe(
  //   switchMap(sdk =>
  //     from(
  //       isRpcSdk(sdk)
  //         ? sdk.model.markets.get.$({ marketId })
  //         : sdk.model.markets.get({ marketId }),
  //     ),
  //   ),
  //   filter(isNotNull),
  //   switchMap(market => from(isRpcData(market) ? market.saturate().unwrap() : of(market))),
  // )

  // /**
  //  * Since market is either indexed or saturated with metadata the question,
  //  * description and etc metadata is available on it.
  //  */
  // market$.subscribe(market => {
  //   console.log(
  //     `id: ${market.id}\n` +
  //       `question: ${market.question}\n` +
  //       `description:\n` +
  //       `------------------------------------\n` +
  //       `${market.description}\n` +
  //       `-----------------------------------\n`,
  //   )
  // })
}

main(42)
