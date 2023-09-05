# [Mean Vs. Median](https://www.codewars.com/kata/5806445c3f1f9c2f72000031)

## Description

Your goal is to implement the method meanVsMedian which accepts an odd-length array of integers and returns one of the following:

- 'mean' - in case mean value is larger than median value
- 'median' - in case median value is larger than mean value
- 'same' - in case both mean and median share the same value

Array will always be valid (odd-length >= 3)

## My Solution

**JavaScript**

```js
const meanVsMedian = (numbers) => {
  const median = [...numbers].sort((a, b) => a - b)[(numbers.length / 2) ^ 0];
  const mean = numbers.reduce((acc, cur) => acc + cur, 0) / numbers.length;
  return mean > median ? 'mean' : mean < median ? 'median' : 'same';
};
```
