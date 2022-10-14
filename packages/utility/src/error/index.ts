export const throws = <A, E = Error>(error: E): A => {
  throw error
}

export const throwsC =
  <A, E = Error>(error: E): (() => A) =>
  () => {
    throw error
  }
