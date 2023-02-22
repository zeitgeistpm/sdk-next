import { createStorage, MetadataStorage } from '../../meta/types'
import { IPFS } from '@zeitgeistpm/web3.storage'

/**
 * Default IPFS metadata storage for the zeitgeist ecosystem.
 * @returns MetadataStorage
 */
export const ZeitgeistIpfs = <MS extends MetadataStorage<any>>(): MS => {
  return createStorage(
    IPFS.storage({
      node: { url: 'http://ipfs.zeitgeist.pm:5001' },
      cluster: {
        url: 'https://ipfs-cluster.zeitgeist.pm',
        auth: {
          username: 'zeitgeist',
          password: '5ZpmQl*rWn%Z',
        },
      },
    }),
  ) as MS
}
