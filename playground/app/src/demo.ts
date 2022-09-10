import ZDK, { Sdk, RpcContext, batterystation } from '@zeitgeistpm/sdk'
import { web3FromAddress } from '@polkadot/extension-dapp'

const address = 'dE2cVL9QAgh3MZEK3ZhPG5S2YSqZET8V1Qa36epaU4pQG4pd8'

const main = async () => {
  const sdk: Sdk<RpcContext> = await ZDK({
    ...batterystation(),
    provider: 'ws://127.0.0.1:9944',
  })

  const { signer } = await web3FromAddress(address)

  const [id, market] = await sdk.model.markets.create({
    signer: {
      address,
      signer,
    },
    scoringRule: 'Cpmm',
    creationType: 'Permissionless',
    disputeMechanism: { Authorized: address },
    marketType: { Scalar: [1, 2] },
    oracle: address,
    period: { Timestamp: [Date.now(), Date.now() + 60 * 60 * 24 * 1000 * 2] },
    metadata: {
      question: 'Testing Jørn',
      description: 'just a test market, can be removed',
      slug: 'yornaath_test',
      categories: [
        {
          name: 'yes',
          ticker: 'Y',
        },
        {
          name: 'no',
          ticker: 'N',
        },
      ],
    },
  })

  console.log(`created market ${id}`)
  console.log(market.toHuman())
}

main()
