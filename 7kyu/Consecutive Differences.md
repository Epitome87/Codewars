# [Consecutive Differences](https://www.codewars.com/kata/5ff22b6e833a9300180bb953)

## Description

Given a list of integers, find the positive difference between each consecutive pair of numbers, and put this into a new list of differences. Then, find the differences between consecutive pairs in this new list, and repeat until the list has a length of 1. Then, return the single value.

The list will only contain integers, and will not be empty.

For example:

```js
differences([1, 2, 3]) => [1, 1] => [0] -> 0
differences([1, 5, 2, 7, 8, 9, 0]) => [4, 3, 5, 1, 1, 9] => [1, 2, 4, 0, 8] => .. => 1
differences([2, 3, 1]) => [1, 2] => [1] => 1
```

## My Solution

**JavaScript**

```js
const differences = (a) => {
  let currArr = [...a];
  for (let n = 0; n < a.length - 1; n++) {
    const result = [];
    for (let i = 0; i < currArr.length - 1; i++) {
      result.push(Math.abs(currArr[i + 1] - currArr[i]));
    }
    currArr = [...result];
  }
  return currArr[0];
};
```

### User Solution

**JavaScript**

```js
const differences = (a) => {
  while (a.length !== 1) {
    a = a.slice(1).map((e, i) => Math.abs(a[i] - e));
  }
  return +a;
};
```

```js
// Clever recursive approach
const differences = (a) => (a.length > 1 ? differences(a.slice(1).map((val, idx) => Math.abs(val - a[idx]))) : a[0]);
```

## Takeaways

1. Although not as readable, we can do `+arr` to return the value in an array _if_ it is the only value inside of it.
