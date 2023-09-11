# [Numbers with d Occurrences of Digit d](https://www.codewars.com/kata/)

## Description

In this kata, we want to discover a small property of numbers. We say that a number is a dd number if it contains d occurrences of a digit d, (d is in [1,9]).

**Examples**

- 664444309 is a dd number, as it contains 4 occurrences of the number 4
- 30313, 122 are dd numbers as they respectively contain 3 occurrences of the number 3, and (1 occurrence of the number 1 AND 2 occurrences of the number 2)
- 123109, 0, 56542 are not dd numbers

**Task**

Your task is to implement a function called is_dd (isDd in javascript) that takes a positive number (type depends on the language) and returns a boolean corresponding to whether the number is a dd number or not.

## My Solution

**JavaScript**

```js
const isDd = (n) => {
  const occurrences = [...`${n}`].reduce((acc, cur) => ({ ...acc, [cur]: acc[cur] + 1 || 1 }), {});
  return Object.entries(occurrences).some(([key, val]) => +key === val);
};
```

### User Solution

```js
function isDd(n) {
  var counter = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (var c of `${n}`) counter[c]++;
  for (var i = 1; i < counter.length; i++) if (counter[i] == i) return true;
  return false;
}
```

**JavaScript**

```js
function isDd(n) {
  return [...(n + '')]
    .sort()
    .join('')
    .match(/(.)\1*/g)
    .some((e) => e.length == +e[0]);
}
```
