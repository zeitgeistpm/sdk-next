import { b64 } from '@zeitgeistpm/utility';
/**
 *
 * Pinns a cid to the cluster.
 *
 * @param cid string - the cid to pin to the cluster
 * @param config IPFSClusterConfiguration
 * @returns Promise<IPFSClusterPinningResponse>
 */
export const pin = async (cid, config) => {
    var _a, _b;
    const response = await fetch(new URL(`/pins/${cid}?replication-min=2&replication-max=2`, config.url).href, {
        headers: headers(config),
        method: `POST`,
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(`[${(_a = data === null || data === void 0 ? void 0 : data.code) !== null && _a !== void 0 ? _a : '500'}]: ${(_b = data === null || data === void 0 ? void 0 : data.message) !== null && _b !== void 0 ? _b : 'Unknown cluster api error.'}`);
    }
    return data;
};
/**
 *
 * Unpinns a cid from the cluster.
 *
 * @param cid string - the cid to unpin from the cluster
 * @param config IPFSClusterConfiguration
 * @returns Promise<IPFSClusterPinningResponse>
 */
export const unpin = async (cid, config) => {
    var _a, _b;
    const response = await fetch(new URL(`/pins/${cid}`, config.url).href, {
        headers: headers(config),
        method: `DELETE`,
    });
    const data = await response.json();
    if (!response.ok) {
        throw new Error(`[${(_a = data === null || data === void 0 ? void 0 : data.code) !== null && _a !== void 0 ? _a : '500'}]: ${(_b = data === null || data === void 0 ? void 0 : data.message) !== null && _b !== void 0 ? _b : 'Unknown cluster api error.'}`);
    }
    return data;
};
const headers = (config) => {
    const headers = new Headers({
        'Content-Type': 'multipart/form-data',
    });
    if (config.auth) {
        headers.append('Authorization', `Basic ${b64.encode(`${config.auth.username}:${config.auth.password}`)}`);
    }
    return headers;
};
//# sourceMappingURL=cluster.js.map