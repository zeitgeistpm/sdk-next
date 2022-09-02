import { either, tryCatch } from '@zeitgeistpm/utility/dist/either'
import { MetadataCodec } from '../types'

/**
 * Encode and decode objects from json strings.
 * Simple wrapper around JSON.parse|stringify
 *
 * @generic T - the type of the metadata
 * @returns MetadataCodec<T, string>
 */
export const JsonCodec = <T>(): MetadataCodec<string, T> => ({
  encode: output => either(tryCatch(() => JSON.parse(output))),
  decode: input => either(tryCatch(() => JSON.stringify(input))),
})
