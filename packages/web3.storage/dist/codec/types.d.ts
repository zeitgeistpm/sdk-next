export * from '../providers/ipfs/types';
/**
 * A generic metadata type for on chain objects that
 * has metadata stored in some external storage like IPFS.
 */
export declare type MetadataStorage<T, ID = string> = {
    /**
     * @param id ID
     * @returns Promise<T | undefined | null>
     */
    get: (id: ID) => Promise<T | undefined | null>;
    put: (data: T, opts?: {
        ephemeral?: boolean;
    }) => Promise<ID>;
    del: (id: ID) => Promise<void>;
};
/**
 * A encoder and decoder of metadata objects.
 */
export declare type MetadataCodec<I, O> = {
    decode: (data: O) => I;
    encode: (data: I) => O;
};
