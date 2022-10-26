import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import glob from 'glob'
import pkg from './package.json' assert { type: 'json' }

const folders = glob.sync('./src/**/*.ts')

export default {
  input: folders,
  external: [
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.dependencies || {}),
  ],
  output: [
    {
      dir: './dist',
      format: 'esm',
      sourcemap: true,
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].mjs',
    },
    {
      dir: './dist/cjs/',
      format: 'cjs',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].cjs',
    },
  ],
  plugins: [typescript(), commonjs({ exclude: 'node_modules' })],
}
