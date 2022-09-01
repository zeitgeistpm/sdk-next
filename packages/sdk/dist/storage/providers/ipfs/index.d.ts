import * as IPFS from 'ipfs-http-client';
import { MetadataStorage } from '../../types';
import { IPFSConfiguration } from './types';
/**
 *
 * Create a MetadataStorage object that can store data on an IPFS node
 * and cluster if configured to do so.
 *
 * @param config IPFSConfiguration
 * @returns MetadataStorage<T, IPFS.CID>
 */
export declare const create: <T>(config: IPFSConfiguration) => MetadataStorage<T, IPFS.CID>;
