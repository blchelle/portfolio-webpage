const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist'),
	},
	devServer: {
		contentBase: path.join(__dirname, '../dist'),
		compress: true,
		port: 8000,
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'img',
					},
				},
			},
		],
	},
});
