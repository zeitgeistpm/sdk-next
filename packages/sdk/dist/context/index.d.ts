import { ApiContext, FullContext, IndexerContext, SupportedParachain } from './types';
export * from './types';
export declare const mainnet: () => Promise<FullContext>;
export declare const mainnetApi: () => Promise<ApiContext>;
export declare const mainnetIndexer: () => Promise<IndexerContext>;
export declare const batteryStation: () => Promise<FullContext>;
export declare const batteryStationApi: () => Promise<ApiContext>;
export declare const batteryStationIndexer: () => Promise<IndexerContext>;
export declare const rpcs: {
    zeitgeist: {
        uri: string;
        parachain: SupportedParachain;
    };
    dwellir: {
        uri: string;
        parachain: SupportedParachain;
    };
    onfinality: {
        uri: string;
        parachain: SupportedParachain;
    };
    bsr: {
        uri: string;
        parachain: SupportedParachain;
    };
    dev: {
        uri: string;
        parachain: SupportedParachain;
    };
};
export declare const indexers: {
    zeitgeist: {
        uri: string;
        parachain: SupportedParachain;
    };
    bsr: {
        uri: string;
        parachain: SupportedParachain;
    };
    local: {
        uri: string;
        parachain: SupportedParachain;
    };
};
