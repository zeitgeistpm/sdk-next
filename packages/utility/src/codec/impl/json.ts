import { Codec, codec } from '..'

/**
 * Encode and decode objects from json strings.
 * Simple wrapper around JSON.parse|stringify
 */
export const JsonCodec = <T>(): Codec<string, T> =>
  codec({
    encode: output => JSON.parse(output),
    decode: input => JSON.stringify(input),
  })
