import { GraphQLClient } from "graphql-request";
import { getSdk } from "./sdk";

export * from "./sdk";

export type Config = {
  endpoint: string;
};

export const create = (config: Config) => {
  const client = new GraphQLClient(config.endpoint);
  const sdk = getSdk(client);
  return sdk;
};
