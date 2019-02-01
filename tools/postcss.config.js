const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const { browserslist } = require('../package')

module.exports = function(context) {
  const plugins = [
    autoprefixer({
      browsers: browserslist,
    }),
  ]

  if (process.env.NODE_ENV === 'production') {
    plugins.push(cssnano())
  }

  return {
    from: context.from,
    plugins,
    to: context.to,
  }
}
