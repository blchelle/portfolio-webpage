const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: 'bundle.[contentHash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [new CleanWebpackPlugin()],
});
