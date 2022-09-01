import type { Augments } from './augments';
import type { getSdk } from './graphql/sdk';
export declare type Config = {
    uri: string;
};
export declare type ZeitgeistIndexer = GQLSdk & Augments;
export declare type GQLSdk = ReturnType<typeof getSdk>;
