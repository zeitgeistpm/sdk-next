import * as IPFSHttpClient from 'ipfs-http-client';
import { u8aToString } from '@polkadot/util';
import * as cluster from './cluster';
import { JsonCodec } from '../../codec/impl/json';
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
export const create = (config, codec = JsonCodec(), curriedClient) => {
    var _a;
    const client = curriedClient !== null && curriedClient !== void 0 ? curriedClient : IPFSHttpClient.create({ url: config.node.url });
    const hashAlg = (_a = config.hashAlg) !== null && _a !== void 0 ? _a : `sha3-384`;
    return {
        put: async (data) => {
            const { cid } = await client.add({ content: codec.decode(data) }, { hashAlg });
            if (config.cluster) {
                await cluster.pin(cid.toString(), config.cluster);
            }
            return cid;
        },
        get: async (cid) => {
            const content = [];
            for await (const chunk of client.cat(cid)) {
                content.push(chunk);
            }
            const data = content.map(u8aToString).reduce((acc, chunk) => acc + chunk);
            return codec.encode(data);
        },
        del: async (cid) => {
            if (config.cluster) {
                await cluster.unpin(cid.toString(), config.cluster);
            }
        },
    };
};
//# sourceMappingURL=index.js.map