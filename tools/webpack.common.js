const { resolve } = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

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
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
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

  node: {
    process: true,
  },

  plugins: [new ForkTsCheckerWebpackPlugin()],
}

module.exports = config
