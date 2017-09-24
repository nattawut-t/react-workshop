const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = path.resolve;
const sourcePath = resolve(__dirname, 'src');

module.exports = {
  context: sourcePath,
  entry: [
    './index',
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  devServer: {
    // hot: true,
    host: '0.0.0.0',
    contentBase: resolve(__dirname, 'assets'),
    publicPath: '/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname + '/index.html'),
      filename: 'index.html',
    }),
  ],
};
