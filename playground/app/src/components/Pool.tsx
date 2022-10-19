import { Button } from '@chakra-ui/react'
import { web3Enable } from '@polkadot/extension-dapp'
import { create, mainnetIndexer } from '@zeitgeistpm/sdk'
import React, { useEffect, useState } from 'react'

function useAsync<T>(fn: () => Promise<T>, deps?: Array<any>) {
  const [state, setState] = useState<T | undefined>()
  useEffect(() => {
    fn().then(setState)
  }, deps)
  return state
}

const Pool: React.FC = () => {
  useEffect(() => {
    web3Enable('sdkv2-test-app')
  }, [])

  const sdk = useAsync(() => {
    return create(mainnetIndexer())
  }, [])

  const data = useAsync(async () => {
    if (sdk) {
      const pools = await sdk.model.swaps.listPools({ where: { poolId_eq: 14 } })
      const assetIndex = await sdk.model.swaps.assetsIndex(pools)
      return { pools, assetIndex }
    }
  }, [sdk])

  return (
    <>
      {data && (
        <>
          {data.pools.map(pool => (
            <div>
              <div>{pool.poolId}</div>
              <div>{data.assetIndex[pool.poolId]?.liquidity.toString()}</div>
            </div>
          ))}
        </>
      )}
    </>
  )
}
export default Pool
