import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/joinify.cjs.js',
      format: 'cjs'
    },
    {
      file: 'dist/joinify.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/joinify.umd.js',
      format: 'umd',
      name: 'Joinify'
    }
  ],
  plugins: [typescript(), resolve(), commonjs()]
};
