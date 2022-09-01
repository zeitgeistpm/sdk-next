import * as IPFS from 'ipfs-http-client';
import { u8aToString } from '@polkadot/util';
import * as cluster from './cluster';
export const create = (config) => {
    var _a;
    const client = IPFS.create({ url: config.node.url });
    const hashAlg = (_a = config.hashAlg) !== null && _a !== void 0 ? _a : `sha3-384`;
    return {
        put: async (data) => {
            const { cid } = await client.add({ content: JSON.stringify(data) }, { hashAlg });
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
            const data = content.map(u8aToString).reduce((p, c) => p + c);
            console.log('raw', data);
            return JSON.parse(data);
        },
        del: async (cid) => {
            if (config.cluster) {
                await cluster.unpin(cid.toString(), config.cluster);
            }
        },
    };
};
//# sourceMappingURL=index.js.map