const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: 'bundle.[contentHash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'img',
					},
				},
			},
		],
	},
});
