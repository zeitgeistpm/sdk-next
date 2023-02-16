/**
 * Fetched market by id. Query type
 * Will differentiate between indexer and rpc context
 */
export type MarketGetQuery =
  | number
  | string
  | {
      marketId: number
    }
