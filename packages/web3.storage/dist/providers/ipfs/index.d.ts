import * as IPFSHttpClient from 'ipfs-http-client';
import { MetadataCodec, MetadataStorage } from '../../codec/types';
import { IPFSConfiguration } from './types';
/**
 *
 * Create a MetadataStorage object that can store data on an IPFS node
 * and cluster if configured to do so.
 *
 * @generic T - type of metadata
 * @param config IPFSConfiguration - configuration for the ipfs client
 * @param codec MetadataCodec<T, string> - the codec for the metadata, encode to and decode from string.
 * @returns MetadataStorage<T, IPFS.CID | string>
 */
export declare const create: <T>(config: IPFSConfiguration, codec?: MetadataCodec<string, T>) => MetadataStorage<T, string | IPFSHttpClient.CID>;
