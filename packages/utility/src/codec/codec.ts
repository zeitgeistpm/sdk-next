import * as AE from '../aeither'
import { Codec } from './types'

/**
 * Construct a Codec<I, O> from functions that either returns the encoded/decoded as a Right value
 * or throws an error that will result in a Left value
 *
 * @generic I - type of input
 * @generic O - type of output
 */
export const codec = <I, O>(config: {
  encode: (input: I) => Promise<O>
  decode: (input: O) => Promise<I>
}): Codec<I, O> => ({
  encode: data => AE.from(async () => config.encode(data)),
  decode: data => AE.from(async () => config.decode(data)),
})
