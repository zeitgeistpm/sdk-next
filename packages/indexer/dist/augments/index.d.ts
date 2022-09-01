import { GQLSdk } from '..';
export declare type Augments = {
    ping: () => Promise<number>;
};
export declare const augments: (gql: GQLSdk) => Augments;
