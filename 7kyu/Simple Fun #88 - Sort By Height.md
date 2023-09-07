# [Simple Fun #88: Sort By Height](https://www.codewars.com/kata/589577f0d1b93ae32a000001)

## Description

Some people are standing in a row in a park. There are trees between them which cannot be moved.

Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

**Example**

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be

[-1, 150, 160, 170, -1, -1, 180, 190].

**Input/Output**

- [input] integer array a

If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

Constraints:

5 ≤ a.length ≤ 30,

-1 ≤ a[i] ≤ 200.

- [output] an integer array

Sorted array a with all the trees untouched.

## My Solution

**JavaScript**

```js
const sortByHeight = (a) => {
  const heights = a.filter((el) => el !== -1).sort((a, b) => a - b);
  return a.map((el, idx) => (el === -1 ? -1 : heights.shift()));
};
```

### User Solution

**JavaScript**

```js
const sortByHeight = (a) =>
  ((arr) => a.map((val) => (~val ? arr.shift() : -1)))(a.filter((val) => ~val).sort((a, b) => a - b));
```
