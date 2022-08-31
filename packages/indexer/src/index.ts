import { GraphQLClient } from "graphql-request";
import { getSdk } from "./sdk";

export type Config = {
  endpoint: string;
};

export const create = (config: Config) => {
  const client = new GraphQLClient(config.endpoint);
  const sdk = getSdk(client);
  return sdk;
};

async function main() {
  const indexer = create({
    endpoint: "https://processor.zeitgeist.pm/graphql",
  });
  const data = await indexer.market({ marketId: 1 });

  data.markets.forEach((market) => {
    console.log(market.oracle);
  });
}

main();
