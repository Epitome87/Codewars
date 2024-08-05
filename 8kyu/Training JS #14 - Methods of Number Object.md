# [Training JS #14: Methods of Number Object - toString() and toLocaleString()](https://www.codewars.com/kata/57238ceaef9008adc7000603)

## Description

Coding in function `colorOf`. function accept 3 parameter: `r`, `g`, `b`. It means value of color red green and blue. the value range is 0-255.

Use `toString(16)` Convert numbers r g b to hex string form. At last, combine them to a web color code and return it.

The color code should starting with "#". and then use 2 characters per color.

for example:

```
colorOf(255,0,0) should return "#ff0000"
colorOf(0,111,0) should return "#006f00"
colorOf(1, 2 ,3) should return "#010203"
```

## My Solution

**JavaScript**

```js
const colorOf = (r, g, b) => '#' + [r, g, b].map((v) => v.toString(16).padStart(2, 0)).join('');
```

```js
const colorOf = (r, g, b) => {
  const toHex = (n) => n.toString(16).padStart(2, 0);
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};
```
