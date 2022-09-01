export * from '../providers/ipfs/types';
/**
 * A generic metadata type for on chain objects that
 * has metadata stored in some external storage like IPFS.
 */
export declare type MetadataStorage<T, ID = string, S = unknown> = {
    get: (id: ID) => Promise<T | undefined | null>;
    put: (data: T) => Promise<ID>;
    del: (id: ID) => Promise<void>;
    withCodec: (codec: MetadataCodec<T, S>) => MetadataStorage<T, ID, S>;
};
/**
 * A encoder and decoder of metadata objects.
 */
export declare type MetadataCodec<T, S = unknown> = {
    decode: (data: S) => T;
    encode: (data: T) => S;
};
