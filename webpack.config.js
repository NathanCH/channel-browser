var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'build');

var config = {
	entry: APP_DIR + '/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				include: APP_DIR,
				loaders: [
					'style', 
					'css',
					'sass'
				]
			},
			{
				test: /\.jsx$/,
				exclude: /(node_modules)/,
				include: APP_DIR,
				loader: 'babel',
				query: {
					presets: [
						'react',
						'es2015'
					]
				}
			}
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};

module.exports = config;