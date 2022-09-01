export declare type Config = {
    endpoint: string;
};
export declare const create: (config: Config) => {
    markets(variables?: import("./sdk").Exact<{
        marketId?: import("./sdk").InputMaybe<number> | undefined;
    }> | undefined, requestHeaders?: (Record<string, string> | import("graphql-request/dist/types.dom").Headers | string[][]) | undefined): Promise<import("./sdk").MarketsQuery>;
};
