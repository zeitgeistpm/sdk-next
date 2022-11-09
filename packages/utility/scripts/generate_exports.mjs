import glob from 'glob'
import path from 'path'
import fs from 'fs'

/**
 * Generate exports fields in the package json for cjs and esm modules.
 * Creates on field for every folder in the src folder.
 */

const folders = glob.sync('./src/*')

const pckexports = folders.reduce((exp, folder) => {
  const modulename = path.basename(folder)
  return {
    ...exp,
    [`./dist/${modulename}`]: {
      types: `./dist/${modulename}/index.d.ts`,
      require: `./dist/${modulename}/index.cjs`,
      import: `./dist/${modulename}/index.mjs`,
    },
  }
}, {})

const pckjson = JSON.parse(fs.readFileSync('./package.json'))

fs.writeFileSync(
  './package.json',
  JSON.stringify(
    {
      ...pckjson,
      exports: pckexports,
    },
    undefined,
    2,
  ),
)
