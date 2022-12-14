import {
  batterystation,
  batterystationIndexer,
  batterystationRpc,
  create,
  mainnetIndexer,
  mainnetRpc,
} from '@zeitgeistpm/sdk'

const ZTG = '10000000000'

async function main() {
  /**
   * Fetching asset indexes works with both rpc and indexer mode.
   */
  const sdk = await create(batterystationRpc())

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
    .filter(p => p.poolId === 66)
    .forEach(pool => {
      const assets = assetsIndex[pool.poolId]
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
}

main().catch(error => {
  console.log('ERROR')
  console.log(error)
})
