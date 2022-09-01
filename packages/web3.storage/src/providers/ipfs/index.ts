import * as IPFSHttpClient from 'ipfs-http-client'
import { u8aToString } from '@polkadot/util'
import { MetadataCodec, MetadataStorage } from '../../codec/types'
import * as cluster from './cluster'
import { IPFSConfiguration } from './types'
import { JsonCodec } from '../../codec/impl/json'

/**
 *
 * Create a MetadataStorage object that can store data on an IPFS node
 * and cluster if configured to do so.
 *
 * @generic T - type of metadata
 * @param config IPFSConfiguration - configuration for the ipfs client
 * @param codec MetadataCodec<T, string> - the codec for the metadata, encode to and decode from string.
 * @returns MetadataStorage<T, IPFS.CID>
 */
export const create = <T>(
  config: IPFSConfiguration,
  codec: MetadataCodec<string, T> = JsonCodec(),
  curriedClient?: IPFSHttpClient.IPFSHTTPClient,
): MetadataStorage<T, IPFSHttpClient.CID | string> => {
  const client = curriedClient ?? IPFSHttpClient.create({ url: config.node.url })
  const hashAlg = config.hashAlg ?? `sha3-384`

  return {
    put: async data => {
      const { cid } = await client.add({ content: codec.decode(data) }, { hashAlg })
      if (config.cluster) {
        await cluster.pin(cid.toString(), config.cluster)
      }
      return cid
    },
    get: async cid => {
      const content = []

      for await (const chunk of client.cat(cid)) {
        content.push(chunk)
      }

      const data = content.map(u8aToString).reduce((acc, chunk) => acc + chunk)

      return codec.encode(data) as T
    },
    del: async cid => {
      if (config.cluster) {
        await cluster.unpin(cid.toString(), config.cluster)
      }
    },
  }
}
