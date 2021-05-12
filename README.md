# Prettier Plugin for rational CSS styling order

Sorts related CSS property declarations by grouping them together.

## Supports

- Vanilla CSS
- SCSS/SASS

## Install

```sh
npm --save install prettier-plugin-rational-order
```

or (if you use [Yarn](https://yarnpkg.com/))

```sh
yarn add --dev prettier-plugin-rational-order
```

That's it. Prettier should pick up this plugin only in fact that the name of this module starts with `prettier-plugin-`.

If you have set your code editor to format (run prettier) on safe, it will order your styles automatically. Isn't that convenient?

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

  /* Box Model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;

  /* Typography */
  color: #888;
  font: normal 16px Helvetica, sans-serif;
  line-height: 1.3;
  text-align: center;

  /* Visual */
  background-color: #eee;
  border: 1px solid #888;
  border-radius: 4px;
  opacity: 1;

  /* Animation */
  transition: all 1s;

  /* Misc */
  user-select: none;
}
```

Thanks to [stylelint-config-rational-order](https://github.com/constverum/stylelint-config-rational-order) for the inspiration.
