export * from './providers/ipfs/types';
/**
 * A generic metadata type for on chain objects that
 * has metadata stored in some external storage like IPFS.
 */
export declare type MetadataStorage<T, ID = string> = {
    get: (id: ID) => Promise<T>;
    put: (data: T) => Promise<ID>;
    del: (id: ID) => Promise<void>;
};
/**
 * A encoder and decoder of metadata objects.
 */
export declare type MetadataCodec<T, S = unknown> = {
    decode: (data: S) => T;
    encode: (data: T) => S;
};
