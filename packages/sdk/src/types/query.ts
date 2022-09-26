/**
 * Pagination query parameters
 */
export type PaginationQuery = {
  /**
   * The index to start at.
   */
  offset: number
  /**
   * The number of items to fetch.
   */
  limit: number
}

/**
 * Typeguard for pagination query objects.
 *
 * @param query any
 * @returns query is PaginationQuery
 */
export const isPaginated = (query: any): query is PaginationQuery =>
  Boolean(
    query &&
      typeof query === 'object' &&
      query !== null &&
      'offset' in query &&
      typeof query['offset'] === 'number' &&
      'limit' in query &&
      typeof query['limit'] === 'number',
  )
