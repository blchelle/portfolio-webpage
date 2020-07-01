const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, '../src/index.js'),
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../src/index.html'),
		}),
		new CleanWebpackPlugin(),
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
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'fonts',
					},
				},
			},
			{
				test: /\.pdf/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'resume.pdf',
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
