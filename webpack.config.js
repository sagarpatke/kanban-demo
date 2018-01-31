const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './public/index.html',
	inject: 'body'
});

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/},
			{test: /\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/}
		]
	},
	plugins: [HtmlWebpackPluginConfig],
	resolve: {
		extensions: ['.js', '.jsx']
	}
};
