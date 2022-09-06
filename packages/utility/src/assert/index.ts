/**
 * Asserts an expresson and throw onError return value if falsy.
 */
export const assert = (expression: boolean, onError: () => Error) => {
  if (!expression) throw onError()
}
