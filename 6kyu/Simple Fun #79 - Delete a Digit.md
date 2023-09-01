# [Simple Fun #79: Delete a Digit](https://www.codewars.com/kata/5894318275f2c75695000146)

## Description

Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

**Example**

For n = 152, the output should be 52;

For n = 1001, the output should be 101.

**Input/Output**

- [input] integer n

Constraints: 10 ≤ n ≤ 1000000.

- [output] an integer

## My Solution

**JavaScript**

```js
const deleteDigit = (n, str = `${n}`) => Math.max(...[...str].map((_, i) => str.slice(0, i) + str.slice(++i)));
```

```js
const deleteDigit = (n, str = n.toString()) =>
  [...str].reduce((acc, cur, i) => ((val = str.slice(0, i) + str.slice(i + 1)), val > acc ? +val : acc), 0);
```

```js
const deleteDigit = (n) => {
  let max = 0;
  for (let i = 0; i < `${n}`.length; i++) {
    const num = n.toString().slice(0, i) + n.toString().slice(i + 1);
    if (+num > max) max = +num;
  }
  return max;
};
```

### User Solution

**JavaScript**

```js
function deleteDigit(n) {
  n = n.toString();
  var idx = [...n].findIndex((n, i, a) => n < a[i + 1]);
  return idx > -1 ? +(n.slice(0, idx) + n.slice(idx + 1)) : +n.slice(0, -1);
}
```
