import { web3Enable } from '@polkadot/extension-dapp'
import * as Zeigeist from '@zeitgeistpm/sdk'
import { IPFS, Storage } from '@zeitgeistpm/web3.storage'
import { useEffect } from 'react'

type CustomMarketMetadata = {
  foo: 'bar'
}

type CustomComment = {
  comment: 'text'
}

/**
 * Default IPFS metadata storage for the zeitgeist ecosystem.
 * @typeof IPFS.storage<MarketMetadata>
 */
// export const CustomStorageProvider = <M = CustomMarketMetadata, C = CustomComment>(): MetadataStorage<
//   M,
//   C
// > => {
//   const storage = IPFS.storage<M | C>({
//     node: { url: 'http://ipfs.zeitgeist.pm:5001' },
//     cluster: {
//       url: 'https://ipfs-cluster.zeitgeist.pm',
//       auth: {
//         username: 'zeitgeist',
//         password: '5ZpmQl*rWn%Z',
//       },
//     },
//   })

//   return {
//     markets: storage as Storage<M>,
//     comments: storage as Storage<C>,
//   }
// }

const CustomStorage: React.FC = () => {
  useEffect(() => {
    ;(async () => {
      const sdk = await Zeigeist.create(Zeigeist.batterystation())
    })()
    web3Enable('sdkv2-test-app')
  }, [])

  return <></>
}
export default CustomStorage
