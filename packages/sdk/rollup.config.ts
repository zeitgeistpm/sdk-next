import type { RollupOptions } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

const extensions = ['.js', '.ts']

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.mjs',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/cjs/index.js',
      format: 'commonjs',
      sourcemap: true,
    },
    // {
    //   file: 'lib/bundles/bundle.umd.js',
    //   format: 'umd',
    //   name: 'myLibrary',
    //   sourcemap: true,
    // },
    // {
    //   file: 'lib/bundles/bundle.umd.min.js',
    //   format: 'umd',
    //   name: 'myLibrary',
    //   plugins: [terser()],
    //   sourcemap: true,
    // },
  ],
  plugins: [resolve({ extensions, browser: true }), commonjs()],
} as RollupOptions
