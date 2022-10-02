import { StructError, validate } from 'superstruct'
import type { AnyJson } from '@polkadot/types/types'
import type { Codec } from '@zeitgeistpm/utility/dist/codec'
import { either, left, right } from '@zeitgeistpm/utility/dist/either'
import { Metadata, IOMetadata } from './types'

/**
 * Official Zeitgeist metadata specification codec.
 * Encodes, decodes and validates any json object to and from MarketMetadata.
 *
 * @note Use this to ensure your markets are compatible with the official zeitgeist frontend.
 *
 * @type Codec<AnyJson, MarketMetadata, StructError>
 */
export const MarketMetadataCodec: Codec<AnyJson, Metadata, StructError> = {
  encode: input => {
    const [error, encoded] = validate(input, IOMetadata)
    if (encoded) {
      return either(right(encoded))
    }
    return either(left(error))
  },
  decode: output => {
    const [error, encoded] = validate(output, IOMetadata)
    if (encoded) {
      return either(right(encoded as AnyJson))
    }
    return either(left(error))
  },
}
