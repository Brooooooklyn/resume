const { join } = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('./webpack.common')

module.exports = merge(config, {
  devServer: {
    hot: true,
    historyApiFallback: true,
  },

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
    }),
  ],
})
