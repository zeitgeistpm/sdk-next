import { either, left, right } from '@zeitgeistpm/utility/dist/either'
import { from } from '@zeitgeistpm/utility/dist/option'
import { throws } from '@zeitgeistpm/utility/dist/error'
import { JsonCodec } from '../../codec/impl/json'
import { Codec } from '../../codec'
import { MetadataStorage } from '../../storage'

/**
 *
 * Create a MetadataStorage object that can store data on an IPFS node
 * and cluster if configured to do so.
 *
 * @generic T - type of metadata
 */
export const storage = <T>(
  codec: Codec<string, T> = JsonCodec(),
): MetadataStorage<T, string> => {
  return {
    put: async data => {
      try {
        const content = codec.decode(data).unrightOr(throws)

        const buffer = await crypto.subtle.digest(
          'SHA-256',
          new TextEncoder().encode(content),
        )

        const hash = Array.prototype.map
          .call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2))
          .join('')

        localStorage.setItem(hash, content)

        return either(right(hash))
      } catch (error) {
        return either(left(error as Error))
      }
    },

    get: async hash =>
      from<string>(localStorage.getItem(hash))
        .map(codec.encode)
        .unwrapOr(() =>
          either(left(new Error(`No value found for key ${hash}`))),
        ),

    del: async hash => {
      localStorage.removeItem(hash)
      return either(right(null))
    },
  }
}
