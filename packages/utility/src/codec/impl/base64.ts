import { Codec, codec } from '..'

/**
 * Encode and decode objects from json strings.
 * Simple wrapper around JSON.parse|stringify
 */
export const Base64Codec = (): Codec<string, string> =>
  codec({
    encode: async output => {
      try {
        return btoa(output)
      } catch (err) {
        return Buffer.from(output).toString('base64')
      }
    },
    decode: async input => {
      try {
        return atob(input)
      } catch (err) {
        return Buffer.from(input).toString('utf8')
      }
    },
  })
