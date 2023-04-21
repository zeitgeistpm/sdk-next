import { createStorage } from '@zeitgeistpm/sdk'
import { IPFS } from '@zeitgeistpm/web3.storage'
import * as FS from 'fs'
import * as Path from 'path'

const storage = createStorage(
  IPFS.storage({
    node: { url: 'http://ipfs.zeitgeist.pm:5001' },
  }),
)

const cwd = process.cwd()
const imageReadPath = Path.join(cwd, './playground/examples/src/web3-storage/img.png')
const image = new Blob([FS.readFileSync(imageReadPath)])

const cid = await storage.files.put(image)

const data = await storage.files.get(cid)

const imageWritePath = Path.join(cwd, './playground/examples/src/web3-storage/img2.png')

data.map(async data => {
  FS.writeFileSync(imageWritePath, Buffer.from(await data.arrayBuffer()))
})

console.log(data)
