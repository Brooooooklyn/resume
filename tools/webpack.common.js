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
  },
  output: {
    filename: 'js/[name].[hash].js',

    path: resolve(process.cwd(), 'dist'),

    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(svg|cur)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: ['file-loader'],
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
    extensions: ['.tsx', '.ts', '.js', '.css'],
  },

  node: {
    process: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      inject: true,
    }),

    new HappyPack({
      id: 'ts',
      loaders: [
        {
          path: 'ts-loader',
          query: {
            transpileOnly: true,
            happyPackMode: true,
          },
        },
      ],
      threadPool: happyThreadPool,
    }),

    new HappyPack({
      id: 'moduleCss',
      loaders: [
        {
          path: 'style-loader',
        },
        {
          path: 'css-loader',
          query: {
            modules: true,
            camelCase: true,
            import: true,
            importLoaders: 1,
          },
        },
        {
          path: 'postcss-loader',
        },
      ],
      threadPool: happyThreadPool,
    }),

    new HappyPack({
      id: 'css',
      loaders: [
        {
          path: 'style-loader',
        },
        {
          path: 'css-loader',
        },
        {
          path: 'postcss-loader',
        },
      ],
      threadPool: happyThreadPool,
    }),

    new ForkTsCheckerWebpackPlugin(),
  ],
}

module.exports = config
