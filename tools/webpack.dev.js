const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('./webpack.common')

module.exports = merge(config, {
  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: resolve(__dirname, 'dist'),
    // match the output path

    publicPath: '/',
    // match the output `publicPath`
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['cache-loader', 'happypack/loader?id=ts'],
        exclude: /node_modules/,
      },
      {
        test: /\.module\.css$/,
        loaders: ['cache-loader', 'happypack/loader?id=moduleCss'],
      },
      {
        test: /^((?!\.module).)*css$/,
        loaders: ['cache-loader', 'happypack/loader?id=css'],
      },
    ],
  },

  plugins: [
    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
    // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
  ],
})
