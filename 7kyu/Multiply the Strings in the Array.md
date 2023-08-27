# [Multiply the Strings in the Array](https://www.codewars.com/kata/59b2963132779166d2001018)

## Description

You received an array with two strings. Create a function that will return their product as a string. E.g.

```
arrMultiply(['9','6']) should return '54'
```

## My Solution

**JavaScript**

```js
const arrMultiply = ([a, b]) => `${a * b}`;
```

```js
const arrMultiply = (arr) => `${arr.reduce((acc, cur) => acc * cur, 1)}`;
```
