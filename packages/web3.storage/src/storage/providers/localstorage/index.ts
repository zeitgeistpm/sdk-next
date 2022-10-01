import { Codec } from '@zeitgeistpm/utility/dist/codec'
import { JsonCodec } from '@zeitgeistpm/utility/dist/codec/impl/json'
import { either, left, right, tryCatch } from '@zeitgeistpm/utility/dist/either'
import { throws } from '@zeitgeistpm/utility/dist/error'
import { from } from '@zeitgeistpm/utility/dist/option'
import { CID } from 'ipfs-http-client'
import { MetadataStorage } from '../..'

/**
 *
 * Create a MetadataStorage object that can store data to localstorage.
 * Only meant for local development on dev nodes with ephemeral block storage.
 *
 * @generic T - type of metadata
 */
export const storage = <T>(codec: Codec<string, T> = JsonCodec()): MetadataStorage<T, CID> => {
  return {
    put: async data => {
      try {
        const content = codec.decode(data).unrightOr(throws)

        const buffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(content))

        const hash = Array.prototype.map
          .call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2))
          .join('')

        localStorage.setItem(hash, content)

        return either(right(CID.parse(hash)))
      } catch (error) {
        return either(left(error as Error))
      }
    },

    get: async cid =>
      from<string>(localStorage.getItem(cid.toString()))
        .map(codec.encode)
        .unwrapOr(() => either(left(new Error(`No value found for key ${cid.toString()}`)))),

    del: async cid => {
      return either(
        tryCatch(() => {
          localStorage.removeItem(cid.toString())
        }),
      )
    },
  }
}
