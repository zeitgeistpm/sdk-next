import { create, createStorage, MarketMetadata } from '@zeitgeistpm/sdk'
import { IPFS } from '@zeitgeistpm/web3.storage'

async function main() {
  /**
   * Here we are creating a sdk with a custom storage provider and metadata type.
   */
  const sdk = await create({
    provider: 'ws://127.0.0.1:9944',
    storage: createStorage<MarketMetadata>(
      IPFS.storage({
        node: { url: 'http://ipfs.zeitgeist.pm:5001', pin: false },
      }),
    ),
  })
}

main().catch(error => {
  console.log('ERROR')
  console.log(error)
})
