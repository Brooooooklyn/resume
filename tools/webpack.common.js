const { resolve, join } = require('path')
const os = require('os')
const HappyPack = require('happypack')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })

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
    new HappyPack({
      id: 'ts',
      loaders: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            happyPackMode: true,
            experimentalWatchApi: true,
            compiler: join(__dirname, 'ts.js'),
          },
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
