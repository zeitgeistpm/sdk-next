import { ExtSigner, KeyringPairOrExtSigner } from './types'

export * from './types'

/**
 * Typeguard if the signer sources from an extension.
 *
 * @param signer KeyringPairOrExtSigner
 * @returns signer is ExtSigner
 */
export const isExtSigner = (
  signer: KeyringPairOrExtSigner,
): signer is ExtSigner => {
  return (signer as ExtSigner).signer !== undefined
}
