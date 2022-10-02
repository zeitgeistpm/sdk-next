import { object, optional, union, array, literal, string } from 'superstruct'

/**
 * The standard Zeitgeist metadata type.
 * @note If the market doest not adhere to this type the market will not be properly
 * indexed by the Zeitgeist indexer and might not show up in the Zeitgeist.pm application.
 */
export type Metadata = {
  /**
   * The short name for the market, ex. 'TEAM 1 v.s TEAM 2'.
   */
  slug: string
  /**
   * The question for the market, capped at 160 chars.
   */
  question: string
  /**
   * The complete description of the market including all details.
   */
  description: string
  /**
   * If the market is categorical this field will contain the category data.
   * The index of the category is relational to the index in a Market.assets.
   * @example ```ts
   * const assetsWithMetadata = market.assets.map((asset, index) => ([asset, market.categories[index]]))
   * ```
   */
  categories?: CategoryMetadata[]
  /**
   * Tags for the market.
   */
  tags?: string[]
  /**
   * If this field is present and contains content, the market is encrypted.
   * An identifier is placed in this field to denote what key the client should
   * use. E.g. this field might contain "us-gov:22313" to denote a decryption
   * key attached to this identity will decrypt the data.
   */
  confidentialId?: string
  /**
   * The image for the market.
   */
  img?: string
  /**
   * Type of scalar range if market is of type scaler.
   */
  scalarType?: ScalarRangeType
}

/**
 * Market categories related to the assets in the market.
 */
export type CategoryMetadata = {
  /**
   * Name of the category.
   */
  name: string
  /**
   * The token shortname for the cateogory.
   */
  ticker?: string
  /**
   * Image base64 or src
   */
  img?: string
  /**
   * Category token color.
   */
  color?: string
}

export type ScalarRangeType = 'number' | 'date'

/**
 * IO validation of Market Categories using superstruct
 */
export const IOMarketMetadataCategory = object({
  name: string(),
  ticker: optional(string()),
  img: optional(string()),
  color: optional(string()),
})

/**
 * IO validation of Market metadata object using superstruct
 */
export const IOMarketMetadata = object({
  slug: string(),
  description: string(),
  question: string(),
  tags: optional(array(string())),
  confidentialId: optional(string()),
  img: optional(string()),
  scalarType: optional(union([literal('date'), literal('number')])),
  categories: optional(array(IOMarketMetadataCategory)),
})
