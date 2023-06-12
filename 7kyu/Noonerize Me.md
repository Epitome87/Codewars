# [Noonerize Me](https://www.codewars.com/kata/56dbed3a13c2f61ae3000bcd)

## Description

Spoonerize... with numbers... numberize?... numboonerize?... noonerize? ...anyway! If you don't yet know what a spoonerism is and haven't yet tried my spoonerism kata, please do check it out first.

You will create a function which takes an array of two positive integers, spoonerizes them, and returns the positive difference between them as a single number or 0 if the numbers are equal:

```
[123, 456] = 423 - 156 = 267
```

Your code must test that all array items are numbers and return "invalid array" if it finds that either item is not a number. The provided array will always contain 2 elements.

When the inputs are valid, they will always be integers, no floats will be passed. However, you must take into account that the numbers will be of varying magnitude, between and within test cases.

## My Solution

**JavaScript**

```js
const noonerize = (numbers) => {
  if (numbers.some((el) => typeof el !== 'number')) return 'invalid array';

  let numStr1 = numbers[0].toString();
  let numStr2 = numbers[1].toString();
  const [num1, num2] = [+`${numStr2[0]}${numStr1.slice(1)}`, +`${numStr1[0]}${numStr2.slice(1)}`];

  return Math.abs(num1 - num2);
};
```

### User Solution

**JavaScript**

```js
const noonerize = (numbers) =>
  numbers.some(isNaN)
    ? `invalid array`
    : Math.abs(numbers.map((val, idx) => `${numbers[idx ^ 1]}`[0] + `${val}`.slice(1)).reduce((pre, val) => pre - val));
```
