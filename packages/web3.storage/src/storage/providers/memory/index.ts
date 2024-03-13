import * as O from '@zeitgeistpm/utility/dist/option'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { Storage, StorageError } from '@zeitgeistpm/web3.storage'
import * as IPFSHTTPClient from 'ipfs-http-client'
import { CID } from 'multiformats/cid'
import * as codec from 'multiformats/codecs/raw'
import { sha3384 } from '@multiformats/sha3'
import { u8aToHex } from '@polkadot/util'

const node = IPFSHTTPClient.create({
  url: process.env.NEXT_PUBLIC_IPFS_NODE_URL,
})

const textEncoder = new TextEncoder()

export const storage = <T>(): Storage<T, CID, IPFSHTTPClient.IPFSHTTPClient> => {
  const memory = new Map<string, T>()

  return {
    put: Te.from(
      async data => {
        const bytes = codec.encode(textEncoder.encode(JSON.stringify(data)))

        const digest = await sha3384.digest(bytes)
        const cid = CID.create(1, codec.code, digest)

        const hex = u8aToHex(digest.bytes)

        memory.set(hex.slice(2), data)

        return cid
      },
      (message, error) => new StorageError(message, error),
    ),
    hash: Te.from(
      async data => {
        const bytes = codec.encode(textEncoder.encode(JSON.stringify(data)))

        const digest = await sha3384.digest(bytes)
        const cid = CID.create(1, codec.code, digest)

        return cid
      },
      (message, error) => new StorageError(message, error),
    ),
    get: Te.from(
      async cid => {
        const hex = cid.toString().replace('f0155', '')
        const data = memory.get(hex)
        return O.option(data ? O.some(data) : O.none())
      },
      (message, error) => new StorageError(message, error),
    ),
    withCodec: _ => storage(),
    provider: node,
  }
}
