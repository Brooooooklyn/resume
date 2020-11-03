const { join } = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('./webpack.common')

module.exports = merge(config, {
  devtool: '#cheap-module-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: join(__dirname, 'dist'),
    // match the output path

    publicPath: '/',
    // match the output `publicPath`
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            happyPackMode: true,
            experimentalWatchApi: true,
            compiler: join(__dirname, 'ts.js'),
          },
        },
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
    }),
  ],
})
