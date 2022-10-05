import { array, Infer, literal, object, optional, string, union } from 'superstruct'

export type MarketMetadata = Infer<typeof IOMarketMetadata>
export type CategoryMetadata = Infer<typeof IOMarketCategoryMetadata>
export type ScalarRangeType = Infer<typeof IOScalarRangeType>

/**
 * IO validation of Market Categories using superstruct
 */
export const IOMarketCategoryMetadata = object({
  name: string(),
  ticker: optional(string()),
  img: optional(string()),
  color: optional(string()),
})

/**
 * IO Scalar range type
 */
const IOScalarRangeType = union([literal('date'), literal('number')])

/**
 * IO validation of Market metadata object using superstruct
 */
export const IOMarketMetadata = object({
  __meta: literal('markets'),
  slug: string(),
  description: string(),
  question: string(),
  tags: optional(array(string())),
  confidentialId: optional(string()),
  img: optional(string()),
  scalarType: optional(union([literal('date'), literal('number')])),
  categories: optional(array(IOMarketCategoryMetadata)),
})
