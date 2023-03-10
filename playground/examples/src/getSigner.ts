import Keyring, { createTestKeyring } from '@polkadot/keyring'
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp'

export const getTestSigner = () => {
  const keyring = createTestKeyring({ ss58Format: 73, type: 'sr25519' })
  return keyring.addFromUri('//Alice', { name: 'Alice default' })
}

export const getBsrTestingSigner = () => {
  const keyring = new Keyring({ ss58Format: 73, type: 'sr25519' })
  return keyring.addFromMnemonic(import.meta.env.VITE_SECRE_PHRASE)
}

export const getExtensionSigner = async (address: string) => {
  const injector = await web3FromAddress(address)
  return {
    address,
    signer: injector.signer,
  }
}
