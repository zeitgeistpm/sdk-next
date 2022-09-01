import { GraphQLClient } from "graphql-request";
import { getSdk } from "./sdk";
export * from "./sdk";
export const create = (config) => {
    const client = new GraphQLClient(config.endpoint);
    const sdk = getSdk(client);
    return sdk;
};
//# sourceMappingURL=index.js.map