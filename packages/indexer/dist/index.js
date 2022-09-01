import { GraphQLClient } from 'graphql-request';
import { augments } from './augments';
import { getSdk } from './graphql/sdk';
export const create = (config) => {
    const client = new GraphQLClient(config.endpoint);
    const sdk = getSdk(client);
    return {
        ...sdk,
        ...augments(sdk),
    };
};
//# sourceMappingURL=index.js.map