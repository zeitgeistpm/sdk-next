import { create, MetadataStorage } from '@zeitgeistpm/sdk'
import { IPFS } from '@zeitgeistpm/web3.storage'

type CustomMarketMetadata = {
  foo: `foo ${string}`
}

type CustomComment = {
  comment: 'text'
}

/**
 * Default IPFS metadata storage for the zeitgeist ecosystem.
 * @typeof IPFS.storage<MarketMetadata>
 */
export function CustomStorageProvider<
  MS extends MetadataStorage<CustomMarketMetadata, CustomComment>,
>(): MS {
  const storage = IPFS.storage<any>({
    node: { url: 'http://ipfs.zeitgeist.pm:5001' },
    cluster: {
      url: 'https://ipfs-cluster.zeitgeist.pm',
      auth: {
        username: 'zeitgeist',
        password: '5ZpmQl*rWn%Z',
      },
    },
  })

  return {
    markets: storage,
    comments: storage,
  } as MS
}

async function main() {
  const sdk = await create({
    provider: 'ws://127.0.0.1:9944',
    storage: CustomStorageProvider(),
  })
}

main()
