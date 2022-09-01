import { MetadataCodec } from './types'

export * from './types'
export * from './impl/json'

export const compose = <SA, TA, TB>(
  codeca: MetadataCodec<TA, SA>,
  codecb: MetadataCodec<TB, TA>,
): MetadataCodec<SA, TB> => ({
  encode: data => codecb.decode(codeca.decode(data)),
  decode: data => codeca.encode(codecb.encode(data)),
})

export const flip = <T, S>(codec: MetadataCodec<T, S>): MetadataCodec<S, T> => ({
  encode: data => codec.decode(data),
  decode: data => codec.encode(data),
})
