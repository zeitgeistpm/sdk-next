/** @type {import('@graphql-codegen/cli').CodegenConfig} */
module.exports = {
  schema: 'https://processor.zeitgeist.pm/graphql', // 'https://processor.bsr.zeitgeist.pm/graphql',
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
