import { GraphQLClient } from "graphql-request";
import { getSdk } from "./sdk"; // THIS FILE IS THE GENERATED FILE

async function main() {
  const client = new GraphQLClient("https://processor.zeitgeist.pm/graphql");
  const sdk = getSdk(client);
  const { markets } = await sdk.market({ marketId: 1 }); // This is fully typed, based on the query

  markets.forEach((market) => {
    console.log(market.oracle);
  });
}

main();
