import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import CustomStorage from './components/CustomStorage'
import Pool from './components/Pool'

const App: React.FC = () => {
  // const [sdk, setSdk] = useState<Partial<Sdk<Context>>>({})

  // useEffect(() => {
  //   /**
  //    * Sdk can be either RpcSdk, IndexedSdk or Both.
  //    * The Market list accptes both.
  //    */
  //   builder(batterystation()).subscribe(sdk => {
  //     setSdk(sdk)
  //   })
  // }, [])

  return (
    <ChakraProvider>
      {/* <CustomStorage /> */}
      <Pool />
    </ChakraProvider>
  )
}
export default App
