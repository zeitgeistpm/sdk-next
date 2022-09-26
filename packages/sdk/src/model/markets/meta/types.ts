export type MarketMetadata = {
  // The short name for the market, ex. 'TEAM 1 v.s TEAM 2'.
  slug: string
  // The question for the market, capped at 160 chars.
  question: string
  // The complete description of the market including all details.
  description: string
  // If the market is categorical this field will contain the category data.
  categories?: CategoryMetadata[]
  // Tags for the market.
  tags?: string[]
  // If this field is present and contains content, the market is encrypted.
  // An identifier is placed in this field to denote what key the client should
  // use. E.g. this field might contain "us-gov:22313" to denote a decryption
  // key attached to this identity will decrypt the data.
  confidentialId?: string
  // The image for the market.
  img?: string
  // Type of scalar range if market is of type scaler.
  scalarType?: ScalarRangeType
}

export type CategoryMetadata = {
  name: string
  ticker?: string
  img?: string
  color?: string
}

export type ScalarRangeType = 'number' | 'date'