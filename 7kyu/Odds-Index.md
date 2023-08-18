# [Odds-Index](https://www.codewars.com/kata/5a941f4e1a60f6e8a70025fe)

## Description

You are given an array with several `"even"` words, one `"odd"` word, and some numbers mixed in.

Determine if any of the numbers in the array is the index of the `"odd" `word. If so, return `true`, otherwise `false`.

## My Solution

**JavaScript**

```js
const oddBall = (arr) => arr.includes(arr.indexOf('odd'));
```

```js
const oddBall = (arr) => {
  const oddIndex = arr.indexOf('odd');
  return arr.includes(oddIndex);
};
```
