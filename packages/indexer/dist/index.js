import { GraphQLClient } from 'graphql-request';
import { augments } from './augments';
import { getSdk } from './graphql/sdk';
export * from './graphql/sdk';
export * from './types';
export const create = (config) => {
    const client = new GraphQLClient(config.uri);
    const gql = getSdk(client);
    return {
        ...gql,
        ...augments(gql),
    };
};
//# sourceMappingURL=index.js.map