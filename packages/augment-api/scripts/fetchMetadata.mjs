import { WsProvider } from '@polkadot/api'
import yargs from 'yargs'
import * as fs from 'fs'
console.log(process.argv.slice(2))
const { argv } = yargs(process.argv.slice(2))
  .option('endpoint', {
    alias: 'e',
    description: 'endpoint to fetch from',
    type: 'string',
    demandOption: true,
    requiresArg: true,
    coerce: val => (Array.isArray(val) ? val.pop() : val),
  })
  .option('outfile', {
    alias: 'o',
    description: 'output file path',
    type: 'string',
    demandOption: true,
    requiresArg: true,
  })
  .help()
  .alias('help', 'h')

async function main() {
  const provider = new WsProvider(argv.endpoint, false)
  await provider.connect()
  await provider.isReady
  const result = await provider.send('state_getMetadata')

  const metadata = JSON.stringify({ result })

  const outfile = Array.isArray(argv.outfile) ? argv.outfile : [argv.outfile]

  outfile.forEach(file => {
    console.log(`Writing metadata to file ${file}:\n${metadata.substring(0, 100)}...`)
    fs.writeFileSync(file, metadata)
  })

  console.log('Metadata written.')
  process.exit()
}

main()
