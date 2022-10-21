import glob from 'glob'
import path from 'path'

const folders = glob.sync('./src/*')

console.log('generate exports'.toUpperCase())
console.log(folders)
console.log('generate exports'.toUpperCase())

const pckexports = folders.reduce((exp, folder) => {
  const modulename = path.basename(folder)
  return {
    ...exp,
    [`./${modulename}`]: {
      types: `./dist/esm/${modulename}/index.d.ts`,
      require: `./dist/cjs/${modulename}/index.js`,
      default: `./dist/cjs/${modulename}/index.js`,
    },
  }
}, {})

console.log(pckexports)

a = {
  '.': {
    types: './dist/esm/index.d.ts',
    require: './dist/cjs/index.js',
    default: './dist/esm/index.js',
  },
}
