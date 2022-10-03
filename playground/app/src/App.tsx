import { useEffect, useState } from 'react'
import { batterystation, builder, Context, Sdk } from '@zeitgeistpm/sdk'
import { MarketList } from './components/MarketList'
import CustomStorage from './components/CustomStorage'
import { ChakraProvider } from '@chakra-ui/react'

const App: React.FC = () => {
  const [sdk, setSdk] = useState<Partial<Sdk<Context>>>({})

  useEffect(() => {
    /**
     * Sdk can be either RpcSdk, IndexedSdk or Both.
     * The Market list accptes both.
     */
    builder(batterystation()).subscribe(sdk => {
      setSdk(sdk)
    })
  }, [])

  return (
    <ChakraProvider>
      <CustomStorage />
      <MarketList sdk={sdk} />
    </ChakraProvider>
  )
}
export default App
