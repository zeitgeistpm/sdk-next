import { isU8a, u8aToString } from '@polkadot/util'
import { Codec, codec } from '..'

/**
 * Encode and decode objects from json strings.
 * Simple wrapper around JSON.parse|stringify
 */
export const JsonCodec = <T>(): Codec<string | Uint8Array, T> =>
  codec({
    encode: async output => JSON.parse(isU8a(output) ? u8aToString(output) : output),
    decode: async input => JSON.stringify(input),
  })
