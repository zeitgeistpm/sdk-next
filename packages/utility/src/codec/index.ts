import { throws } from '../error'
import { tryCatch, either } from '../either'
import { Codec } from './types'

export * from './types'
export * from './impl'

/**
 * Construct a Codec<I, O> from functions that either returns the encoded/decoded as a Right value
 * or throws an error that will result in a Left value
 *
 * @generic I - type of input
 * @generic O - type of output
 */
export const codec = <I, O>(config: {
  encode: (input: I) => O
  decode: (input: O) => I
}): Codec<I, O> => ({
  encode: data => either(tryCatch(() => config.encode(data))),
  decode: data => either(tryCatch(() => config.decode(data))),
})

/**
 * Compose two codecs.
 *
 * @generic I - original input
 * @generic IO - output of first codec, input for the second.
 * @generic O - output of last codec
 */
export const compose = <I, IO, O>(codeca: Codec<I, IO>, codecb: Codec<IO, O>): Codec<I, O> => ({
  encode: data => codecb.encode(codeca.encode(data).unrightOr(throws)),
  decode: data => codeca.decode(codecb.decode(data).unrightOr(throws)),
})

/**
 *
 * Flip the encoding decoding of a codec.
 *
 * @generic I - type of input
 * @generic O - type of output
 */
export const flip = <I, O>(codec: Codec<O, I>): Codec<I, O> => ({
  encode: data => codec.decode(data),
  decode: data => codec.encode(data),
})
