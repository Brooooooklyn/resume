const { join } = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./webpack.common')

module.exports = merge(config, {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['cache-loader', 'happypack/loader?id=ts'],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              modules: false,
              import: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: join(__dirname, 'postcss.config.js'),
              },
            },
          },
        ],
      },
    ],
  },

  mode: 'production',

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].[chunkhash:8].css`,
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ],
})
