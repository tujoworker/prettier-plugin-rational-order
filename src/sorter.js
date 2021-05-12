const postcss = require('postcss')
const postcssScss = require('postcss-scss')
const sorting = require('postcss-sorting')
const createConfig = require('./config')

const config = createConfig()

module.exports = (content) => {
  const result = postcss({
    plugins: [sorting(config)],
  }).process(content, {
    from: undefined,
    syntax: postcssScss,
  })

  return result.css
}
