const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const { HotModuleReplacementPlugin, NamedModulesPlugin } = webpack
const { resolve } = path

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    app: './src/index',
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    contentBase: resolve(__dirname, 'assets'),
    publicPath: '/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: resolve(__dirname + '/index.html'),
      filename: 'index.html',
    }),
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
  ],
}
