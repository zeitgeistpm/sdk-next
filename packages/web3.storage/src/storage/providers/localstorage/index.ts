import { Codec } from '@zeitgeistpm/utility/dist/codec'
import { JsonCodec } from '@zeitgeistpm/utility/dist/codec/impl/json'
import { throws } from '@zeitgeistpm/utility/dist/error'
import { from } from '@zeitgeistpm/utility/dist/option'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { Storage } from '../..'

/**
 *
 * Create a MetadataStorage object that can store data to localstorage.
 * Only meant for local development on dev nodes with ephemeral block storage.
 *
 * @generic T - type of metadata
 */
export const storage = <T extends object>(
  codec: Codec<string, T> = JsonCodec<T>(),
): Storage<T, string> => {
  return {
    put: Te.from(async data => {
      const content = codec.decode(data).unrightOr(throws)

      const buffer = await crypto.subtle.digest(
        'SHA-256',
        new TextEncoder().encode(content),
      )

      const hash = Array.prototype.map
        .call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2))
        .join('')

      localStorage.setItem(hash, content)

      return hash
    }),

    get: Te.from(async hash => {
      const data = from<string>(localStorage.getItem(hash)).map(codec.encode)
      return data.bind(d => d.unright())
    }),

    del: Te.from(async hash => localStorage.removeItem(hash)),
  }
}
