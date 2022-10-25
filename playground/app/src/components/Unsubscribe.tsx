import { Context, create$, isRpcSdk, mainnet, Sdk } from '@zeitgeistpm/sdk'
import React, { useEffect, useMemo, useState } from 'react'
import { Subscription } from 'rxjs'

export const Unsubscriber: React.FC = () => {
  const [sdk, setSdk] = useState<Sdk<Context>>()
  const [sub, setSub] = useState<Subscription>()

  useEffect(() => {
    const sdk$ = create$(mainnet())
    setSub(
      sdk$.subscribe(sdk => {
        if (isRpcSdk(sdk)) {
          sdk.context.provider.on('disconnected', () => {
            console.log('disconnected')
          })
        }
        setSdk(sdk)
      }),
    )
  }, [])

  useEffect(() => {
    console.log('sdk', sdk)
  }, [sdk])

  return (
    <div>
      <button
        onClick={() => {
          console.log(sub)
          sub?.unsubscribe()
        }}>
        Unsub
      </button>
    </div>
  )
}
