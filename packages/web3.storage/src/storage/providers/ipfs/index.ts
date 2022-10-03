import { u8aToString } from '@polkadot/util/u8a'
import { Codec } from '@zeitgeistpm/utility/dist/codec'
import { JsonCodec } from '@zeitgeistpm/utility/dist/codec/impl/json'
import { either, left, right } from '@zeitgeistpm/utility/dist/either'
import { throws } from '@zeitgeistpm/utility/dist/error'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import type { CID } from 'ipfs-http-client'
import * as IPFSHttpClient from 'ipfs-http-client'
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
export const storage = <T>(
  config: IPFSConfiguration,
  codec: Codec<string, T> = JsonCodec(),
): Storage<T, CID> => {
  const node = IPFSHttpClient.create({ url: config.node.url })
  const hashAlg = config.hashAlg ?? `sha3-384`

  return {
    put: async data => {
      try {
        const content = codec.decode(data).unrightOr(throws)

        const { cid } = await node.add({ content }, { hashAlg, pin: config?.node.pin ?? true })

        if (config.cluster) {
          await cluster.pin(cid.toString(), config.cluster).catch(_ => {
            if (config?.node.pin) {
              node.pin.rm(cid)
            }
          })
        }

        return either(right(cid))
      } catch (error) {
        return either(left(error as Error))
      }
    },
    get: async cid => {
      try {
        const data = either(await read(node, cid))
        const encoded = data.chain(codec.encode).unrightOr(throws)
        return either(right(encoded))
      } catch (error) {
        return either(left(error as Error))
      }
    },
    del: async cid => {
      try {
        if (config.cluster) {
          await cluster.unpin(cid.toString(), config.cluster)
        }
        await node.pin.rm(cid.toString())
        return either(right(undefined as void))
      } catch (error) {
        return either(left(error as Error))
      }
    },
  }
}

/**
 * Read data from a cid and parse it to a string.
 */
const read = Te.from(async (node: IPFSHttpClient.IPFSHTTPClient, cid: CID) => {
  const content: Uint8Array[] = []

  for await (const chunk of node.cat(cid)) {
    content.push(chunk)
  }

  return content.map(u8aToString).reduce((acc, chunk) => acc + chunk)
})
