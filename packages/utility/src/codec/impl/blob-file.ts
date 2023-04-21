import { codec } from '..'

/**
 * Encode and decode objects from json strings.
 * Simple wrapper around JSON.parse|stringify
 */
export const BlobFileCodec = codec<string | Uint8Array, Blob>({
  decode: async d => new Uint8Array(await d.arrayBuffer()),
  encode: async d => new Blob([d]),
})
