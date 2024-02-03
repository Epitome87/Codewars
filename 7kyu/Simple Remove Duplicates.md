# [Simple Remove Duplicates](https://www.codewars.com/kata/5ba38ba180824a86850000f7)

## Description

Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

**Example:**

For input: [3, 4, 4, 3, 6, 3]

- remove the 3 at index 0
- remove the 4 at index 1
- remove the 3 at index 3

Expected output: [4, 6, 3]

## My Solution

**JavaScript**

```js
const solve = (arr) => arr.filter((v, i) => arr.lastIndexOf(v) === i);
```

```js
const solve = (arr) => {
  const res = [...arr];

  for (let i = 0; i < res.length; i++) {
    if (res.indexOf(arr[i]) !== res.lastIndexOf(arr[i])) {
      res[i] = 'x';
    }
  }

  return res.filter((el) => el !== 'x');
};
```

### My Solution

**JavaScript**

```js
const solve = (arr) => [...new Set(arr.reverse())].reverse();
```
