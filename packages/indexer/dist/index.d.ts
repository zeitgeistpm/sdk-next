export * from './sdk';
export declare type Config = {
    endpoint: string;
};
export declare const create: (config: Config) => {
    accountBalances(variables?: import("./sdk").Exact<{
        where?: import("./sdk").InputMaybe<import("./sdk").AccountBalanceWhereInput> | undefined;
        order?: import("./sdk").InputMaybe<import("./sdk").InputMaybe<import("./sdk").AccountBalanceOrderByInput> | import("./sdk").InputMaybe<import("./sdk").AccountBalanceOrderByInput>[]> | undefined;
        offset?: import("./sdk").InputMaybe<number> | undefined;
        limit?: import("./sdk").InputMaybe<number> | undefined;
    }> | undefined, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./sdk").AccountBalancesQuery>;
    assets(variables?: import("./sdk").Exact<{
        where?: import("./sdk").InputMaybe<import("./sdk").AssetWhereInput> | undefined;
        order?: import("./sdk").InputMaybe<import("./sdk").InputMaybe<import("./sdk").AssetOrderByInput> | import("./sdk").InputMaybe<import("./sdk").AssetOrderByInput>[]> | undefined;
        offset?: import("./sdk").InputMaybe<number> | undefined;
        limit?: import("./sdk").InputMaybe<number> | undefined;
    }> | undefined, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./sdk").AssetsQuery>;
    historicalAccountBalances(variables?: import("./sdk").Exact<{
        where?: import("./sdk").InputMaybe<import("./sdk").HistoricalAccountBalanceWhereInput> | undefined;
        order?: import("./sdk").InputMaybe<import("./sdk").InputMaybe<import("./sdk").HistoricalAccountBalanceOrderByInput> | import("./sdk").InputMaybe<import("./sdk").HistoricalAccountBalanceOrderByInput>[]> | undefined;
        offset?: import("./sdk").InputMaybe<number> | undefined;
        limit?: import("./sdk").InputMaybe<number> | undefined;
    }> | undefined, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./sdk").HistoricalAccountBalancesQuery>;
    historicalAssets(variables?: import("./sdk").Exact<{
        where?: import("./sdk").InputMaybe<import("./sdk").HistoricalAssetWhereInput> | undefined;
        order?: import("./sdk").InputMaybe<import("./sdk").InputMaybe<import("./sdk").HistoricalAssetOrderByInput> | import("./sdk").InputMaybe<import("./sdk").HistoricalAssetOrderByInput>[]> | undefined;
        offset?: import("./sdk").InputMaybe<number> | undefined;
        limit?: import("./sdk").InputMaybe<number> | undefined;
    }> | undefined, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./sdk").HistoricalAssetsQuery>;
    markets(variables?: import("./sdk").Exact<{
        where?: import("./sdk").InputMaybe<import("./sdk").MarketWhereInput> | undefined;
        order?: import("./sdk").InputMaybe<import("./sdk").InputMaybe<import("./sdk").MarketOrderByInput> | import("./sdk").InputMaybe<import("./sdk").MarketOrderByInput>[]> | undefined;
        limit?: import("./sdk").InputMaybe<number> | undefined;
        offset?: import("./sdk").InputMaybe<number> | undefined;
    }> | undefined, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./sdk").MarketsQuery>;
    pools(variables?: import("./sdk").Exact<{
        where?: import("./sdk").InputMaybe<import("./sdk").PoolWhereInput> | undefined;
        order?: import("./sdk").InputMaybe<import("./sdk").InputMaybe<import("./sdk").PoolOrderByInput> | import("./sdk").InputMaybe<import("./sdk").PoolOrderByInput>[]> | undefined;
        offset?: import("./sdk").InputMaybe<number> | undefined;
        limit?: import("./sdk").InputMaybe<number> | undefined;
    }> | undefined, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./sdk").PoolsQuery>;
};
