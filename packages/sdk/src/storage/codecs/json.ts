import { MetadataCodec } from '../types'

export const JsonCodec = <T>(): MetadataCodec<T, string> => ({
  encode: data => JSON.stringify(data),
  decode: data => JSON.parse(data),
})
