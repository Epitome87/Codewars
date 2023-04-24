# [Find the Unique Number](https://www.codewars.com/kata/585d7d5adb20cf33cb000235)

## Description

There is an array with some numbers. All numbers are equal except for one. Try to find it!

```js
findUniq([1, 1, 1, 2, 1, 1]) === 2;
findUniq([0, 0, 0.55, 0, 0]) === 0.55;
```

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

1. Find the unique number (this kata)
2. Find the unique string
3. Find The Unique

## My Solution

**JavaScript**

```js
function findUniq(arr) {
  const sortedArray = [...arr].sort();
  return sortedArray[0] !== sortedArray[1] ? sortedArray[0] : sortedArray.pop();
}
```

**TypeScript**

```ts
export const findUniq = (arr: number[]): number => {
  const sorted = [...arr].sort((a, b) => a - b);
  if (sorted[0] === sorted[1]) return sorted[arr.length - 1];
  return sorted[0];
};
```

### User Solution

**JavaScript**

```js
function findUniq(arr) {
  let [a, b, c] = arr.slice(0, 3);
  if (a != b && a != c) return a;
  for (let x of arr) if (x != a) return x;
}
```

```js
const findUniq = (arr) => +arr.filter((value) => arr.indexOf(value) == arr.lastIndexOf(value));
```

```js
function findUniq(arr) {
  const sortedArray = [...arr].sort();
  return sortedArray[0] !== sortedArray[1] ? sortedArray[0] : sortedArray.pop();
}
```
