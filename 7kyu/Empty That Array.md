# [Empty That Array!](https://www.codewars.com/kata/58e3ffb01f878507e00005b0)

## Description

Today's task is to write a function empty(), which take an array as argument. This function should return the same array, but empty.

To make it even more fun, you are not allowed to use any kind of loop (nor recursion)

## My Solution

**JavaScript**

```js
const empty = (array) => ((array.length = 0), array);
```
