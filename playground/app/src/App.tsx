import * as Sdk from '@zeitgeistpm/sdk'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
  AssetOrderByInput,
  MarketOrderByInput,
  PoolOrderByInput,
} from '@zeitgeistpm/indexer'
import { IPFS, JsonCodec, compose } from '@zeitgeistpm/web3.storage'
import { batteryStation } from '@zeitgeistpm/sdk'

function App() {
  const storage = IPFS.create<{}>({
    node: { url: 'http://ipfs.zeitgeist.pm:5001' },
    cluster: {
      url: 'https://ipfs-cluster.zeitgeist.pm',
      auth: {
        username: 'zeitgeist',
        password: '5ZpmQl*rWn%Z',
      },
    },
  })

  const codec = compose<string, { data: string }, { data: number }>(JsonCodec(), {
    decode: ({ data }) => ({ data: data.toString() }),
    encode: ({ data }) => ({ data: parseInt(data) }),
  })

  useEffect(() => {
    console.log(codec.encode(`{ "data": 1 }`))
    console.log(codec.decode({ data: 1 }))
  }, [])

  useEffect(() => {
    ;(async () => {
      const sdk = Sdk.create(await batteryStation())
      const data = await Promise.all([
        sdk.indexer.markets({
          order: MarketOrderByInput.IdAsc,
          where: {},
        }),
        sdk.indexer.assets({
          order: AssetOrderByInput.IdAsc,
          where: {},
        }),
        sdk.indexer.pools({
          order: PoolOrderByInput.CreatedAtAsc,
          where: {
            poolId_eq: 1,
          },
        }),
      ])
      console.log(data)
    })()
  }, [])

  const onClickIpfstest = async () => {
    const cid = await storage.put({ text: 'some data' })
    const data = await storage.get(cid)
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
