# [Array Mash](https://www.codewars.com/kata/582642b1083e12521f0000da)

## Description

Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']

## My Solution

**JavaScript**

```js
const arrayMash = (arr1, arr2) => arr1.reduce((acc, curr, idx) => [...acc, curr, arr2[idx]], []);
```

```js
const arrayMash = (arr1, arr2) =>
  Array.from({ length: arr1.length * 2 }, (v, idx) => (idx % 2 ? arr2[(idx / 2) ^ 0] : arr1[idx / 2]));
```

```js
const arrayMash = (arr1, arr2) => {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i], arr2[i]);
  }
  return result;
};
```
