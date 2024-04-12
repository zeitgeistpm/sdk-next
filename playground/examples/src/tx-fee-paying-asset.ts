import { create, batterystation, MetadataStorage } from '@zeitgeistpm/sdk'
import { getBsrTestingSigner } from './getSigner'
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
const sdk = await create(batterystation<MetadataStorage<CustomMarketMetadata>>())

/**
 * Params for market creating witg strong metadata typing.
 */

const signer = getBsrTestingSigner()

const main = async () => {
  const tx = await sdk.api.tx.balances.transfer(signer.address, 1000000000000000)
  const signedTx = await tx.signAsync(signer, { assetId: { ForeignAsset: 3 } })
  const assetId = signedTx.assetId
  console.log(assetId.toJSON()) // { foreignAsset: 3 }

  process.exit(0)
}

main()
