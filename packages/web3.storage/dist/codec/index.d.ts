import { MetadataCodec } from './types';
export * from './types';
export * from './impl/json';
/**
 * Compose two codecs.
 *
 * @generic I - original input
 * @generic IO - output of first codec, input for the second.
 * @generic O - output of last codec
 * @param codeca MetadataCodec<IO, I>
 * @param codecb MetadataCodec<O, IO>
 * @returns MetadataCodec<I, O>
 */
export declare const compose: <I, IO, O>(codeca: MetadataCodec<I, IO>, codecb: MetadataCodec<IO, O>) => MetadataCodec<I, O>;
/**
 *
 * Flip the encoding decoding of a codec.
 *
 * @generic I - type of input
 * @generic O - type of output
 * @param codec MetadataCodec<T, S>
 * @returns MetadataCodec<S, T>
 */
export declare const flip: <I, O>(codec: MetadataCodec<O, I>) => MetadataCodec<I, O>;
