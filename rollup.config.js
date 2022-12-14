import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import vue from 'rollup-plugin-vue2';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      vue({
        preprocessStyles: true,
      }),
      postcss(),
    ],
  },
  // {
  //   input: 'dist/esm/index.d.ts',
  //   output: [{ file: packageJson.types, format: 'esm' }],
  //   plugins: [
  //     dts(),
  //   ],
  // },
];
