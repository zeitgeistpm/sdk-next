import { batterystation, create, isIndexedSdk } from '@zeitgeistpm/sdk'

async function main(marketId: number) {
  const sdk = await create(batterystation())

  if (isIndexedSdk(sdk)) {
    const markets = sdk.model.markets.list({
      where: {
        tags_containsAll: ['Sport'],
        creator_eq: 'some address',
        status_eq: 'Active',
      },
    })
  }
}

main(367)
