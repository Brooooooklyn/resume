module.exports = {
  plugins: [
    require('postcss-smart-import')(),
    require('autoprefixer')({
      browsers: 'last 2 version',
      flexbox: 'no-2009'
    }),
    require('postcss-nested')()
  ]
}
