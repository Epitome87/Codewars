# [Excessively Abundant Numbers](https://www.codewars.com/kata/56a75b91688b49ad94000015)

## Description

An abundant number or excessive number is a number for which the sum of its proper divisors is greater than the number itself.

The integer 12 is the first abundant number. Its proper divisors are 1, 2, 3, 4 and 6 for a total of 16 (> 12).

Derive function abundantNumber(num)/abundant_number(num) which returns true/True/.true. if num is abundant, false/False/.false. if not.

## My Solution

**JavaScript**

```js
const abundantNumber = (num) =>
  Array.from({ length: num / 2 }, (_, i) => i + 1).reduce((acc, cur) => acc + (num % cur ? 0 : cur), 0) > num;
```

```js
const abundantNumber = (num) => {
  let divisorSum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) divisorSum += i;
  }
  return divisorSum > num;
};
```