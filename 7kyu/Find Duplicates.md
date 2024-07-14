# [Find Duplicates](https://www.codewars.com/kata/5558cc216a7a231ac9000022)

## Description

Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).

**Examples**

```
[1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
[0, 1, 2, 3, 4, 5]                ==>  []
```

## My Solution

**JavaScript**

```js
const duplicates = (arr) => {
  const set = new Set();
  const result = new Set();

  for (let n of arr) {
    if (set.has(n)) result.add(n);
    else set.add(n);
  }

  return [...result];
};
```

```js
const duplicates = (arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i]) && arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && i !== arr.indexOf(arr[i]))
      result.push(arr[i]);
  }

  return result;
};
```

### User Solution

**JavaScript**

```js
function duplicates(arr) {
  return arr.reduce(function (prev, cur, i, a) {
    if (i !== a.indexOf(cur) && prev.indexOf(cur) === -1) {
      prev.push(cur);
    }
    return prev;
  }, []);
}
```

```js
const duplicates = (arr) => arr.filter((v, i) => arr.indexOf(v) !== i && arr.lastIndexOf(v) === i);
```

```js
const duplicates = (arr) => [...new Set(arr.filter((el, i) => i !== arr.indexOf(el)))];
```
