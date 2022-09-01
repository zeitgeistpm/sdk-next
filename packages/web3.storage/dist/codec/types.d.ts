export * from '../providers/ipfs/types';
/**
 * A generic metadata type for on chain objects that
 * has metadata stored in some external storage like IPFS.
 */
export declare type MetadataStorage<T, ID = string> = {
    /**
     * Get item from storage
     *
     * @generic ID - id type
     * @generic T - type of data
     * @param id ID
     * @returns Promise<T | undefined | null>
     */
    get: (id: ID) => Promise<T | undefined | null>;
    /**
     * Put item to storage
     *
     * @generic ID - id type
     * @generic T - type of data
     * @param id ID
     * @param opts.ephemeral boolean - persist item, pinning for ipfs. defaults to false.
     * @returns Promise<ID>
     */
    put: (data: T, opts?: {
        ephemeral?: boolean;
    }) => Promise<ID>;
    /**
     * delete item from storage
     *
     * @generic ID - id type
     * @param id ID
     * @returns Promise<void>
     */
    del: (id: ID) => Promise<void>;
};
/**
 * A encoder and decoder of metadata objects.
 */
export declare type MetadataCodec<I, O> = {
    /**
     * Decode output type to input.
     *
     * @generic I - input type
     * @generic O - output type
     * @param data O - output
     * @returns I - input type
     */
    decode: (data: O) => I;
    /**
     * Encode input type to output
     *
     * @generic I - input type
     * @generic O - output type
     * @param data I - input
     * @returns O - output type
     */
    encode: (data: I) => O;
};
