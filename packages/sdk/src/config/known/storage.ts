import { IPFS } from '@zeitgeistpm/web3.storage'
import memoize from 'lodash.memoize'
import { MetadataStorage } from 'meta/types'

/**
 * Default IPFS metadata storage for the zeitgeist ecosystem.
 * @returns MetadataStorage
 */
export const ZeitgeistIpfs = <MS extends MetadataStorage>(): MS => {
  const memoizedstorage = memoize(<T>() =>
    IPFS.storage<T>({
      node: { url: 'http://ipfs.zeitgeist.pm:5001' },
      cluster: {
        url: 'https://ipfs-cluster.zeitgeist.pm',
        auth: {
          username: 'zeitgeist',
          password: '5ZpmQl*rWn%Z',
        },
      },
    }),
  )

  const storage = {
    markets: memoizedstorage(),
    comments: memoizedstorage(),
  } as MS

  return storage
}
