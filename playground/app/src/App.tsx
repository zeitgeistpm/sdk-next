import { useEffect, useState } from 'react'
import { batterystation, builder, Context, Sdk } from '@zeitgeistpm/sdk'
import { MarketList } from './components/MarketList'

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
    <>
      <MarketList sdk={sdk} />
    </>
  )
}
export default App
