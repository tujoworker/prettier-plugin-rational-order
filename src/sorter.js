const postcss = require('postcss')
const postcssScss = require('postcss-scss')
const sorting = require('postcss-sorting')
const createConfig = require('./config')

const emptyLineBefore = false
const config = createConfig({ emptyLineBefore })

module.exports = (content) => {
  const result = postcss({
    plugins: [sorting(config)],
  }).process(content, {
    syntax: postcssScss,
  })

  return result.css
}
