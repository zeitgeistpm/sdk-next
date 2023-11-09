import { Keyring } from '@polkadot/api'
import { stringToU8a, u8aToHex } from '@polkadot/util'
import { waitReady } from '@polkadot/wasm-crypto'
import { mnemonicGenerate } from '@polkadot/util-crypto'

await waitReady()

const keyring = new Keyring({ ss58Format: 73, type: 'sr25519' })

const alice = keyring.addFromMnemonic(
  'sick actor between bamboo hedgehog uncle staff juice reveal friend kit priority',
)

const message = stringToU8a('this is our message')
const signature = alice.sign(message, { withType: false })
console.log(u8aToHex(signature))
