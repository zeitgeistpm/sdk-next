import { either, left, right } from '@zeitgeistpm/utility/dist/either'
import { throws } from '@zeitgeistpm/utility/dist/error'
import { u8aToString } from '@polkadot/util'
import * as IPFSHttpClient from 'ipfs-http-client'
import * as cluster from './cluster'
import { IPFSConfiguration } from './types'
import { JsonCodec } from '../../codec/impl/json'
import { Codec } from '../../codec'
import { MetadataStorage } from '../../storage'

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
): MetadataStorage<T, string> => {
  const client = IPFSHttpClient.create({ url: config.node.url })
  const hashAlg = config.hashAlg ?? `sha3-384`

  return {
    put: async (data, opts) => {
      try {
        const content = codec.decode(data).unrightOr(throws)

        const { cid } = await client.add(
          { content },
          { hashAlg, pin: !opts?.ephemeral ?? true },
        )

        if (config.cluster) {
          await cluster.pin(cid.toString(), config.cluster)
        }

        return either(right(cid.toString()))
      } catch (error) {
        return either(left(error as Error))
      }
    },
    get: async cid => {
      try {
        const content = []

        for await (const chunk of client.cat(cid)) {
          content.push(chunk)
        }

        const data = content.map(u8aToString).reduce((acc, chunk) => acc + chunk)

        const encoded = codec.encode(data).unrightOr(throws)

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
        return either(right(null))
      } catch (error) {
        return either(left(error as Error))
      }
    },
  }
}
