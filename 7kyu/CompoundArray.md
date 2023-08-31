# [CompoundArray](https://www.codewars.com/kata/56044de2aa75e28875000017)

## Description

You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

```
Input - {1,2,3,4,5,6} and {9,8,7,6}
Output - {1,9,2,8,3,7,4,6,5,6}
```

## My Solution

**JavaScript**

```js
// Mutates input, though
const compoundArray = (a, b) => {
  const result = [];
  while (a.length && b.length) result.push(a.shift(), b.shift());
  while (a.length) result.push(a.shift());
  while (b.length) result.push(b.shift());
  return result;
};
```

### User Solution

**JavaScript**

```js
const compoundArray = (a, b) => {
  const res = [];

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (i in a) res.push(a[i]);
    if (i in b) res.push(b[i]);
  }

  return res;
};
```
