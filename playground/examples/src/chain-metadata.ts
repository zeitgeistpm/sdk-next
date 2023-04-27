import { batterystation, create, mainnet } from '@zeitgeistpm/sdk'

const sdk = await create(batterystation())

const chainMetadata = await sdk.model.chainMetadata.fetchTables()

console.log(chainMetadata.unwrap()?.errorTable)
