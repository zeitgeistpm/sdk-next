import { MetadataCodec } from '../types';
/**
 * Encode and decode objects from json strings.
 * Simple wrapper around JSON.parse|stringify
 *
 * @generic T - the type of the metadata
 * @returns MetadataCodec<T, string>
 */
export declare const JsonCodec: <T>() => MetadataCodec<string, T>;
