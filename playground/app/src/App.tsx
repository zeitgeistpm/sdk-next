import { useEffect } from 'react'
import * as Sdk from '@zeitgeistpm/sdk'
import { batterystationIndexer, batterystationRpc } from '@zeitgeistpm/sdk'
import { IPFS } from '@zeitgeistpm/web3.storage'
import { throws } from '@zeitgeistpm/utility/dist/error'

import './App.css'
import reactLogo from './assets/react.svg'

function App() {
  const storage = IPFS.storage<{ texts: string }>({
    node: { url: 'http://ipfs.zeitgeist.pm:5001' },
    cluster: {
      url: 'https://ipfs-cluster.zeitgeist.pm',
      auth: {
        username: 'zeitgeist',
        password: '5ZpmQl*rWn%Z',
      },
    },
  })

  useEffect(() => {
    ;(async () => {
      const indexed = await Sdk.create({
        ...batterystationIndexer(),
        debug: true,
      })

      const rpc = await Sdk.create({ ...batterystationRpc(), debug: true })

      const markets = await indexed.model.markets.list({
        offset: 10,
        limit: 99,
      })

      const rpcmarkets = await rpc.model.markets.list({
        offset: 10,
        limit: 99,
      })

      console.log(markets, rpcmarkets)
    })()
  }, [])

  const onClickIpfstest = async () => {
    const cid = (await storage.put({ texts: 'some data' })).unrightOr(throws)
    const data = (await storage.get(cid)).unrightOr(throws)
    console.log('read data', data)
    await storage.del(cid)
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onClickIpfstest}>test ipfs</button>
      </div>
    </div>
  )
}

export default App
