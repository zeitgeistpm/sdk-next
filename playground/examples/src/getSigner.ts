import Keyring, { createTestKeyring } from '@polkadot/keyring'

export const getTestSigner = () => {
  const keyring = createTestKeyring({ ss58Format: 73, type: 'sr25519' })
  return keyring.addFromUri('//Alice', { name: 'Alice default' })
}

export const getBsrTestingSigner = () => {
  const keyring = new Keyring({ ss58Format: 73, type: 'sr25519' })
  return keyring.addFromMnemonic(import.meta.env.VITE_SECRE_PHRASE)
}
