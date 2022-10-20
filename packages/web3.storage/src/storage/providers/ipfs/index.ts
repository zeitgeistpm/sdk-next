import { u8aToString } from '@polkadot/util/u8a'
import { Codec } from '@zeitgeistpm/utility/dist/codec'
import { JsonCodec } from '@zeitgeistpm/utility/dist/codec/impl/json'
import { throws } from '@zeitgeistpm/utility/dist/error'
import * as O from '@zeitgeistpm/utility/dist/option'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import * as IPFSHTTPClient from 'ipfs-http-client'
import { Storage } from '../..'
import * as cluster from './cluster'
import { IPFSConfiguration } from './types'
/**
 *
 * Create a MetadataStorage object that can store data on an IPFS node
 * and cluster if configured to do so.
 *
 * @generic T - type of metadata
 */
export const storage = <T extends object, ID>(
  config: IPFSConfiguration,
  codec: Codec<string, T> = JsonCodec(),
): Storage<T, IPFSHTTPClient.CID> => {
  const node = IPFSHTTPClient.create({ url: config.node.url })
  const hashAlg = config.hashAlg ?? `sha3-384`

  return {
    put: Te.from(async data => {
      const content = codec.decode(data).unrightOr(throws)

      const { cid } = await node.add(
        { content },
        { hashAlg, pin: config?.node.pin ?? true },
      )

      if (config.cluster) {
        await cluster.pin(cid.toString(), config.cluster).catch(_ => {
          if (config?.node.pin) {
            node.pin.rm(cid)
          }
        })
      }

      return cid
    }),
    get: Te.from(async cid => {
      const json = await read(node, cid)
      const encoded = json.bind(d => codec.encode(d).unright())
      return encoded
    }),
    del: Te.from(async cid => {
      if (config.cluster) {
        await cluster.unpin(cid.toString(), config.cluster)
      }
      await node.pin.rm(cid.toString())
    }),
  }
}

/**
 * Read data from a cid and parse it to a string.
 */
const read = Te.from<
  O.IOption<string>,
  Error,
  [node: IPFSHTTPClient.IPFSHTTPClient, cid: IPFSHTTPClient.CID]
>(async (node, cid) => {
  const content: Uint8Array[] = []

  for await (const chunk of node.cat(cid)) {
    content.push(chunk)
  }

  if (content.length === 0) return O.option(O.none())

  return O.option(O.some(content.map(u8aToString).reduce((acc, chunk) => acc + chunk)))
})
