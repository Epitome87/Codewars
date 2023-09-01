# [Find Missing Numbers](https://www.codewars.com/kata/56d02e6cc6c8b49c510005bb)

## Description

You will get an array of numbers.

Every preceding number is smaller than the one following it.

Some numbers will be missing, for instance:

```
[-3,-2,1,5] //missing numbers are: -1,0,2,3,4
```

Your task is to return an array of those missing numbers:

```
[-1,0,2,3,4]
```

## My Solution

**JavaScript**

```js
const findMissingNumbers = (arr) =>
  Array.from({ length: arr.at(-1) - arr[0] + 1 }, (v, i) => arr[0] + i).filter((el) => !arr.includes(el));
```

```js
const findMissingNumbers = (arr) => {
  const full = Array.from({ length: arr.at(-1) - arr[0] + 1 }, (v, i) => arr[0] + i);
  const missing = full.filter((el) => !arr.includes(el));
  return missing;
};
```
