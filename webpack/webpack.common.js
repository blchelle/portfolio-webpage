const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, '../src/index.js'),
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../src/index.html'),
			favicon: path.resolve(__dirname, '../src/favicon.ico'),
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
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts',
					},
				},
			},
			{
				test: /\.(png|jpe?g)$/i,
				loader: 'file-loader?name=img/[name].[hash].[ext]?{quality: 90}',
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
