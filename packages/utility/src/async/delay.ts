/**
 * Promise based delay
 *
 * @param ms number
 * @returns Promise<void>
 */
export const delay = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms)
  })
