# [Sum of Array Singles](https://www.codewars.com/kata/59f11118a5e129e591000134)

## Description

In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

## My Solution

**JavaScript**

```js
const repeats = (arr) => arr.filter((n) => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((acc, curr) => acc + curr, 0);
```

```js
const repeats = (arr) => {
  const counts = {};

  for (let el of arr) {
    if (counts[el]) counts[el] = counts[el] + 1;
    else counts[el] = 1;
  }

  const singles = Object.keys(counts).filter((n) => counts[n] === 1);

  return singles.reduce((sum, curr) => sum + +curr, 0);
};
```

## Takeaways:

1. Object.keys(obj) returns a string.
2. Yet again, remember: We can check for uniques by seeing if arr.indexOf(el) === arr.lastIndexOf(el).
