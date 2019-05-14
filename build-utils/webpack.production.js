/*
 * @Author: fang.yang
 * @Date: 2019-05-14 22:15:20
 * @Description [webpack production config]
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = () => ({
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [MiniCssExtractPlugin.loader, 'css', 'less']
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin()
	]
});
