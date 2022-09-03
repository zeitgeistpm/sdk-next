import { either, tryCatch } from '@zeitgeistpm/utility/dist/either'
import { Codec } from '..'

/**
 * Encode and decode objects from json strings.
 * Simple wrapper around JSON.parse|stringify
 */
export const JsonCodec = <T>(): Codec<string, T> => ({
  encode: output => either(tryCatch(() => JSON.parse(output))),
  decode: input => either(tryCatch(() => JSON.stringify(input))),
})
