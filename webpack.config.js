const { resolve } = require('path')
const webpack = require('webpack')
const os = require('os')
const HappyPack = require('happypack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
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
    // the entry point of our app
  },
  output: {
    filename: '[name].[hash].js',
    // the output bundle

    path: resolve(__dirname, 'dist'),

    publicPath: '/',
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: 'inline-source-map',

  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: resolve(__dirname, 'dist'),
    // match the output path

    publicPath: '/'
    // match the output `publicPath`
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [ 'cache-loader', 'react-hot-loader/webpack', 'happypack/loader?id=ts' ],
        exclude: /node_modules/
      },
      {
        test: /\.module\.css$/,
        loaders: [
          'cache-loader',
          'happypack/loader?id=moduleCss'
        ]
      },
      {
        test: /^((?!\.module).)*css$/,
        loaders: [
          'cache-loader',
          'happypack/loader?id=css'
        ]
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
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new ExtractTextPlugin('./static/style.[hash].css'),
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[hash].js',
      minChunks: NODE_ENV === 'production' ? Infinity : null
    }),

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

if (NODE_ENV === 'production') {
  const { plugins, entry } = config

  entry.main = './src/build.tsx'

  entry.vendor = [
    'react',
    'react-dom',
    'tslib'
  ]

  plugins.push(
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
  )
}

module.exports = config
