# [Always Perfect](https://www.codewars.com/kata/55f3facb78a9fd5b26000036)

## Description

While surfing in web I found interesting math problem called "Always perfect". That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square. For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, since the result number is a perfect square the square root of 25 would be 5.

So now lets write a function which takes numbers separated by commas in string format and returns the number which is a perfect square and the square root of that number.

If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".

If string contains 4 numbers but not consecutive it returns "not consecutive".

## My Solution

**JavaScript**

```js
const checkRoot = (str) => {
  const nums = str.split(',').map(Number);
  if (nums.length !== 4 || nums.some((n) => isNaN(n) || n === 0)) return 'incorrect input';
  if (nums.some((n, idx) => +n !== +nums[0] + idx)) return 'not consecutive';

  const product = nums.reduce((acc, cur) => acc * cur, 1);
  const square = product + 1;
  const squareRoot = Math.sqrt(square);
  return `${square}, ${squareRoot}`;
};
```
