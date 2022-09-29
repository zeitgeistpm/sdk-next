import { web3Enable } from '@polkadot/extension-dapp'
import { batterystation, builder, Context, Sdk } from '@zeitgeistpm/sdk'
import { useEffect, useState } from 'react'
import { MarketComponent } from './components/Market'
import { MarketList } from './components/MarketList'

const App: React.FC = () => {
  const [sdk, setSdk] = useState<Partial<Sdk<Context>>>()

  useEffect(() => {
    web3Enable('sdkv2-test-app')
    builder(batterystation()).subscribe(sdk => {
      setSdk(sdk)
    })
  }, [])

  return (
    <div>
      {sdk && (
        <>
          <MarketComponent sdk={sdk} marketId={467} />
          <MarketList sdk={sdk} />
        </>
      )}
    </div>
  )
}
export default App
