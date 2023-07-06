# [Cut Array Into Smaller Parts](https://www.codewars.com/kata/58ac59d21c9e1d7dc5000150)

## Description

Write function makeParts or make_parts (depending on your language) that will take an array as argument and the size of the chunk.

Example: if an array of size 123 is given and chunk size is 10 there will be 13 parts, 12 of size 10 and 1 of size 3.

## My Solution

**JavaScript**

```js
const makeParts = (arr, chunkSize) => {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};
```

```js
const makeParts = (arr, chunkSize) =>
  Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, i) =>
    arr.slice(i * chunkSize, i * chunkSize + chunkSize)
  );
```

### User Solution

**JavaScript**

```js
// Mutates input, though!
const makeParts = (arr, chunkSize) =>
  [...Array(Math.ceil(arr.length / chunkSize))].map((val) => arr.splice(0, chunkSize));
```
