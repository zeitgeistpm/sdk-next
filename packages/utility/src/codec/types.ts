import { EitherInterface } from '../either'

/**
 * A encoder and decoder of metadata objects.
 */
export type Codec<I, O> = {
  /**
   * Decode output type to input.
   *
   * @generic I - input type
   * @generic O - output type
   * @param data O - output
   * @returns I - input type
   */
  decode: (data: O) => EitherInterface<Error, I>
  /**
   * Encode input type to output
   *
   * @generic I - input type
   * @generic O - output type
   * @param data I - input
   * @returns O - output type
   */
  encode: (data: I) => EitherInterface<Error, O>
}
