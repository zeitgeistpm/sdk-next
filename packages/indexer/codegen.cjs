const endpoint = process.argv.includes('--bsr')
  ? 'https://processor.zeitgeist.pm/graphql' //'https://zeitgeist-squid-bsr.stellate.sh/'
  : process.argv.includes('--mainnet')
  ? 'https://processor.rpc-0.zeitgeist.pm/graphql'
  : null

if (!endpoint) {
  throw new Error('Please specify --bsr or --mainnet when running gql codegen')
}

console.log('CODEGEN: endpoint: ', endpoint)

/** @type {import('@graphql-codegen/cli').CodegenConfig} */
module.exports = {
  schema: endpoint,
  documents: './**/*.graphql',
  generates: {
    './src/graphql/sdk.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
    },
  },

  config: {
    scalars: {
      Date: 'string',
      ObjectID: 'string',
      timestamptz: 'string',
      uuid: 'string',
    },
  },
}
