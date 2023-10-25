# [Almost Even](https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b)

## Description

We need the ability to divide an unknown integer into a given number of even parts - or at least as even as they can be. The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.

Complete the function so that it returns an array of integers representing the parts. If the input number is too small to split it into requested amount of parts, the additional parts should have value 0. Ignoring the order of the parts, there is only one valid solution for each input to your function!

**Example:**

```js
splitInteger(20, 6); // returns [3, 3, 3, 3, 4, 4]
```

**Inputs**

The input to your function will always be valid for this kata.

## My Solution

**JavaScript**

```js
const splitInteger = (num, parts) => {
  const floor = Math.floor(num / parts);
  const ceil = Math.ceil(num / parts);
  let sum = 0;

  return [...Array(parts)].map((_, idx) => {
    if (ceil * (parts - idx) === num - sum) {
      sum += ceil;
      return ceil;
    }
    sum += floor;
    return floor;
  });
};
```

```js
const splitInteger = (num, parts) => {
  const result = [];
  const floor = Math.floor(num / parts);
  const ceil = Math.ceil(num / parts);
  let sum = 0;

  for (let i = 0; i < parts; i++) {
    if (ceil * (parts - result.length) === num - sum) {
      result.push(ceil);
      sum += ceil;
    } else {
      result.push(floor);
      sum += floor;
    }
  }

  return result;
};
```

### User Solution

**JavaScript**

```js
function splitInteger(num, parts) {
  const remainder = num % parts;
  const int = Math.floor(num / parts);

  return [...new Array(parts - remainder).fill(int), ...new Array(remainder).fill(int + 1)];
}
```

```js
const splitInteger = (n, p) => [...Array(p)].map((_, idx) => ((n / p) ^ 0) + (p - ++idx < n % p));
```
