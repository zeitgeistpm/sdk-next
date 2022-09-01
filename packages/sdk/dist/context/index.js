import { ApiPromise, WsProvider } from '@polkadot/api';
import { options } from '@zeitgeistpm/api';
import * as Indexer from '@zeitgeistpm/indexer';
import { SupportedParachain } from './types';
export * from './types';
export const mainnet = async () => {
    const provider = new WsProvider([
        rpcs.dwellir.uri,
        rpcs.zeitgeist.uri,
        rpcs.onfinality.uri,
    ]);
    const api = await ApiPromise.create(options({ provider }));
    const indexer = Indexer.create({ uri: indexers.zeitgeist.uri });
    return {
        api,
        provider,
        indexer,
    };
};
export const mainnetApi = async () => {
    const provider = new WsProvider([
        rpcs.dwellir.uri,
        rpcs.zeitgeist.uri,
        rpcs.onfinality.uri,
    ]);
    const api = await ApiPromise.create(options({ provider }));
    return {
        api,
        provider,
    };
};
export const mainnetIndexer = async () => {
    const indexer = Indexer.create({ uri: indexers.zeitgeist.uri });
    return {
        indexer,
    };
};
export const batteryStation = async () => {
    const provider = new WsProvider([rpcs.bsr.uri]);
    const api = await ApiPromise.create(options({ provider }));
    const indexer = Indexer.create({ uri: indexers.bsr.uri });
    return {
        api,
        provider,
        indexer,
    };
};
export const batteryStationApi = async () => {
    const provider = new WsProvider([rpcs.bsr.uri]);
    const api = await ApiPromise.create(options({ provider }));
    return {
        api,
        provider,
    };
};
export const batteryStationIndexer = async () => {
    const indexer = Indexer.create({ uri: indexers.bsr.uri });
    return {
        indexer,
    };
};
export const rpcs = {
    zeitgeist: {
        uri: 'wss://rpc-0.zeitgeist.pm/',
        parachain: SupportedParachain.KUSAMA,
    },
    dwellir: {
        uri: 'wss://zeitgeist-rpc.dwellir.com/',
        parachain: SupportedParachain.KUSAMA,
    },
    onfinality: {
        uri: 'wss://zeitgeist.api.onfinality.io/public-ws',
        parachain: SupportedParachain.KUSAMA,
    },
    bsr: {
        uri: 'wss://bsr.zeitgeist.pm',
        parachain: SupportedParachain.BSR,
    },
    dev: {
        uri: 'ws://127.0.0.1:9944',
        parachain: SupportedParachain.LOCAL,
    },
};
export const indexers = {
    zeitgeist: {
        uri: 'https://processor.rpc-0.zeitgeist.pm/graphql',
        parachain: SupportedParachain.KUSAMA,
    },
    bsr: {
        uri: 'https://processor.bsr.zeitgeist.pm/graphql',
        parachain: SupportedParachain.BSR,
    },
    local: {
        uri: 'http://localhost:4350/graphql',
        parachain: SupportedParachain.LOCAL,
    },
};
//# sourceMappingURL=index.js.map