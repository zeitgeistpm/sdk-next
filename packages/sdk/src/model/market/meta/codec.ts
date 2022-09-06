import {
  StructError,
  object,
  optional,
  union,
  array,
  literal,
  validate,
  string,
} from 'superstruct'
import { AnyJson } from '@polkadot/types/types'
import { either, left, right } from '@zeitgeistpm/utility/dist/either'
import { Codec } from '@zeitgeistpm/utility/dist/codec'
import { MarketMetadata } from './types'

/**
 * Official Zeitgeist metadata specification codec.
 * Encodes, decodes and validates any json object to and from MarketMetadata.
 *
 * @note Use this to ensure your markets are compatible with the official zeitgeist frontend.
 *
 * @type Codec<AnyJson, MarketMetadata, StructError>
 */
export const ZeitgeistMetadataCodec: Codec<AnyJson, MarketMetadata, StructError> =
  {
    encode: input => {
      const [error, encoded] = validate(input, IOMarketMetadata)
      if (IOMarketMetadata.is(encoded)) {
        return either(right(encoded))
      }
      return either(left(error as StructError))
    },
    decode: output => {
      const [error, encoded] = validate(output, IOMarketMetadata)
      if (IOMarketMetadata.is(encoded)) {
        return either(right(encoded as AnyJson))
      }
      return either(left(error as StructError))
    },
  }

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
