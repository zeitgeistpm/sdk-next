import React, { useEffect } from 'react'
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp'
import { useQuery } from 'react-query'
import { Select } from '@chakra-ui/react'

export const Accounts = (props: { onChange: (address: string) => void }) => {
  useEffect(() => {
    web3Enable('example')
  }, [])

  const { data: accounts } = useQuery('accounts', async () => {
    return web3Accounts()
  })

  return (
    <Select
      onChange={e => {
        props.onChange(e.target.value)
      }}>
      {accounts?.map(account => (
        <option key={account.address} value={account.address}>
          {account.address}
        </option>
      ))}
    </Select>
  )
}
