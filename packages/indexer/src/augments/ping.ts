import { GQLSdk } from '..'

export const ping = async (indexer: GQLSdk): Promise<number> => {
  const start = Date.now()
  await indexer.pingQuery()
  return Date.now() - start
}
