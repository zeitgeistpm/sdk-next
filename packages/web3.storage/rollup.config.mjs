import ts from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'

export default [
  {
    input: './src/index.ts',
    output: [
      {
        dir: './dist/esm/',
        format: 'esm',
        sourcemap: true,
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      ts({
        outDir: './dist/esm/',
        declaration: true,
        declarationMap: true,
      }),
      commonjs({ exclude: 'node_modules' }),
    ],
  },
  {
    input: './src/index.ts',
    output: [
      {
        dir: './dist/cjs/',
        format: 'esm',
        sourcemap: true,
        exports: 'named',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      ts({
        outDir: './dist/cjs/',
        declaration: true,
        declarationMap: true,
      }),
      commonjs({ exclude: 'node_modules' }),
    ],
  },
]
