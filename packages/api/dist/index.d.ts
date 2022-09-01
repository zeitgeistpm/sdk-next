import { WsProvider } from "@polkadot/api";
import "@zeitgeistpm/types";
export declare type ZeitgeistApiOptions = {
    provider: WsProvider;
};
export declare const options: (opts: ZeitgeistApiOptions) => {
    provider: WsProvider;
    noInitWarn: boolean;
    rpc: {
        predictionMarkets: {
            marketOutcomeShareId: {
                description: string;
                params: ({
                    name: string;
                    type: string;
                    isOptional?: undefined;
                } | {
                    name: string;
                    type: string;
                    isOptional: boolean;
                })[];
                type: string;
            };
        };
        swaps: {
            poolSharesId: {
                description: string;
                params: ({
                    name: string;
                    type: string;
                    isOptional?: undefined;
                } | {
                    name: string;
                    type: string;
                    isOptional: boolean;
                })[];
                type: string;
            };
            poolAccountId: {
                description: string;
                params: ({
                    name: string;
                    type: string;
                    isOptional?: undefined;
                } | {
                    name: string;
                    type: string;
                    isOptional: boolean;
                })[];
                type: string;
            };
            getSpotPrice: {
                description: string;
                params: ({
                    name: string;
                    type: string;
                    isOptional?: undefined;
                } | {
                    name: string;
                    type: string;
                    isOptional: boolean;
                })[];
                type: string;
            };
            getSpotPrices: {
                description: string;
                params: {
                    name: string;
                    type: string;
                }[];
                type: string;
            };
        };
    };
    typesAlias: {
        tokens: {
            AccountData: string;
        };
    };
    types: {
        BalanceInfo: {
            amount: string;
        };
        TokensAccountData: {
            free: string;
            reserved: string;
            frozen: string;
        };
    };
};
