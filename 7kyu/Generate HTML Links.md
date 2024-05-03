# [Generate HTML Links](https://www.codewars.com/kata/56896f078dcf3e886c000067)

## Description

We need a HTML menu.... but writing HTML over and-over-again is boooring... Let's just generate it instead!

**Task**

Write a function `generateMenu()` with the following inputs/output:

**Inputs**

`menuItems`: An array of objects (with `url` and `text` properties), which represents our menu items

**Output**

A string of HTML containing an anchor tag for each element of `menuItems` (with the appropriate `href` attribute and text content)

## My Solution

**JavaScript**

```js
const generateMenu = (menuItems) => menuItems.map((v) => `<a href="${v.url}">${v.text}</a>`).join('');
```

```js
const generateMenu = (menuItems) => menuItems.reduce((acc, cur) => (acc += `<a href="${cur.url}">${cur.text}</a>`), '');
```
