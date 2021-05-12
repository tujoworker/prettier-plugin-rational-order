# Prettier Plugin for rational CSS styling order

Sorts related CSS property declarations by grouping them together.

If you have set your code editor to format (run prettier) on safe, it will order your styles automatically. Isn't that convenient?

## Supports

- Vanilla CSS
- SCSS/SASS
- Maybe other formats. But I did not test everything.

## Install

```sh
npm --save install prettier-plugin-rational-order
```

or (if you use [Yarn](https://yarnpkg.com/))

```sh
yarn add --dev prettier-plugin-rational-order
```

That's it. Prettier should pick up this plugin only in fact that the name of this module starts with `prettier-plugin-`.

### Prettier config

You can define where this plugin is placed so both your code editor and your CLI knows about the placement:

```json
// .prettierrc
{
  ...
  "plugins": ["../../node_modules/prettier-plugin-rational-order"]
}
```

### Peer dependencies

You may guessed it, you need [prettier](https://prettier.io) installed as well.

## What is rational styling order?

It will sort your styles in these groups:

1.  Positioning
2.  Box Model
3.  Typography
4.  Visual
5.  Animation
6.  Misc

```css
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: block;
  float: right;

  /* Box Model */
  width: 16rem;
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
```

Thanks to [stylelint-config-rational-order](https://github.com/constverum/stylelint-config-rational-order) for inspiration.
