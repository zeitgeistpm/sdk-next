import glob from 'glob'
import path from 'path'
import fs from 'fs'

const folders = glob.sync('./src/*')

const pckexports = folders.reduce(
  (exp, folder) => {
    const modulename = path.basename(folder)
    return {
      ...exp,
      [`./dist/${modulename}`]: {
        types: `./dist/${modulename}/index.d.ts`,
        require: `./dist/${modulename}/index.cjs`,
        import: `./dist/${modulename}/index.mjs`,
      },
    }
  },
  {
    // './dist/*': {
    //   require: './dist/cjs/*',
    //   import: './dist/esm/*',
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
