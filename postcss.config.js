const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = function() {
  const plugins = [
    postcssPresetEnv({
      stage: 0,
    }),
    autoprefixer(),
    require('postcss-nested'),
    cssnano(),
  ]

  return {
    plugins,
  }
}
