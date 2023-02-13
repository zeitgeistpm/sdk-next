import { Codec } from '@zeitgeistpm/utility/dist/codec'
import { JsonCodec } from '@zeitgeistpm/utility/dist/codec'
import { throws } from '@zeitgeistpm/utility/dist/error'
import { from } from '@zeitgeistpm/utility/dist/option'
import * as Te from '@zeitgeistpm/utility/dist/taskeither'
import { Storage } from '../..'

/**
 *
 * Create a MetadataStorage object that can store data to ephemeral memory
 * Only meant for local development on dev nodes with ephemeral block storage.
 *
 * @generic T - type of metadata
 */
export const storage = <T extends object>(
  codec: Codec<string, T> = JsonCodec<T>(),
): Storage<T, Uint8Array> => {
  const memory = new Map<string, string>()

  return {
    put: Te.from(async data => {
      const content = codec.decode(data).unrightOr(throws)
      console.log({ content })
      const crypto = globalThis.crypto ?? (await import('node:crypto'))

      const buffer = await crypto.subtle.digest(
        'SHA-384',
        new TextEncoder().encode(content),
      )

      const cid = new Uint8Array(buffer)

      memory.set(hashUa8(cid), content)

      return cid
    }),

    get: Te.from(async cid => {
      const data = from<string>(memory.get(hashUa8(cid)) ?? null).map(codec.encode)
      return data.bind(d => d.unright())
    }),

    del: Te.from(async cid => {
      memory.delete(hashUa8(cid))
    }),
  }
}

const hashUa8 = (cid: Uint8Array) =>
  Array.prototype.map.call(cid, x => ('00' + x.toString(16)).slice(-2)).join('')
