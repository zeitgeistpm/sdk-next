export const assert = (expression: boolean, onError: () => Error) => {
  if (!expression) throw onError()
}
