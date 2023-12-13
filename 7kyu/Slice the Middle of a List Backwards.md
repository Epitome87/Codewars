# [Slice the Middle of a List Backwards](https://www.codewars.com/kata/5a043724ffe75fbab000009f)

## Description

Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.

## My Solution

**JavaScript**

```js
const reverseMiddle = (arr) => arr.slice(arr.length / 2 - 1, Math.ceil(arr.length / 2) + 1).reverse();
```
