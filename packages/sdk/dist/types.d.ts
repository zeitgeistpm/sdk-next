import type { ApiPromise } from '@polkadot/api';
import type { ZeitgeistIndexer } from '@zeitgeistpm/indexer';
export declare type Context = FullContext | (ApiContext | IndexerContext);
export declare type FullContext = {
    api: ApiPromise;
    indexer: ZeitgeistIndexer;
};
export declare type ApiContext = {
    api: ApiPromise;
};
export declare type IndexerContext = {
    indexer: ZeitgeistIndexer;
};
export declare const isFullContext: (config: Context) => config is FullContext;
export declare const isApiContext: (config: Context) => config is ApiContext;
export declare const isIndexerContext: (config: Context) => config is IndexerContext;
