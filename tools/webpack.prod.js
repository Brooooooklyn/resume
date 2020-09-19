const { join, resolve } = require('path')
const { merge } = require('webpack-merge')
const webpack = require('webpack')
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
    allowlist: [
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
        use: ['happypack/loader?id=ts'],
        exclude: /node_modules/,
      },
    ],
  },

  mode: 'production',

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
        IS_PUBLIC: process.env.IS_PUBLIC === 'true',
      },
    }),
  ],
})
