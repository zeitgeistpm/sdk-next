import { create, mainnet, batterystation, MetadataStorage } from '@zeitgeistpm/sdk'
import { getBsrTestingSigner } from './getSigner'
import { SignerOptions } from '@polkadot/api/types'
/**
 * Custom type for the market metadata
 */
type CustomMarketMetadata = {
  __meta: 'markets'
  customValue: string
}

/**
 * Here we are creating a sdk with a custom storage provider and metadata type.
 */
const sdk = await create(mainnet<MetadataStorage<CustomMarketMetadata>>())

/**
 * Params for market creating witg strong metadata typing.
 */

const signer = getBsrTestingSigner()

const main = async () => {
  const tx = await sdk.api.tx.balances.transfer(signer.address, 1000000000000000)
  const signerOptions: Partial<SignerOptions> = { assetId: { CampaignAsset: 1 } }
  const signedTx = await tx.signAsync(signer, signerOptions)
  const assetId = signedTx.assetId
  console.log(assetId.toJSON()) // -> { foreignAsset: 3 }

  process.exit(0)
}

main()
