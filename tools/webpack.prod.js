const merge = require('webpack-merge')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./webpack.common')

config.entry.main = './src/build.tsx'
config.entry.vendor = ['react', 'react-dom', 'tslib']

module.exports = merge(config, {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['cache-loader', 'happypack/loader?id=ts'],
      },
      {
        test: /\.module\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              modules: true,
              minimize: true,
              camelCase: true,
              import: true,
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /^((?!\.module).)*css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              modules: false,
              minimize: true,
              camelCase: true,
              import: true,
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },

  mode: 'production',

  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].[chunkhash:8].css`,
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
})
