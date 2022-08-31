import { gql } from "graphql-request";
import type { MarketsQuery, MarketsQueryVariables } from "../graphql/generated";

export const fullMarketFragmet = gql`
  fragment FullMarket on Market {
    id
  }
`;

export const marketsQueryDocument = gql`
  ${fullMarketFragmet}
  query Markets($marketId: Int!) {
    markets(where: { marketId_eq: $marketId }) {
      ...FullMarket
    }
  }
`;
