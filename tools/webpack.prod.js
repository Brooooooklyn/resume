const merge = require('webpack-merge')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./webpack.common')

config.entry.main = './src/build.tsx'
config.entry.vendor = [
  'react',
  'react-dom',
  'tslib'
]

module.exports = merge(config, {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [ 'cache-loader', 'happypack/loader?id=ts' ]
      },
      {
        test: /\.module\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader?modules&importLoaders=1', 'postcss-loader']
        })
      },
      {
        test: /^((?!\.module).)*css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader', 'postcss-loader']
        })
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles/style.[hash].css',
      allChunks: true,
      ignoreOrder: true
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        dead_code: true,
        warnings: false
      },
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
})
