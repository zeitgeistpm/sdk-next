const { WsProvider } = require('@polkadot/api')
const yargs = require('yargs')
const fs = require('fs')

const { argv } = yargs
  .option('endpoint', {
    alias: 'e',
    description: 'http or ws endpoint from which to fetch metadata',
    type: 'string',
    demandOption: true,
    requiresArg: true,
    coerce: val => (Array.isArray(val) ? val.pop() : val),
  })
  .option('outfile', {
    alias: 'o',
    description: 'path to output file',
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
    console.log(
      `Writing metadata to file ${file}:\n${metadata.substring(0, 100)}...`,
    )
    fs.writeFileSync(file, metadata)
  })

  console.log('Metadata written.')
}

main()
