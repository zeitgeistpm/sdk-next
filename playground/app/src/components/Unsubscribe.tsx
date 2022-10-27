import { Context, create$, isRpcSdk, mainnet, Sdk } from '@zeitgeistpm/sdk'
import React, { useEffect, useMemo, useState } from 'react'
import { Subscription } from 'rxjs'

export const Unsubscriber: React.FC = () => {
  const [sdk, setSdk] = useState<Sdk<Context>>()
  const [sub, setSub] = useState<Subscription>()
  const [sndsub, setsndSub] = useState<Subscription>()

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
    setsndSub(
      sdk$.subscribe(sdk => {
        if (isRpcSdk(sdk)) {
          sdk.context.provider.on('disconnected', () => {
            console.log('snd disconnected')
          })
        }
        setSdk(sdk)
      }),
    )
  }, [])

  return (
    <div>
      <button
        onClick={() => {
          sub?.unsubscribe()
        }}>
        Unsub
      </button>
      <button
        onClick={() => {
          sndsub?.unsubscribe()
        }}>
        Unsub
      </button>
    </div>
  )
}
