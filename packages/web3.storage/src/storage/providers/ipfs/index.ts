import { u8aConcat } from '@polkadot/util/u8a'
import { Codec, JsonCodec } from '@zeitgeistpm/utility/dist/codec'
import * as O from '@zeitgeistpm/utility/dist/option'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import * as IPFSHTTPClient from 'ipfs-http-client'
import { Storage, StorageError } from '../..'
import * as cluster from './cluster'
import { IPFSConfiguration } from './types'

export * as cluster from './cluster'

/**
 *
 * Create a MetadataStorage object that can store data on an IPFS node
 * and cluster if configured to do so.
 *
 * @generic T - type of metadata
 */
export const storage = <T>(
  config: IPFSConfiguration,
  codec: Codec<string | Uint8Array, T> = JsonCodec(),
  node: IPFSHTTPClient.IPFSHTTPClient = IPFSHTTPClient.create({ url: config.node.url }),
): Storage<T, IPFSHTTPClient.CID, IPFSHTTPClient.IPFSHTTPClient> => {
  node = node ?? IPFSHTTPClient.create({ url: config.node.url })
  const hashAlg = config.hashAlg ?? `sha3-384`

  return {
    put: Te.from(
      async data => {
        const content = (await codec.decode(data).unright()).unwrap()
        if (!content) throw new Error('Invalid content')

        const { cid } = await node.add(
          { content },
          { hashAlg, pin: config?.node.pin ?? true },
        )

        if (config.cluster) {
          try {
            await cluster.pin(cid.toString(), config.cluster).catch(_ => {
              if (config?.node.pin) {
                node.pin.rm(cid)
              }
            })
          } catch (error) {
            node.pin.rm(cid)
            throw error
          }
        }

        return cid
      },
      (message, error) => new StorageError(message, error),
    ),
    hash: Te.from(
      async data => {
        const content = (await codec.decode(data).unright()).unwrap()
        if (!content) throw new Error('Invalid content')

        const { cid } = await node.add({ content }, { hashAlg, pin: false, onlyHash: true })

        return cid
      },
      (message, error) => new StorageError(message, error),
    ),
    get: Te.from(
      async cid => {
        const data = (await read(node, cid).unwrap())
          .map(chunks => u8aConcat(...chunks))
          .unwrap()

        if (data) {
          const a = await codec.encode(data).unright()
          return a
        }

        return O.option(O.none())
      },
      (message, error) => new StorageError(message, error),
    ),
    withCodec: codec => storage(config, codec, node),
    provider: node,
  }
}

// export const fileStorage = (
//   config: IPFSConfiguration,
// ): Storage<Blob, IPFSHTTPClient.CID> => {
//   const node = IPFSHTTPClient.create({ url: config.node.url })
//   const hashAlg = config.hashAlg ?? `sha3-384`

//   return {
//     put: Te.from(async data => {
//       const { cid } = await node.add(
//         { content: await data.arrayBuffer() },
//         { hashAlg, pin: config?.node.pin ?? true },
//       )

//       if (config.cluster) {
//         await cluster.pin(cid.toString(), config.cluster).catch(_ => {
//           if (config?.node.pin) {
//             node.pin.rm(cid)
//           }
//         })
//       }

//       return cid
//     }),
//     get: Te.from(async cid => {
//       const data = await read(node, cid)
//       const blob = data.map(data => new Blob(data))
//       return blob
//     }),
//     del: Te.from(async cid => {
//       if (config.cluster) {
//         await cluster.unpin(cid.toString(), config.cluster)
//       }
//       await node.pin.rm(cid.toString())
//     }),
//     withCodec: () => 1 as any,
//   }
// }

/**
 * Read data from a cid and parse it to a string.
 */
const read = Te.from<
  O.IOption<Uint8Array[]>,
  Error,
  [node: IPFSHTTPClient.IPFSHTTPClient, cid: IPFSHTTPClient.CID]
>(async (node, cid) => {
  let content: Uint8Array[] = []

  for await (const chunk of node.cat(cid)) {
    content = [...content, chunk]
  }

  new Blob(content)

  if (content.length === 0) return O.option(O.none())

  return O.option(O.some(content))
})
