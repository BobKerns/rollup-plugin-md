import pkg from './package.json' assert { type: 'json' };
var external = Object.keys( pkg.dependencies );

export default {
	input: 'src/index.js',
	output: [
		{
			format: 'cjs',
			file: pkg['main'],
			sourcemap: true,
			exports: 'auto'
		},
		{
			format: 'es',
			file: pkg['jsnext:main'],
			sourcemap: true
		}
	],
	external: external
};
