import fs from 'fs'
import path from 'path'
import { describe, it, expect } from 'vitest'
import { parsers } from '../parser'
import './test-fixtures.txt' // ensure we run the test when file changes

const getCss = (file) => {
  return fs.readFileSync(path.resolve(__dirname, file), 'utf-8')
}

describe('parser', () => {
  const css = getCss('./test-fixtures.txt')

  it('should match correct snapshot', () => {
    const output = parsers.scss.preprocess(css)

    console.log('output', output)

    // expect(output).toMatchSnapshot()
    expect(output).toMatchInlineSnapshot(/* css */ `
      ".declaration-order {
        /* Positioning */
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 10;

        display: block;
        float: right;
        width: 16rem; // Box Model
        height: 16rem;
        margin: 2rem;
        padding: 1rem;

        color: #111;

        /* Typography */
        font: normal 1rem Helvetica, sans-serif;
        line-height: 1.5rem;
        text-align: left;

        /* Visual */
        background-color: #eee;
        border: 1px solid #888;
        border-radius: 0.25rem;
        opacity: 1;

        /* Animation */
        transition: all 1s;

        /* Misc */
        user-select: none;
      }
      .more {
        position: absolute;

        transition: all 1s;
      }
      "
    `)
  })
})
