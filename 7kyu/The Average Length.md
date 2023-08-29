# [The Average Length](https://www.codewars.com/kata/5a430359e1ce0e35540000b1)

## Description

Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

```
['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
```

- If the average length is not an integer, use Math.round().
- The input array's length > 1

## My Solution

**JavaScript**

```js
const averageLength = (arr) =>
  arr.map((el) => el[0].repeat(Math.round(arr.reduce((acc, cur) => acc + cur.length, 0) / arr.length)));
```

```js
const averageLength = (arr) => {
  const average = Math.round(arr.reduce((acc, cur) => acc + cur.length, 0) / arr.length);
  return arr.map((el) => el[0].repeat(average));
};
```

### User Solution

**JavaScript**

```js
const averageLength = (arr) => arr.map((e) => e[0].repeat(Math.round(arr.join('').length / arr.length)));
```
