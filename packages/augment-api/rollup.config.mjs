import typescript from 'rollup-plugin-typescript2'
import commonjs from '@rollup/plugin-commonjs'
import glob from 'glob'

const folders = glob.sync('./src/**/*.ts')

export default {
  input: folders,
  output: [
    {
      dir: './dist/',
      format: 'cjs',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  plugins: [typescript(), commonjs({ exclude: 'node_modules' })],
}
