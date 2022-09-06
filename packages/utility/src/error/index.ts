export const throws = <A, E = Error>(error: E): A => {
  throw error
}
