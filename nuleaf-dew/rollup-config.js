import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';


export default {
  entry: 'dist/app/main-aot.js',
  dest: 'aot/dist/build.js',
  sourceMap: false,
  format: 'iife',
  onwarn: function(warning) {
    if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }
    if ( warning.indexOf("The 'this' keyword is equivalent to 'undefined'") > -1 ) { return; }
    console.warn( warning.message );
  },
  plugins: [
    nodeResolve({jsnext: true, module: true}),
    commonjs({
      include: [
        'node_modules/rxjs/**'
      ]
    }),
    uglify()
  ]
};
