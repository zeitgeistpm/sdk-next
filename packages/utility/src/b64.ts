export const encode = (str: string): string => {
  try {
    return btoa(str)
  } catch (err) {
    return Buffer.from(str).toString('base64')
  }
}
