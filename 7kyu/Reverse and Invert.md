# [Reverse and Invert](https://www.codewars.com/kata/5899e054aa1498da6b0000cc)

## Description

Reverse and invert all integer values in a given list.

```
reverse_invert([1,12,'a',3.4,87,99.9,-42,50,5.6]) = [-1,-21,-78,24,-5]
```

Remove all types other than integer.

## My Solution

**JavaScript**

```js
const reverseInvert = (arr) =>
  arr.filter(Number.isInteger).map((n) => -Math.sign(n) * parseInt([...`${n}`].reverse().join('')));
```

```js
const reverseInvert = (arr) => {
  const onlyIntegers = arr.filter(Number.isInteger);
  return onlyIntegers.map((n) => -Math.sign(n) * parseInt([...`${n}`].reverse().join('')));
};
```
