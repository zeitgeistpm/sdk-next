import glob from 'glob'
import path from 'path'
import fs from 'fs'

/**
 * Generate exports fields in the package json for cjs and esm modules.
 * Creates on field for every folder in the src folder.
 */

const folders = glob.sync('./src/*')

const pckexports = folders.reduce(
  (exp, folder) => {
    const modulename = path.basename(folder)
    return {
      ...exp,
      [`./dist/${modulename}`]: {
        types: `./dist/${modulename}/index.d.ts`,
        import: `./dist/${modulename}/index.mjs`,
        default: `./dist/${modulename}/index.js`,
      },
    }
  },
  {
    './package.json': './package.json',
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

// "main": "./dist/index.js",
//   "module": "./dist/index.esm.js",
//   "types": "./dist/index.d.ts",
//   "exports": {
//     ".": {
//       "types": "./dist/index.d.ts",
//       "import": "./dist/index.mjs",
//       "default": "./dist/index.js"
//     },
//     "./package.json": "./package.json"
//   },
//   "files": [
//     "dist/*",
//     "src"
//   ],
