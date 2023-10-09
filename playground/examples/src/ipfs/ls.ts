import * as IPFSHTTPClient from 'ipfs-http-client'
import { u8aConcat, u8aToString } from '@polkadot/util/u8a'

const ipfs = IPFSHTTPClient.create({ url: 'https://ipfs.zeitgeist.pm' })

const read = async (node: IPFSHTTPClient.IPFSHTTPClient, cid: IPFSHTTPClient.CID) => {
  let content: Uint8Array[] = []

  for await (const chunk of node.cat(cid)) {
    content = [...content, chunk]
  }

  return content
}

const pins = await ipfs.pin.ls()

let i = 0
for await (const { cid, type } of pins) {
  i++
  console.log(i)
  // console.log({ cid, type })
  // // const stat = await ipfs.dag.get(cid)
  // // console.log(u8aToString(stat.value))
  // const data = await read(ipfs, cid)
  // const content = u8aConcat(...data)
  // // console.log(content)
  // console.log(u8aToString(content))
}
