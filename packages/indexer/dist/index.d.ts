import { Augments } from './augments';
import { getSdk } from './graphql/sdk';
export declare type Config = {
    endpoint: string;
};
export declare type ZeitgeistIndexer = GQLSdk & Augments;
export declare type GQLSdk = ReturnType<typeof getSdk>;
export declare const create: (config: Config) => ZeitgeistIndexer;
