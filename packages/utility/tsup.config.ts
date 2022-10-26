import { defineConfig } from 'tsup'
import glob from 'glob'

const folders = glob.sync('./src/**/*.ts')

export default defineConfig({
  entry: folders,
  dts: true,
  sourcemap: true,
  format: ['cjs', 'esm'],
  ignoreWatch: ['*.test.ts'],
  target: 'node16',
  clean: true,
})
