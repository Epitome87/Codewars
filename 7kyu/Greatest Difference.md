# [Greatest Difference](https://www.codewars.com/kata/56b12e3ad2387de332000041)

## Description

Task: Find the number couple with the greatest difference from a list of number-couples.

Input: A list of number-couples, where each couple is represented as a string containing two positive integers separated by a hyphen ("-").

Output: The number couple with the greatest difference, or False if there is no difference among any of the couples or in case of an empty list.

Additional Information:

- All number couples will be given as strings.
- All numbers in the couples are positive integers.
- If multiple couples have the same greatest difference, return the first one encountered in the input list.
- If there is no difference (both numbers in a couple are equal), return False.

## My Solution

**JavaScript**

```js
const diff = (arr) => {
  const differences = arr.map((str) => (([a, b] = str.split('-')), Math.abs(b - a)));
  return (max = Math.max(...differences)), max !== 0 && arr[differences.indexOf(max)];
};
```
