import { GraphQLClient } from "graphql-request";
import { getSdk } from "./sdk";
export const create = (config) => {
    const client = new GraphQLClient(config.endpoint);
    const sdk = getSdk(client);
    return sdk;
};
async function main() {
    const indexer = create({
        endpoint: "https://processor.zeitgeist.pm/graphql",
    });
    const data = await indexer.markets({ marketId: 1 });
    data.markets.forEach((market) => {
        console.log(market.oracle);
    });
}
main();
//# sourceMappingURL=index.js.map