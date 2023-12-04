# [Price is Right](https://www.codewars.com/kata/5af0a5fc783bb49e9500007d)

## Description

Given an array of integers, and a target integer, return the largest integer from the array that is less than or equal to the target.

If there is no number that is less than or equal to the target number then return undefined.

The array of integers may be empty, but will always be an array.

## My Solution

**JavaScript**

```js
const priceIsRight = (numbers, target) => (
  (max = Math.max(...numbers.filter((v) => v <= target))), max !== -Infinity ? max : undefined
);
```

### User Solution

**JavaScript**

```js
function priceIsRight(numbers, target) {
  return numbers.sort((a, b) => b - a).find((el) => el <= target);
}
```
