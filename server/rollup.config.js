// @flow
import babel from 'rollup-plugin-babel';
import raw from 'rollup-plugin-string';

export default {
  entry: 'src/index.js',
  plugins: [raw({ include: '**/*.gql' }), babel()],
  format: 'cjs',
};
