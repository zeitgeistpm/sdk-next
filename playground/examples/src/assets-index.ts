import { Keyring } from '@polkadot/keyring'
import { create, mainnetIndexer, mainnetRpc } from '@zeitgeistpm/sdk'

async function main() {
  /**
   * Here we are creating a sdk with a custom storage provider and metadata type.
   */
  const sdk = await create(mainnetRpc())

  const keyring = new Keyring({ ss58Format: 73, type: 'sr25519' })
  const signer = keyring.addFromUri('//Alice', { name: 'Alice default' })

  const pools = await sdk.model.swaps.listPools({
    limit: 10,
  })

  pools.map(p => {})

  const assetsIndex = await sdk.model.swaps.assetsIndex(pools)
  const ZTG = '10000000000'

  pools
    .filter(p => p.poolId === 14)
    .forEach(pool => {
      const assets = assetsIndex[pool.poolId]
      console.log(`id: ${pool.poolId}, liquidity: ${assets.liquidity.dividedBy(10 ** 10)}`)
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
