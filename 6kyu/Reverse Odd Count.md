# [Reverse Odd Count](https://www.codewars.com/kata/58a4f7f43d97b56d27000022)

## Description

Reverse all elements in an array that occur an odd number of times.

['a', 'a', 'b', 'c', 'c', 'd'] will output:

['a', 'a', 'd', 'c', 'c', 'b']

Since there are 2 a's and 2 c's, they will stay in place. There is 1 d and 1 b, so they will swap places.

## My Solution

**JavaScript**

```js
const reverseOddCount = (arr) => {
  const frequency = arr.reduce((acc, cur) => ({ ...acc, [cur]: acc[cur] + 1 || 1 }), {});
  const odds = arr.filter((v) => frequency[v] % 2);
  return arr.map((v) => (frequency[v] % 2 ? odds.pop() : v));
};
```

```js
const reverseOddCount = (arr) => {
  const frequency = arr.reduce((acc, cur) => ({ ...acc, [cur]: acc[cur] + 1 || 1 }), {});
  const oddIndices = arr.reduce((acc, cur, idx) => (frequency[cur] % 2 ? [...acc, idx] : acc), []);
  const oddValues = oddIndices.reduce((acc, cur) => [...acc, arr[cur]], []);
  return arr.map((v, i) => (oddIndices.includes(i) ? oddValues.pop() : v));
};
```
