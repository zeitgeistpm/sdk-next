import { options } from "@zeitgeistpm/api";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import * as Indexer from "@zeitgeistpm/indexer";
import {
  AssetOrderByInput,
  MarketOrderByInput,
  PoolOrderByInput,
} from "@zeitgeistpm/indexer";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const provider = new WsProvider("wss://bsr.zeitgeist.pm");
    const api = ApiPromise.create(options({ provider }));
    const indexer = Indexer.create({
      endpoint: "https://processor.zeitgeist.pm/graphql",
    });

    indexer.markets({
      order: MarketOrderByInput.IdAsc,
      where: {},
    });

    indexer.assets({
      order: AssetOrderByInput.IdAsc,
      where: {},
    });

    indexer.pools({
      order: PoolOrderByInput.CreatedAtAsc,
      where: {
        poolId_eq: 1,
      },
    });

    api.then((api) => {
      api.query.predictionMarkets.disputes(null).then((markets) => {
        console.log(markets.toHuman());
      });
    });
  }, []);

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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
