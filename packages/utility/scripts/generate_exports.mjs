import glob from 'glob'
import path from 'path'
import fs from 'fs'

const folders = glob.sync('./src/*')

const pckexports = folders.reduce(
  (exp, folder) => {
    const modulename = path.basename(folder)
    return {
      ...exp,
      [`./${modulename}`]: {
        types: `./dist/esm/${modulename}/index.d.ts`,
        require: `./dist/cjs/${modulename}/index.js`,
        import: `./dist/esm/${modulename}/index.js`,
      },
    }
  },
  {
    // './*': {
    //   require: './dist/cjs/',
    //   import: './dist/esm/',
    // },
  },
)

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
