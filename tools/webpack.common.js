const { resolve } = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const webpack = require('webpack')

const svgoConfig = require('./svgo.config')

const config = {
  entry: {
    main: './src/index.tsx',
  },
  output: {
    filename: 'js/[name].js',

    path: resolve(process.cwd(), 'dist'),

    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig,
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        PHONE: `"${process.env.PHONE || 'xxxxxxxxxxx'}"`,
        WECHAT: `"${process.env.WECHAT || 'xxxxxxxx'}"`,
      },
    }),
  ],
}

module.exports = config
