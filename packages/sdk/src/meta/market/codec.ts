import type { AnyJson } from '@polkadot/types/types'
import type { Codec } from '@zeitgeistpm/utility/dist/codec'
import { either, left, right } from '@zeitgeistpm/utility/dist/either'
import { StructError, validate } from 'superstruct'
import { IOMarketMetadata, MarketMetadata } from '.'

/**
 * Official Zeitgeist metadata specification codec.
 * Encodes, decodes and validates any json object to and from MarketMetadata.
 *
 * @note Use this to ensure your markets are compatible with the official zeitgeist frontend.
 *
 * @type Codec<AnyJson, MarketMetadata, StructError>
 */
export const ZeitgeistMetadataCodec: Codec<AnyJson, MarketMetadata, StructError> = {
  encode: input => {
    const [error, encoded] = validate(input, IOMarketMetadata)
    if (encoded) {
      return either(right(encoded))
    }
    return either(left(error))
  },
  decode: output => {
    const [error, encoded] = validate(output, IOMarketMetadata)
    if (encoded) {
      return either(right(encoded as AnyJson))
    }
    return either(left(error))
  },
}
