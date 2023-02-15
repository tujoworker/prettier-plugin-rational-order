import prettier from 'prettier'
import postcssParser from 'prettier/parser-postcss'
import sorter from './sorter'

const { parsers: prettierParsers } = postcssParser
const languages = Object.keys(prettierParsers)

type Parser = {
  preprocess: (css: string) => string
}
type Parsers = {
  scss?: Parser
}

export const parsers: Parsers = {}

for (const lang of languages) {
  const parser = prettierParsers[lang]

  parsers[lang] = {
    ...parser,
    preprocess(css: string, options = null) {
      console.log('lang', lang)

      if (parser.preprocess) {
        css = parser.preprocess(css, options)
      }

      css = css.replace(/(?:\h*\n){2,}/g, '')
      css = css.replace(/\/\*/g, '\n\n/*')
      css = css.replace(/(?:\h*\n){2,}/, '')
      css = prettier.format(css, { parser: lang })
      css = sorter(css)

      return css
    },
  }
}
