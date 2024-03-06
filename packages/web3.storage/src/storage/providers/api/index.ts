import * as O from '@zeitgeistpm/utility/dist/option'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { Storage, StorageError } from '@zeitgeistpm/web3.storage'
import * as IPFSHTTPClient from 'ipfs-http-client'

import { CID } from 'multiformats/cid'

const node = IPFSHTTPClient.create({
  url: process.env.NEXT_PUBLIC_IPFS_NODE_URL,
})

export const storage = <T>(): Storage<
  T,
  IPFSHTTPClient.CID,
  IPFSHTTPClient.IPFSHTTPClient
> => {
  return {
    put: Te.from(
      async data => {
        const response = await fetch('https://app.zeitgeist.pm/api/ipfs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        if (response.status === 400) {
          const { message } = await response.json()
          throw new Error(message)
        }

        const { cid: cidString } = await response.json()
        const cid = CID.parse(cidString)

        return cid
      },
      (message, error) => new StorageError(message, error),
    ),
    hash: Te.from(
      async data => {
        const response = await fetch('/api/ipfs?only-hash=true', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })

        if (response.status === 400) {
          const { message } = await response.json()
          throw new Error(message)
        }

        const { cid: cidString } = await response.json()
        const cid = CID.parse(cidString)

        return cid
      },
      (message, error) => new StorageError(message, error),
    ),
    get: Te.from(
      async cid => {
        const response = await fetch(`https://ipfs-gateway.zeitgeist.pm/ipfs/${cid}`)

        if (!response.ok) {
          throw new StorageError('Failed to fetch data from IPFS')
        }

        const json = await response.json()
        return O.option(O.some(json))
      },
      (message, error) => new StorageError(message, error),
    ),
    withCodec: _ => storage(),
    provider: node,
  }
}
