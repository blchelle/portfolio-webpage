const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							implementation: require('node-sass'),
						},
					},
				],
			},
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
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
		],
	},
};
