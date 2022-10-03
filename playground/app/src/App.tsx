import { web3Enable } from '@polkadot/extension-dapp'
import { batterystation, builder, Context, Sdk } from '@zeitgeistpm/sdk'
import { useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { MarketComponent } from './components/Market'
import { MarketList } from './components/MarketList'
import CustomStorage from './components/CustomStorage'

const App: React.FC = () => {
  const [sdk, setSdk] = useState<Partial<Sdk<Context>>>()

  useEffect(() => {
    web3Enable('sdkv2-test-app')
    builder(batterystation()).subscribe(sdk => {
      setSdk(sdk)
    })
  }, [])

  return (
    <ChakraProvider>
      <div>
        {sdk && (
          <>
            <CustomStorage />
            {/* <MarketComponent sdk={sdk} marketId={0} /> */}
            {/* <MarketList sdk={sdk}></MarketList> */}
          </>
        )}
      </div>
    </ChakraProvider>
  )
}
export default App
