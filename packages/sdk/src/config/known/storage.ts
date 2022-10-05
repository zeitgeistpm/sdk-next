import { IPFS, Storage } from '@zeitgeistpm/web3.storage'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import memoize from 'lodash.memoize'
import { CID } from 'ipfs-http-client'
import { MetadataStorage, TaggedID, TaggedMetadata } from '.../../meta/types'

/**
 * Default IPFS metadata storage for the zeitgeist ecosystem.
 * @returns MetadataStorage
 */
export const ZeitgeistIpfs = <MS extends MetadataStorage>(): MS => {
  const memoizedstorage = memoize(() => {
    const storage = IPFS.storage({
      node: { url: 'http://ipfs.zeitgeist.pm:5001' },
      cluster: {
        url: 'https://ipfs-cluster.zeitgeist.pm',
        auth: {
          username: 'zeitgeist',
          password: '5ZpmQl*rWn%Z',
        },
      },
    })
    return storage
  })

  const wrap = (key: keyof MetadataStorage, storage: Storage<any, CID>) => {
    return {
      get: ({ cid }: TaggedID<any>) => storage.get(cid),
      del: ({ cid }: TaggedID<any>) => storage.get(cid),
      put: Te.from<TaggedID<any>, [any]>(async data => {
        const cid = await storage.put(data)
        return {
          __meta: key,
          cid: cid.unwrap(),
        }
      }),
    } as Storage<any, TaggedID<any>>
  }

  const storage = {
    markets: wrap('markets', memoizedstorage()),
    comments: wrap('comments', memoizedstorage()),
  } as MS

  return storage
}
