import { MetadataCodec } from './types';
export * from './types';
export * from './impl/json';
export declare const compose: <SA, TA, TB>(codeca: MetadataCodec<TA, SA>, codecb: MetadataCodec<TB, TA>) => MetadataCodec<SA, TB>;
export declare const flip: <T, S>(codec: MetadataCodec<T, S>) => MetadataCodec<S, T>;
