const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const { multiple } = require('webpack-merge');

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: 'bundle.[hash].js',
		path: path.resolve(__dirname, '../dist'),
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.svg$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'img',
					},
				},
			},
			{
				test: /\.(png|jpe?g)$/i,
				loader: 'file-loader?name=img/[name].[hash].webp!webp-loader?{quality: 80}',
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: ['@babel/plugin-proposal-object-rest-spread'],
					},
				},
			},
		],
	},
});
