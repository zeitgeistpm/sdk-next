import { GQLSdk } from '..'

/**
 * Ping the indexer with a lightweight query and return the response time in ms.
 *
 * @param indexer GQLSdk
 * @returns Promise<number>
 */
export const ping = async (indexer: GQLSdk): Promise<number> => {
  const start = Date.now()
  await indexer.pingQuery()
  return Date.now() - start
}
