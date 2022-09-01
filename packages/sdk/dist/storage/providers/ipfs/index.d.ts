import * as IPFS from 'ipfs-http-client';
import { MetadataStorage } from '../../types';
import { IPFSConfiguration } from './types';
export declare const create: <T>(config: IPFSConfiguration) => MetadataStorage<T, IPFS.CID>;
