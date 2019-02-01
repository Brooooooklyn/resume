const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcssPresetEnv = require('postcss-preset-env')
const { browserslist } = require('../package')

module.exports = function() {
  const plugins = [
    postcssPresetEnv({
      stage: 0,
    }),
    autoprefixer({
      browsers: browserslist,
    }),
    require('postcss-nested'),
    cssnano(),
  ]

  return {
    plugins,
  }
}
