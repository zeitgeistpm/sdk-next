import { create, mainnetIndexer, mainnetRpc } from '@zeitgeistpm/sdk'

const ZTG = '10000000000'

async function main() {
  /**
   * Fetching asset indexes works with both rpc and indexer mode.
   */
  const sdk = await create(mainnetRpc())
  console.time('perf')
  /**
   * Fetch a set of pools.
   */
  const pools = await sdk.model.swaps.listPools({})

  /**
   * Fetch asset indexes including prices, amounts and total liquidity.
   */
  const assetsIndex = await sdk.model.swaps.assetsIndex(pools)
  console.timeEnd('perf')
  console.log(pools.length)

  /**
   * Loop through pools and print liquidity for pool and price, amount and liquidity for all assets.
   */
  pools
    .filter(p => p.poolId === 14)
    .forEach(pool => {
      const assets = assetsIndex[pool.poolId]
      console.log(`id: ${pool.poolId}, liquidity: ${assets.liquidity.dividedBy(ZTG)}`)
      assets.assets.forEach(asset => {
        console.log(
          `${asset.category?.ticker} ${asset.price.dividedBy(
            ZTG,
          )} - ${asset.amount.dividedBy(ZTG)} - ${asset.price
            .dividedBy(ZTG)
            .multipliedBy(asset.amount.dividedBy(ZTG))}`,
        )
      })
    })
}

main().catch(error => {
  console.log('ERROR')
  console.log(error)
})
