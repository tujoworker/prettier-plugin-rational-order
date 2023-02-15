import postcss from 'postcss'
import postcssScss from 'postcss-scss'
import sorting from 'postcss-sorting'
import createConfig from './config'

const config = createConfig()

export default function sorter(css: string) {
  const result = postcss([sorting(config)]).process(css, {
    syntax: postcssScss,
  })

  return result.css
}
