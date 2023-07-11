# [Average Array](https://www.codewars.com/kata/596f6385e7cd727fff0000d6)

## Description

**ASC Week 1 Challenge 5 (Medium #2)**

Create a function that takes a 2D array as an input, and outputs another array that contains the average values for the numbers in the nested arrays at the corresponding indexes.

Note: the function should also work with negative numbers and floats.

**Examples**

```
[ [1, 2, 3, 4], [5, 6, 7, 8] ]  ==>  [3, 4, 5, 6]

1st array: [1, 2, 3, 4]
2nd array: [5, 6, 7, 8]
            |  |  |  |
            v  v  v  v
average:   [3, 4, 5, 6]
```

And another one:

```
[ [2, 3, 9, 10, 7], [12, 6, 89, 45, 3], [9, 12, 56, 10, 34], [67, 23, 1, 88, 34] ]  ==>  [22.5, 11, 38.75, 38.25, 19.5]

1st array: [  2,   3,    9,   10,    7]
2nd array: [ 12,   6,   89,   45,    3]
3rd array: [  9,  12,   56,   10,   34]
4th array: [ 67,  23,    1,   88,   34]
              |    |     |     |     |
              v    v     v     v     v
average:   [22.5, 11, 38.75, 38.25, 19.5]
```

## My Solution

**JavaScript**

```js
const avgArray = (arr) => {
  const result = [];
  for (let i = 0; i < arr[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j][i];
    }
    result.push(sum / arr.length);
  }
  return result;
};
```

### User Solution

**JavaScript**

```js
const avgArray = (arr) => arr[0].map((_, idx) => arr.reduce((pre, val) => pre + val[idx], 0) / arr.length);
```
