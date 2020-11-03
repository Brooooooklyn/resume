const ts = require('typescript')
const { createEmotionPlugin } = require('emotion-ts-plugin')

const transpileModule = ts.transpileModule

const isProd = process.env.NODE_ENV === 'production'

const emotionPlugin = createEmotionPlugin({
  sourcemap: !isProd,
  autoInject: false,
})
const plugins = [emotionPlugin]

ts.transpileModule = function (input, transpileOptions) {
  if (transpileOptions.transformers) {
    const before = transpileOptions.transformers.before || []
    transpileOptions.transformers.before = before.concat(plugins)
  } else {
    transpileOptions.transformers = {
      before: plugins,
    }
  }

  return transpileModule(input, transpileOptions)
}

module.exports = ts
