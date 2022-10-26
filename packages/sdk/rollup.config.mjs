import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json' assert { type: 'json' }

export default {
  input: 'src/index.ts',
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
      dir: './dist',
      format: 'cjs',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].cjs',
    },
  ],
  plugins: [typescript(), commonjs({ exclude: 'node_modules' })],
}
