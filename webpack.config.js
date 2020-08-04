/*
 * @Author: fang.yang
 * @Date: 2019-05-14 21:51:20
 * @Description [webpack config]
 */
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const resolve = dir => path.join(__dirname, '..', dir);


module.exports = ({ mode } = { mode: 'development' }) => {
	return webpackMerge(
		{
			mode,
			entry: {
				'tsSeed': './src/index.ts'
			},
			devtool: 'cheap-module-eval-source-map',
			resolve: {
				extensions: ['ts']
			},
			resolveLoader: {
				moduleExtensions: ['-loader']
			},
			module: {
				rules: [
					{
						test: /\.ts$/,
						loader: 'ts-loader',
						include: [resolve('src')],
					}
				]
			},
			plugins: [
				new webpack.ProgressPlugin()
			]
		}
	)
}
