import { Keyring } from '@polkadot/keyring'
import {
  create,
  CreateStandaloneMarketParams,
  createStorage,
  isSaturatedPool,
  mainnetRpc,
  SaturatedPool,
} from '@zeitgeistpm/sdk'
import { isNotNull } from '@zeitgeistpm/utility/dist/null'
import { IPFS } from '@zeitgeistpm/web3.storage'
import { filter, take } from 'rxjs/operators'

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

  const saturatedPools = await pools.saturate().unwrap()

  saturatedPools.filter(isSaturatedPool).forEach(pool => {
    if (isSaturatedPool(pool)) {
      console.log(pool)
      console.log(`${pool.poolId}, ${pool.liquidity}`)
    }
  })
}

main().catch(error => {
  console.log('ERROR')
  console.log(error)
})
