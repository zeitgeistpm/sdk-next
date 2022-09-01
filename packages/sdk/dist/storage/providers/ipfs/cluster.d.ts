import { IPFSClusterConfiguration } from './types';
/**
 * Response type for both pinning and unpinning the the ipfs cluster.
 */
export declare type IPFSClusterPinningResponse = {
    replication_factor_min: number;
    replication_factor_max: number;
    name: string;
    mode: string;
    shard_size: number;
    user_allocations: string;
    expire_at: string;
    metadata: string;
    pin_update: string;
    cid: string;
    type: number;
    allocations: Array<string>;
    max_depth: number;
    reference: string;
};
/**
 *
 * Pinns a cid to the cluster.
 *
 * @param cid string - the cid to pin to the cluster
 * @param config IPFSClusterConfiguration
 * @returns Promise<IPFSClusterPinningResponse>
 */
export declare const pin: (cid: string, config: IPFSClusterConfiguration) => Promise<IPFSClusterPinningResponse>;
/**
 *
 * Unpinns a cid from the cluster.
 *
 * @param cid string - the cid to unpin from the cluster
 * @param config IPFSClusterConfiguration
 * @returns Promise<IPFSClusterPinningResponse>
 */
export declare const unpin: (cid: string, config: IPFSClusterConfiguration) => Promise<IPFSClusterPinningResponse>;
