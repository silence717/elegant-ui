/*
 * @Author: fang.yang
 * @Date: 2019-05-14 22:01:15
 * @Description [webpack development config]
 */
const webpack = require('webpack');

 module.exports = () => ({
	module: {
		rules: [
			{
				test: /\.less$/,
				use: ['style', 'css', 'less']
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
 });
