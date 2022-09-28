export default () => {
  return <></>
}
// ------------------------------------------------------------
// const createMarket = async () => {
//   if (!isRpcSdk(sdk)) return

//   const address = 'dE2cVL9QAgh3MZEK3ZhPG5S2YSqZET8V1Qa36epaU4pQG4pd8'
//   const { signer } = await web3FromAddress(address)

//   const baseWeight = (1 / 2) * 10 * 10 ** 10

//   const params: CreateMarketWithPoolParams = {
//     signer: {
//       address,
//       signer,
//     },
//     disputeMechanism: { Authorized: address },
//     marketType: { Scalar: [1, 2] },
//     oracle: address,
//     period: { Timestamp: [Date.now(), Date.now() + 60 * 60 * 24 * 1000 * 2] },
//     metadata: {
//       question: 'Testing Jørn',
//       description: 'just a test market, can be removed',
//       slug: 'yornaath_test',
//       categories: [
//         {
//           name: 'yes',
//           ticker: 'Y',
//         },
//         {
//           name: 'no',
//           ticker: 'N',
//         },
//       ],
//     },
//     pool: {
//       amount: `${300 * 10 ** 10}`,
//       swapFee: `${1000}`,
//       weights: [`${baseWeight}`, `${baseWeight}`],
//     },
//   }

//   const result = await sdk.model.markets.create(params)

//   const {
//     market: [marketId, market],
//     pool: [poolId, pool],
//   } = result.extract().unrightOr(throws)

//   console.log(`created: market ${marketId}`, market.toHuman())
//   console.log(`created: pool ${poolId}`, pool.toHuman())
// }
