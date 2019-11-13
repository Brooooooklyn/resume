const { join, resolve } = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const nodeExternals = require('webpack-node-externals')
const config = require('./webpack.common')

module.exports = merge(config, {
  entry: {
    main: './server.tsx',
  },
  output: {
    filename: 'render.js',
    path: resolve(process.cwd(), 'lambda'),
    publicPath: '/',
  },
  externals: nodeExternals({
    modulesDir: join(__dirname, '..', 'node_modules'),
    whitelist: [
      /\.(eot|woff|woff2|ttf|otf)$/,
      /\.(svg|png|jpg|jpeg|gif|ico|webm)$/,
      /\.(mp4|mp3|ogg|swf|webp)$/,
      /\.(css|scss|sass|less|styl)$/,
    ],
  }),
  target: 'node',
  node: false,
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['cache-loader', 'happypack/loader?id=ts'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
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

  plugins: [
    new MiniCssExtractPlugin({
      filename: `[name].[chunkhash:8].css`,
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        IS_PUBLIC: process.env.IS_PUBLIC === 'true',
      },
    }),
  ],
})
