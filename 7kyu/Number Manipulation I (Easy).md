# [Number Manipulation I (Easy)](https://www.codewars.com/kata/5890579a34a7d44f3b00009e)

## Description

For a given large number (num), write a function which returns the number with the second half of digits changed to 0.

In cases where the number has an odd number of digits, the middle digit onwards should be changed to 0.

Example:

192827764920 --> 192827000000

938473 --> 938000

2837743 --> 2830000

## My Solution

**JavaScript**

```js
const manipulate = (num) => {
  const numStr = num.toString();
  return +numStr.slice(0, numStr.length / 2).padEnd(numStr.length, 0);
};
```

```js
const manipulate = (num) => {
  const numStr = num.toString();
  return +numStr.slice(0, Math.floor(numStr.length / 2)).padEnd(numStr.length, 0);
};
```

### User Solution

**JavaScript**

```js
function manipulate(num) {
  const a = Math.ceil((1 + Math.floor(Math.log10(num))) / 2);
  const b = Math.pow(10, a);
  return Math.floor(num / b) * b;
}
```
