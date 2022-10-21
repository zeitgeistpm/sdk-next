import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import glob from 'glob'

const folders = glob.sync('./src/**/*.ts')

export default {
  input: folders,
  output: [
    {
      dir: './dist/esm/',
      format: 'esm',
      sourcemap: true,
      exports: 'named',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    {
      dir: './dist/cjs/',
      format: 'cjs',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [typescript(), commonjs({ exclude: 'node_modules' })],
  external: ['rollup.config.ts'],
}
