# [Insert Dashes 2](https://www.codewars.com/kata/55c3026406402936bc000026)

## Description

This is a follow up from my kata Insert Dashes.
Write a function insertDashII(num) that will insert dashes ('-') between each two odd numbers and asterisk ('\*') between each even numbers in num

For example:

```
insertDashII(454793) --> 4547-9-3
insertDashII(1012356895) --> 10123-56*89-5
```

Zero shouldn't be considered even or odd.

## My Solution

**JavaScript**

```js
const insertDashII = (num) => {
  const odds = (a, b) => Number.isInteger(b) && a % 2 && b % 2;
  const evens = (a, b) => Number.isInteger(b) && !(a % 2) && !(b % 2) && a * b;
  return [...`${num}`]
    .map(Number)
    .reduce(
      (acc, cur, i, arr) => `${acc}${cur}${evens(arr[i], arr[i + 1]) ? '*' : odds(arr[i], arr[i + 1]) ? '-' : ''}`,
      ''
    );
};
```

```js
const insertDashII = (num) => {
  const isOdd = (n) => n % 2;
  const isEven = (n) => !(n % 2) && n !== 0;

  const numArr = [...`${num}`].map(Number);
  const result = [];

  for (let i = 0; i < numArr.length; i++) {
    result.push(numArr[i]);

    if (i !== numArr.length - 1 && isEven(numArr[i]) && isEven(numArr[i + 1])) result.push('*');
    if (i !== numArr.length - 1 && isOdd(numArr[i]) && isOdd(numArr[i + 1])) result.push('-');
  }

  return result.join('');
};
```

### User Solution

**JavaScript**

```js
function insertDashII(num) {
  return String(num)
    .replace(/([13579])(?=[13579])/g, '$1-')
    .replace(/([2468])(?=[2468])/g, '$1*');
}
```
