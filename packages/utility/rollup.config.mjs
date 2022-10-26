import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import glob from 'glob'

const folders = glob.sync('./src/**/*.ts')

export default {
  input: folders,
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
