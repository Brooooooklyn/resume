const { resolve } = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const os = require('os')
const HappyPack = require('happypack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

const NODE_ENV = process.env.NODE_ENV

const config = {
  entry: {
    main: './src/index.tsx',
    vendor: [
      'react-hot-loader/patch',
      // activate HMR for React

      'webpack-dev-server/client?http://localhost:8080',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
      'react',
      'react-dom',
      'react-hot-loader',
      'tslib'
    ],
  },
  output: {
    filename: 'js/[name].[hash].js',

    path: resolve(process.cwd(), 'dist'),

    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [ 'cache-loader', 'react-hot-loader/webpack', 'happypack/loader?id=ts' ],
        exclude: /node_modules/
      },
      {
        test: /\.(svg|cur)$/,
        use: [ 'file-loader' ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [ 'file-loader' ]
      },
      {
        test: /\.md$/,
        use: [ 'raw-loader' ]
      }
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css']
  },

  node: {
    process: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true
    }),

    new HappyPack({
      id: 'ts',
      loaders: [ 'ts-loader?transpileOnly=true&happyPackMode=true' ],
      threadPool: happyThreadPool
    }),

    new HappyPack({
      id: 'moduleCss',
      loaders: [ 'style-loader', 'css-loader?modules&importLoaders=1', 'postcss-loader' ],
      threadPool: happyThreadPool
    }),

    new HappyPack({
      id: 'css',
      loaders: [ 'style-loader', 'css-loader', 'postcss-loader'],
      threadPool: happyThreadPool
    }),

    new ForkTsCheckerWebpackPlugin()

  ],
}

module.exports = config
